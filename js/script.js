// document.querySelector("#calculate").addEventListener("click", run);

// function run() {

// }

let now = new Date();
let start = new Date(now.getFullYear(), 0, 0);
let diff = now - start;
let oneDay = 1000 * 60 * 60 * 24;
let day = Math.floor(diff / oneDay);
console.log("Day of year: " + day);

document.querySelector(".day").innerText = day;

let percentage = ((100 / 365) * day).toFixed(2);
console.log(percentage);
document.querySelector(".completion").innerText = percentage;
