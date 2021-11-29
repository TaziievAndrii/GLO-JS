'use strict'

// Узнаем подробности проекта 
const title = prompt("Как называется ваш проект ?");
const screens = prompt("Какие типы экранов нужно разработать?", "пример: Простые, Сложные, Интерактивные");
const arrayScreens = screens.toLowerCase().split(", ");
const adaptive = confirm("Нужен ли адаптив на сайте?");

// Узнаем про дополнительные услуги и их стоимость 
const service1 = prompt("Какой дополнительный тип услуги нужен?", "например: Админка, Встраивание плагинов");
const servicePrice1 = +prompt("Сколько это будет стоить?", "например: 1000");
const service2 = prompt("Какой дополнительный тип услуги нужен?", "например: Админка, Встраивание плагинов");
const servicePrice2 = +prompt("Сколько это будет стоить?", "например: 1000");

// Рассчитываем стоимость проекта
const rollback = 27;
const screenPrice = +prompt("Сколько будет стоить данная работа?", "пример: 12000");
const fullPrice = screenPrice + servicePrice1 + servicePrice2;
const rollbackPercentage = fullPrice * (rollback / 100);
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