'use strict'

// Узнаем подробности проекта 
let title;
let screens;
let screenPrice;
let adaptive;
const rollback = 27;
let allServicePrices;
let fullPrice;
let servicePercentPrice;
let service1;
let service2;

// функциональный блок
const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
}

const asking = function() {
    title = prompt("Как называется ваш проект ?");
    screens = prompt("Какие типы экранов нужно разработать?", "пример: Простые, Сложные, Интерактивные");
    adaptive = confirm("Нужен ли адаптив на сайте?");
}

const myScreenPrice = function () {
    let price = 0;
    do {
        price += +prompt("Сколько будет стоить данная работа?", "пример: 12000");
    } while (!isNumber(price))

    return price
}

const getAllServicePrices = function () {
    let sum = 0;
    for(let i = 0; i < 2; i++){
        let cost = 0;

        if(i === 0) {
            service1 = prompt("Какой дополнительный тип услуги нужен?", "например: Админка, Встраивание плагинов")
        } else if(i === 1) {
            service2 = prompt("Какой дополнительный тип услуги нужен?", "например: Админка, Встраивание плагинов")
        }

        do {
            cost = +prompt("Сколько это будет стоить?", "например: 1000")
        } while(!isNumber(cost))
        sum += +cost
    } 
    return sum;
}

function getFullPrice(screenPrice, allServicePrices) {
    if (isNumber(screenPrice + allServicePrices)) return screenPrice + allServicePrices
}

function getTitle(string) {
    const trimmedString = string.trim().toLowerCase();
    return trimmedString.charAt(0).toUpperCase() + trimmedString.slice(1);
}

const getServicePercentPrices = function (totalCost) {
   return totalCost - (totalCost * (rollback / 100))
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

asking()
allServicePrices = getAllServicePrices();
screenPrice = myScreenPrice();
fullPrice = getFullPrice(screenPrice,allServicePrices);
servicePercentPrice = getServicePercentPrices(fullPrice);
title = getTitle(title);

showTypeOf(fullPrice);
showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

// блок вывода в console
console.log("[allServicePrices]",allServicePrices);
console.log("[getRollbackMessage]", getRollbackMessage(fullPrice));
console.log("[screens]", screens.length);
console.log("[servicePercentPrice]", servicePercentPrice);