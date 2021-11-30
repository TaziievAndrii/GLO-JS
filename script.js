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

// функциональный блок
const getAllServicePrices = function (servicePrice1, servicePrice2) {
    return servicePrice1 + servicePrice2;
}

function getFullPrice(screenPrice, allServicePrices) {
    return screenPrice + allServicePrices
}

function getTitle(string) {
    return string.trim().charAt(0).toUpperCase() + string.trim().slice(1).toLowerCase();
}

const getServicePercentPrices = function (totalCost, rollbackPercentage) {
    return totalCost - rollbackPercentage
}

const showTypeOf = function (variable) {
    console.log("[variable]", typeof variable);
}

const getRollbackMessage = function (price) {
    switch (true) {
        case price >= 30000:
            return "Даем скидку в 10%"
        case price >= 15000 && price < 30000:
            return "Даем скидку в 5%"
        case price < 15000 && price >= 0:
            return "Скидка не предусмотрена"
        case price < 0:
            return "Что то пошло не так"
    }
}

const allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);
const fullPrice = getFullPrice(screenPrice, allServicePrices);
const rollbackPercentage = fullPrice * (rollback / 100);
const servicePercentPrice = Math.ceil(getServicePercentPrices(fullPrice, rollbackPercentage));

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

// блок вывода в console
console.log("[screens]", screens.split(","));
console.log("[screens]", screens.length);

console.log("[servicePercentPrice]", servicePercentPrice);
console.log("[getRollbackMessage]", getRollbackMessage(fullPrice));