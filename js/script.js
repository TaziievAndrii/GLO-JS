"use strict";
const title = document.getElementsByTagName("h1")[0];
const calculate = document.getElementsByClassName("handler_btn")[0];
const reset = document.getElementsByClassName("handler_btn")[1];
const buttonPlus = document.querySelector(".screen-btn");
const otherPercent = document.querySelectorAll(".other-items.percent");
const otherNumber = document.querySelectorAll(".other-items.number");
const inputRange = document.querySelector(".rollback  input");
const spanRange = document.querySelector(".rollback .range-value ");
const totalInput = document.getElementsByClassName("total-input");

const layoutCost = totalInput[0];
const numberScreens = totalInput[1];
const costAdditionalServices = totalInput[2];
const totalValue = totalInput[3];
const costIncludingRollback = totalInput[4];
let screens = document.querySelectorAll(".screen");

const select = document.querySelector("select");
const input = document.querySelector("input[type=text]");

const appData = {
  title: "",
  screens: [],
  screenPrice: 0,
  adaptive: "",
  rollback: 0,
  servicePricesPercent: 0,
  servicePricesNumber: 0,
  fullPrice: 0,
  servicePercentPrice: 0,
  servicesPercent: {},
  servicesNumber: {},
  init: function () {
    appData.addTitle();

    calculate.addEventListener("click", appData.start);
    buttonPlus.addEventListener("click", appData.addScreenBlock);
    inputRange.addEventListener("input", appData.setSize);
  },

  setSize: function (event) {
    spanRange.textContent = event.target.value + "%";
    appData.rollback = event.target.value;
  },

  addTitle: function () {
    document.title = title.textContent;
  },
  isError: false,

  checkValue: function () {
    screens.forEach((screen) => {
      if (select.value === "" || input.value === "") {
        alert("Не все поля заполнены");
        appData.isError = true;
      }
    });
  },

  start: function () {
    appData.addScreen();
    appData.addServices();
    appData.addPrice();
    appData.checkValue();

    // appData.getServicePercentPrices();
    // appData.logger();
    appData.showResult();
  },

  showResult: function () {
    layoutCost.value = appData.screenPrice;
    costAdditionalServices.value =
      appData.servicePricesPercent + appData.servicePricesNumber;
    totalValue.value = appData.fullPrice;
    costIncludingRollback.value = appData.servicePercentPrice;
  },

  addScreen: function () {
    screens = document.querySelectorAll(".screen");

    screens.forEach(function (screen, index) {
      const select = screen.querySelector("select");
      const input = screen.querySelector("input");
      const selectName = select.options[select.selectedIndex].textContent;

      appData.screens.push({
        id: index,
        name: selectName,
        price: +select.value * +input.value,
      });
    });
  },

  addServices: function () {
    otherPercent.forEach(function (item) {
      const chek = item.querySelector("input[type=checkbox");
      const input = item.querySelector("input[type=text");
      const label = item.querySelector("label");

      if (chek.checked) {
        appData.servicesPercent[label.textContent] = +input.value;
      }
    });

    otherNumber.forEach(function (item) {
      const chek = item.querySelector("input[type=checkbox");
      const input = item.querySelector("input[type=text");
      const label = item.querySelector("label");

      if (chek.checked) {
        appData.servicesNumber[label.textContent] = +input.value;
      }
    });
  },

  addScreenBlock: function () {
    const cloneSscreen = screens[0].cloneNode(true);
    screens[screens.length - 1].after(cloneSscreen);
  },

  checkString: function (str) {
    let name = prompt(str);

    if (!isNaN(name)) {
      name = appData.checkString(str);
    }
    return name;
  },

  getPrice: function (msg) {
    let price = prompt(msg);

    if (!appData.isNumber(price)) {
      price = appData.getPrice(msg);
    }

    return +price;
  },

  addPrice: function () {
    for (const screen of appData.screens) {
      appData.screenPrice += +screen.price;
    }

    for (let key in appData.servicesNumber) {
      appData.servicePricesNumber += appData.servicesNumber[key];
    }

    for (let key in appData.servicesPercent) {
      appData.servicePricesPercent +=
        appData.screenPrice * (appData.servicesPercent[key] / 100);
    }

    appData.fullPrice =
      +appData.screenPrice +
      appData.servicePricesPercent +
      appData.servicePricesNumber;

    appData.servicePercentPrice = Math.ceil(
      appData.fullPrice - appData.fullPrice * (appData.rollback / 100)
    );
  },

  // getServicePercentPrices: function () {
  //   // let res = appData.fullPrice - appData.fullPrice * (appData.rollback / 100);
  //   // appData.servicePercentPrice = Math.ceil(res);
  //   appData.servicePercentPrice = Math.ceil(
  //     appData.fullPrice - appData.fullPrice * (appData.rollback / 100)
  //   );
  // },

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
    for (let prop in appData) {
      if (typeof appData[prop] !== "function") {
        console.log("Ключ: " + prop + " " + "Значение: " + appData[prop]);
      }
    }
  },
};

appData.init();
