"use strict";

const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  adaptive: "",
  rollback: 10,
  allServicePrices: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  services: {},
  start: function () {
    appData.asking();
    appData.getAllServicePrices();
    appData.getFullPrice();
    appData.getServicePercentPrices();
    appData.getTitle();
    appData.getRollbackMessage(appData.fullPrice);
    appData.showTypeOf(appData.fullPrice);
    appData.showTypeOf(appData.title);
    appData.showTypeOf(appData.screenPrice);
    appData.showTypeOf(appData.adaptive);
    appData.logger();
  },
  asking: function () {
    appData.title = appData.checkString(" Как называется Ваш проект ? ");

    appData.adaptive = confirm("Нужен ли адаптив на сайте?");

    for (let i = 0; i < 2; i++) {
      const name = appData.checkString(
        "Какие типы экранов нужно разработать?пример: Простые, Сложные, Интерактивные"
      );
      appData.screenPrice = appData.getPrice(
        "Сколько будет стоить данная работа? Например: 20000 "
      );
      appData.screens[name] = appData.screenPrice;
      appData.screens.push({ id: i, name, price: appData.screens[name] });
    }

    for (let i = 0; i < 2; i++) {
      const name = appData.checkString(
        "Какой дополнительный тип услуги нужен?например: Админка, Встраивание плагинов"
      );
      appData.services[name] = appData.getPrice(
        "Сколько это будет стоить? Например: 10000"
      );
    }
  },
  checkString: function (str) {
    let name = prompt(str);

    if (!isNaN(name)) {
      name = appData.checkString(str);
    }
    return name;
  },
  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  },
  getPrice: function (msg) {
    let price = prompt(msg);

    if (!appData.isNumber(price)) {
      price = appData.getPrice(msg);
    }

    return +price;
  },
  getAllServicePrices: function () {
    for (const key in appData.services) {
      appData.allServicePrices += appData.services[key];
    }
  },
  getFullPrice: function () {
    appData.fullPrice = +appData.screenPrice + appData.allServicePrices;
  },
  getTitle: function () {
    const trimmedString = appData.title;
    let name;
    if (trimmedString !== null) {
      name = trimmedString.trim().toLowerCase();
      appData.title = name.charAt(0).toUpperCase() + name.slice(1);
    }

    return name;
  },
  getServicePercentPrices: function () {
    const res =
      appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
    appData.servicePercentPrice = Math.ceil(res);
  },
  showTypeOf: function (variable) {
    console.log(typeof variable);
  },
  getRollbackMessage: function (price) {
    switch (true) {
      case price >= 30000:
        appData.getRollbackMessage = "Даем скидку в 10%";
        return;
      case price >= 15000 && price < 30000:
        appData.getRollbackMessage = "Даем скидку в 5%";
        return;
      case price < 15000 && price >= 0:
        appData.getRollbackMessage = "Скидка не предусмотрена";
        return;
      case price < 0:
        appData.getRollbackMessage = "Что то пошло не так";
        return;
    }
  },
  logger: function () {
    for (const prop in appData) {
      if (typeof appData[prop] !== "function") {
        console.log("Ключ: " + prop + " Значение: " + appData[prop]);
      }
    }
  },
};
console.log("[appData.screens]", appData.screens);
console.log(appData.services);
appData.start();
