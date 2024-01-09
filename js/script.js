let now = new Date();
let start = new Date(now.getFullYear(), 0, 0);
console.log("year");
console.log(start);
let diff = now - start;
let oneDay = 1000 * 60 * 60 * 24;
let day = Math.floor(diff / oneDay);
console.log("Day of year: " + day);

document.querySelector(".day").innerText = day;

let percentage = ((100 / 366) * day).toFixed(2);
console.log(percentage);
document.querySelector(".completion").innerText = percentage;

let daysLeft = 366 - day;
document.querySelector(".daysLeft").innerText = daysLeft;

// let year = new Date().getFullYear();

// const checkLeapYear = (year) => {
//   if ((0 == year % 4 && 0 != year % 100) || 0 == year % 400) {
//     console.log(`${year} + " is a leap year`);
//     let percentage = ((100 / 366) * day).toFixed(2);
//     document.querySelector(".completion").innerText = percentage;
//   } else {
//     let percentage = ((100 / 365) * day).toFixed(2);
//     document.querySelector(".completion").innerText = percentage;

//     console.log(`${year} is not a leap year`);
//   }
// };
