// -------------- Сортировка по-алфавиту!!!!! -------------- //
// const langs = ['cpyton', 'ac++', 'bjavascript', 'haskel', 'php', 'ruby'];
// const firstEl = langs[0];

// console.log(firstEl.charCodeAt(0));
// let isRightOrder = false;

// while (!isRightOrder) {
//   isRightOrder = true;

//   for (let i = 0; i < langs.length - 1; i++) {
//     const currentElement = langs[i];
//     const nextElement = langs[i + 1];
//     const currentElementCharCode = currentElement.charCodeAt(0);
//     const nextElementCharCode = nextElement.charCodeAt(0);

//     if (currentElementCharCode > nextElementCharCode) {
//       langs[i] = nextElement;
//       langs[i + 1] = currentElement;
//       isRightOrder = false;
//     }
//   }
// }

// console.log(langs);

// -------------- End -------------- //

// -------------- Добавление, удаление, замена в массиве -------------------------

// const atTheOldToad = {
//   potions: ['Speed potion', 'Dragon breath', 'Stone skin'],

//   getPotions() {
//     return this.potions;
//   },

//   addPotion(potionName) {
//     this.potions.push(potionName);
//     return this.potions;
//   },

//   removePotion(potionName) {
//     this.potions.splice(this.potions.indexOf(potionName), 1);
//     return this.potions;
//   },

//   updatePotionName(oldName, newName) {
//     this.potions.splice(this.potions.indexOf(oldName), 1, newName);
//     return this.potions;
//   },
// };

// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion('Invisibility'));
// console.log(atTheOldToad.addPotion('Power potion'));
// console.log(atTheOldToad.removePotion('Dragon breath'));
// console.log(atTheOldToad.removePotion('Speed potion'));
// console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'));
// console.log(atTheOldToad.updatePotionName('Stone skin', 'Invisibility'));

// -------------- End -------------- //

// -------------- Добавление, удаление, замена в массиве объектов -------------------------

// const atTheOldToad = {
//   potions: [
//     { name: 'Speed potion', price: 460 },
//     { name: 'Dragon breath', price: 780 },
//     { name: 'Stone skin', price: 520 },
//   ],

//   getPotions() {
//     return this.potions;
//   },

//   addPotion(newPotion) {
//     for (const { name } of this.potions) {
//       if (name === newPotion.name) {
//         return `Error! Potion ${name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },

//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i++) {
//       const name = this.potions[i].name;
//       if (potionName === name) {
//         this.potions.splice(i, 1);
//         return this.potions;
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },

//   updatePotionName(oldName, newName) {
//     for (let i = 0; i < this.potions.length; i++) {
//       if (this.potions[i].name === oldName) {
//         this.potions[i].name = newName;
//         return this.potions;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
// };

// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: 'Invisibility', price: 620 }));
// console.log(atTheOldToad.addPotion({ name: 'Power potion', price: 270 }));
// console.log(atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 }));
// console.log(atTheOldToad.addPotion({ name: 'Stone skin', price: 240 }));
// console.log(atTheOldToad.removePotion('Dragon breath'));
// console.log(atTheOldToad.removePotion('Speed potion'));
// console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'));
// console.log(
//   atTheOldToad.updatePotionName('Stone skin', 'Invulnerability potion'),
// );

// -------------- End -------------- //

// -------------------------------------------------------------------
