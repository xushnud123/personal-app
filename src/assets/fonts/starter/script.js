'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const hours = {
  [`thu`]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderPasta(a, b, c) {
    console.log(`${a}, ${b}, ${c}`);
  },
  hours,
  orderPitsa(mainIngredient, ...otherIngredient) {
    console.log(mainIngredient, otherIngredient);
  },
};

if (restaurant.hours && restaurant.hours.mon)
  console.log(restaurant.hours.mon.open);

// //////////////////// WITH optioanal chaining
// console.log(restaurant.hours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  console.log(day);
  const open = restaurant.hours[day]?.open ?? 'closed';
  console.log(open);
}

// Methods
console.log(restaurant.order?.(0, 1));
console.log(restaurant.orderRisotto?.(0, 1) || 'Method does not exist');

// Arrays
//  const users = [{name:'Xushnud',email:'12xushnudbek34@gmail.com'}]
const users = [];

console.log(users[0]?.name ?? 'mavjud emas')

///////////// For of loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) console.log(item);
// // /////////////////////For of da index ni olish
// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// 1) Destructuring
// //////////// Spread operator kengaytiradi
// const arr = [1, 2, ...[3, 4]];

/////////////// Rest operator bitta qiladi
// const [a, b, ...others] = [1, 2, 3, 4, 5, 6, 7];
// console.log(a, b, others); // (1,2, [3,4,5,6,7])

// const [...menu] = [...restaurant.starterMenu,...restaurant.mainMenu]
// console.log(menu)

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// //  2) Function
// const add = function (...arg) {
//   let s = 0;
//   for (let i = 0; i < arg.length; i++) {
//     s += arg[i];
//   }
//   console.log(s);
// };

// add(1, 2);
// add(1, 2, 3, 4);

// restaurant.orderPitsa('moshrooms','onion','olives','spinach')

/////////////////////// Spread operator

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, 3, ...arr];
// console.log(badNewArr);

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu)

// Iterables: arrays, strings, maps, sets . NOT obejects
// const str = 'Xushnud';
// const letters = [...str, ' ', 'R'];
// console.log(letters);

// const ingredients = [prompt('mahsulot 1'), prompt('mahsulot 2'),
// prompt('mahsulot 3')];
// console.log(ingredients)
// restaurant.orderPasta(...ingredients)

//////////////////////// Objecting destructuring
// const { name, openingHours, categories } = restaurant;
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// Default values
// const {menu = [],starterMenu: starters = [] } = restaurant;

// Mutating variables
// let a = 111;
// let b = 999;

// const obj = { a: 23, b: 7, c: 14 };
// ({a, b} = obj)
// console.log(a,b)

// Nested objects
// const {
//   fri: { open, close },
// } = hours;
// console.log(open,close);

////////////////////////// Array destructuring

// const arr = [0,1,2]
// const [x,y,z] = arr
// console.log(x,y,z)

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // Switching variabels
//oddiy xolda
// const temp = main
// main = secondary
// secondary = temp
// console.log(main,secondary)

// destructuring(buzish) bilan
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// funksiyadan 2 ta qaytish qiymatini olamiz
// const [starterMenu, mainMenu] = restaurant.order(2, 0);
// console.log(starterMenu, mainMenu);

// Nested destructuring
// const nested = [1, 4, [5, 6]];
// const [i, , [j, k]] = nested;
// console.log(i,j,k)

// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1
// const [players1, players2] = game.players;
// console.log(players1, players2);

// //2
// const [gk, ...fieldPlayer] = players1;
// console.log(gk, fieldPlayer);

// //3
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// //4
// const players1Final = [...players1, 'Tiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// //5
// const {
//   odds: { team1, x: draw, team2 },
// } = game;

// //6
// const printGoals = function (...goal) {
//   console.log(`${goal.length} ta gol urildi`);
// };
// printGoals(...game.scored);

// //7
// team1 < team2 && console.log("birinchi jamoa g'alaba qozondi");
// team1 > team2 && console.log("ikkinchi jamoa g'alaba qozondi");
