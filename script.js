let title = " calculator ";
let screens = "Простые, Сложные, Интерактивные";
let arrayScreens = screens.toLowerCase().split(", ");
let screenPrice = 300;
let rollback = 27;
let fullPrice = 1500;
let rollbackPercentage = fullPrice * (rollback / 100);
let adaptive = true;


console.log("[title]", typeof title);
console.log("[screens]", screens.length);
console.log("[arrayScreens]", arrayScreens);
console.log("[screenPrice]", screenPrice + " долларов");
console.log("[fullPrice]", typeof fullPrice);
console.log("[fullPrice]", fullPrice + " долларов");
console.log("[rollbackPercentage]", rollbackPercentage);
console.log("[adaptive]", typeof adaptive);
