'use strict'

let appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: '',
    rollback: 10,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    services: {},
    start: function () {
        appData.asking()
        appData.getAllServicePrices();
        appData.getFullPrice();
        appData.getServicePercentPrices();
        appData.getTitle();
        appData.getRollbackMessage(appData.fullPrice)
        appData.showTypeOf(appData.fullPrice);
        appData.showTypeOf(appData.title);
        appData.showTypeOf(appData.screenPrice);
        appData.showTypeOf(appData.adaptive);
        appData.logger()
    },
    asking: function () {
        appData.title = appData.checkString(" Как называется Ваш проект ? ");

        appData.adaptive = confirm("Нужен ли адаптив на сайте?");

        for (let i = 0; i < 2; i++) {
            let name = appData.checkString("Какие типы экранов нужно разработать?", "пример: Простые, Сложные, Интерактивные")
            appData.screens[name] = appData.getPrice("Сколько будет стоить данная работа? Например: 20000 ")
            appData.screens.push({ id: i, name: name, price: appData.screens[name] })
        }

        for (let i = 0; i < 2; i++) {
            let name = appData.checkString("Какой дополнительный тип услуги нужен?", "например: Админка, Встраивание плагинов")
            appData.services[name] = appData.getPrice("Сколько это будет стоить? Например: 10000")
        }
    },
    checkString: function (str) {
        let name = prompt(str)
        if (typeof name !== "string" || /^[0-9]+$/.test(name)) {
            appData.checkString(str)
        }
        return name
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
        for (let key in appData.services) {
            appData.allServicePrices += appData.services[key]
        }
    },
    getFullPrice: function () {
        appData.fullPrice = +appData.screenPrice + appData.allServicePrices
    },
    getTitle: function () {
        const trimmedString = appData.title.trim().toLowerCase();
        appData.title = trimmedString.charAt(0).toUpperCase() + trimmedString.slice(1);
    },
    getServicePercentPrices: function () {
        let res = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
        appData.servicePercentPrice = Math.ceil(res)
    },
    showTypeOf: function (variable) {
        console.log(typeof variable);
    },
    getRollbackMessage: function (price) {
        switch (true) {
            case price >= 30000:
                appData.getRollbackMessage = "Даем скидку в 10%"
                return
            case price >= 15000 && price < 30000:
                appData.getRollbackMessage = "Даем скидку в 5%"
                return
            case price < 15000 && price >= 0:
                appData.getRollbackMessage = "Скидка не предусмотрена"
                return
            case price < 0:
                appData.getRollbackMessage = "Что то пошло не так"
                return
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
console.log("[appData.screens]", appData.screens);
console.log(appData.services);
appData.start()