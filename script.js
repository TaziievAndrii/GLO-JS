'use strict'

// Узнаем название проекта и сохраняем в переменную
let title = prompt("Как называется ваш проект ?");

// Узнаем типы о типах экранов для разработки
let screens = prompt("Какие типы экранов нужно разработать?", "пример: Простые, Сложные, Интерактивные");

// Данные об экраннах переводим в нижний регистр
const arrayScreens = screens.toLowerCase().split(", ");

// Узнаем стоимость работы
let screenPrice = +prompt("Сколько будет стоить данная работа?", "пример: 12000");

// Задаем ставку отката
const rollback = 27;

// Узнаем про адаптацию экрана 
let adaptive = confirm("Нужен ли адаптив на сайте?");

// Узнаем про дополнительные услуги и их стоимость 
let service1 = prompt("Какой дополнительный тип услуги нужен?", "например: service1");
let servicePrice1 = +prompt("Сколько это будет стоить?", "например: 1000");

let service2 = prompt("Какой дополнительный тип услуги нужен?", "например: service2");
let servicePrice2 = +prompt("Сколько это будет стоить?", "например: 1000");
//! Узнаем про дополнительные услуги и их стоимость 

// Рассчитываем стоимость всех услуг
let fullPrice = screenPrice + servicePrice1 + servicePrice2;

// Узнаем сумму отката посреднику
let rollbackPercentage = fullPrice * (rollback / 100);

// Просчитываем чистый доход за проект
const servicePercentPrice = Math.ceil(fullPrice - rollbackPercentage);

// Условия предоставления скидки
switch (true) {
    case fullPrice >= 30000:
        console.log("Даем скидку в 10%");
        break;
    case fullPrice >= 15000 && fullPrice < 30000:
        console.log("Даем скидку в 5%");
        break;
    case fullPrice < 15000 && fullPrice >= 0:
        console.log("Скидка не предусмотрена");
        break;
    case fullPrice < 0:
        console.log("Что то пошло не так");
        break;
}

console.log("[title]", typeof title);
console.log("[screens]", screens.length);
console.log("[arrayScreens]", arrayScreens);
console.log("[screenPrice]", screenPrice + " рублей");
console.log("[fullPrice]", typeof fullPrice);
console.log("[fullPrice]", fullPrice + " рублей");
console.log("[rollbackPercentage]", rollbackPercentage);
console.log("[adaptive]", typeof adaptive);
console.log("[servicePercentPrice]", servicePercentPrice);