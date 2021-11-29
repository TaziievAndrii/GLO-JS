'use strict'

let title = prompt("Как называется ваш проект ?");
let screens = prompt("Какие типы экранов нужно разработать?", "пример: Простые, Сложные, Интерактивные");
let arrayScreens = screens.toLowerCase().split(", ");
let screenPrice = +prompt("Сколько будет стоить данная работа?", "пример: 12000");
let rollback = 27;
let adaptive = confirm("Нужен ли адаптив на сайте?");

let service1 = prompt("Какой дополнительный тип услуги нужен?", "например: service1");
let servicePrice1 = +prompt("Сколько это будет стоить?", "например: 1000");

let service2 = prompt("Какой дополнительный тип услуги нужен?", "например: service2");
let servicePrice2 = +prompt("Сколько это будет стоить?", "например: 1000");

let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let rollbackPercentage = fullPrice * (rollback / 100);
let servicePercentPrice = Math.ceil(fullPrice - rollbackPercentage);

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
