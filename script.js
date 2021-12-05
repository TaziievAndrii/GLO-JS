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
    screenPrice = getPrice("Сколько будет стоить данная работа? Например: 20000 ")
    adaptive = confirm("Нужен ли адаптив на сайте?");
}

const getPrice = function (msg) {
    let price;
    
    do {
        price = prompt(msg);
    } while (!isNumber(price))

    return +price
}

const getAllServicePrices = function () {
    let sum = 0;
    for(let i = 0; i < 2; i++){

        if(i === 0) {
            service1 = prompt("Какой дополнительный тип услуги нужен?", "например: Админка, Встраивание плагинов")
        } else if(i === 1) {
            service2 = prompt("Какой дополнительный тип услуги нужен?", "например: Админка, Встраивание плагинов")
        }

        sum += getPrice("Сколько это будет стоить? Например: 10000")
    } 
    return sum;
}

function getFullPrice() {
    return +screenPrice + allServicePrices
}

function getTitle() {
    const trimmedString = title.trim().toLowerCase();
    return trimmedString.charAt(0).toUpperCase() + trimmedString.slice(1);
}

const getServicePercentPrices = function () {
   return fullPrice - (fullPrice * (rollback / 100))
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
fullPrice = getFullPrice();
servicePercentPrice = getServicePercentPrices();
title = getTitle();

showTypeOf(fullPrice);
showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

// блок вывода в console
console.log("[allServicePrices]",allServicePrices);
console.log("[getRollbackMessage]", getRollbackMessage(fullPrice));
console.log("[screens]", screens.length);
console.log("[servicePercentPrice]", servicePercentPrice);