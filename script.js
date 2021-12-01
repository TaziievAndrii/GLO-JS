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
let screenPrice;


// функциональный блок
const myScreenPrice = function () {
    let price = 0;
    do {
        price += +prompt("Сколько будет стоить данная работа?", "пример: 12000");
    } while (false)

    return price
}

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
}

const getAllServicePrices = function (servicePrice1, servicePrice2) {
    if (isNumber(servicePrice1 + servicePrice2)) return servicePrice1 + servicePrice2;
}

function getFullPrice(screenPrice, allServicePrices) {
    return screenPrice + allServicePrices
}

function getTitle(string) {
    const trimmedString = string.trim().toLowerCase();
    return trimmedString.charAt(0).toUpperCase() + trimmedString.slice(1);
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

screenPrice = myScreenPrice();
const allServicePrices = getAllServicePrices(servicePrice1, servicePrice2);
const fullPrice = getFullPrice(screenPrice, allServicePrices);
console.log("allServicePrices", allServicePrices);
console.log("screenPrice", screenPrice);
console.log("fullPrice", fullPrice);
const rollbackPercentage = fullPrice * (rollback / 100);
const servicePercentPrice = getServicePercentPrices(fullPrice, rollbackPercentage);


showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

// блок вывода в console
console.log("[screens]", screens.length);
console.log("[arrayScreens]", arrayScreens);
console.log("[servicePercentPrice]", servicePercentPrice);
console.log("[getRollbackMessage]", getRollbackMessage(fullPrice));
