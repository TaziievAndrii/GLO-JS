'use strict'

let appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: '',
    rollback: 10,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    service1: '',
    service2: '',
    start: function () {
        appData.asking()
        appData.allServicePrices = appData.getAllServicePrices();
        appData.screenPrice = appData.getPrice();
        appData.fullPrice = appData.getFullPrice();
        appData.servicePercentPrice = appData.getServicePercentPrices();
        appData.title = appData.getTitle();
        appData.getRollbackMessage = appData.getRollbackMessage(appData.fullPrice)
        appData.showTypeOf(appData.fullPrice);
        appData.showTypeOf(appData.title);
        appData.showTypeOf(appData.screenPrice);
        appData.showTypeOf(appData.adaptive);
        appData.logger()
    },
    asking: function () {
        appData.title = prompt("Как называется ваш проект ?");
        appData.screens = prompt("Какие типы экранов нужно разработать?", "пример: Простые, Сложные, Интерактивные");
        appData.screenPrice = appData.getPrice("Сколько будет стоить данная работа? Например: 20000 ")
        appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    },
    isNumber: function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num)
    },
    getPrice: function (msg) {
        let price = 0;
        do {
            price += +prompt(msg);
        } while (!appData.isNumber(price))

        return +price
    },
    getAllServicePrices: function () {
        let sum = 0;
        for (let i = 0; i < 2; i++) {

            if (i === 0) {
                appData.service1 = prompt("Какой дополнительный тип услуги нужен?", "например: Админка, Встраивание плагинов")
            } else if (i === 1) {
                appData.service2 = prompt("Какой дополнительный тип услуги нужен?", "например: Админка, Встраивание плагинов")
            }


            sum += appData.getPrice("Сколько это будет стоить? Например: 10000")
        }
        return sum;
    },
    getFullPrice: function () {
        return +appData.screenPrice + appData.allServicePrices
    },
    getTitle: function () {
        const trimmedString = appData.title.trim().toLowerCase();
        return trimmedString.charAt(0).toUpperCase() + trimmedString.slice(1);
    },
    getServicePercentPrices: function () {
        let res =  appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
        return Math.ceil(res)
    },
    showTypeOf: function (variable) {
        console.log(typeof variable);
    },
    getRollbackMessage: function (price) {
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
    },
    logger: function () {

        for (let prop in appData) {
        if (typeof appData[prop] !== "function") {
                console.log("Ключ: " + prop + " " + "Значение: " + appData[prop]);
            }
        }
    }
}

appData.start()