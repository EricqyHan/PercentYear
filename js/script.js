let now = new Date();
let start = new Date(now.getFullYear(), 0);
const thisYear = start.getFullYear()
console.log(start)
console.log(thisYear)
console.log(start.getFullYear());
document.querySelector(".year").innerText = thisYear;
console.log(start);

let diff = now - start;
let oneDay = 1000 * 60 * 60 * 24;
let day = Math.floor(diff / oneDay)+1;
console.log("Day of year: " + day);

document.querySelector(".day").innerText = day;

let percentage = ((100 / 365) * day).toFixed(2);
console.log(percentage);
document.querySelector(".completion").innerText = percentage;

let daysLeft = 365 - day;
document.querySelector(".daysLeft").innerText = daysLeft;
console.log(daysLeft)

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

const quotes = [
  `I hope you're proud of yourself for the times you've said "yes," when all it meant was extra work for you and was seemingly helpful only to someone else.`,
  `It's good to be curious about many things.`,
  `Imagining something may be the first step in making it happen, but it takes the real time and real efforts of real people to learn things, make things, turn thoughts into deeds or visions into inventions.`,
  `Often out of periods of losing come the greatest strivings toward a new winning streak.`,
  `There are three ways to ultimate success: The first way is to be kind.The second way is to be kind.The third way is to be kind`,
  `Who you are inside is what helps you make and do everything in life.`,
  `When we can talk about our feelings, they become less overwhelming, less upsetting and less scary.`,
  `You are special. You’re special to me. There’s only one in this wonderful world.`,
];

function quoteRandom() {
  let random = Math.floor(Math.random() * quotes.length);
  console.log(random);
  let result = quotes[random];
  console.log(result);
  return result;
}

console.log(quoteRandom());

const misterRogerQuote = quoteRandom();

document.getElementById("randomQuote").innerHTML = misterRogerQuote;
