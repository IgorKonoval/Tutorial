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

// --------------
// const numbers = [21, 54, 65, 85, 2, 56, 84, 79, 5];
// let maxNumber = numbers[0];
// for (number of numbers) {
//   if (number > maxNumber) {
//     maxNumber = number;
//   }
// }
// console.log(maxNumber);

// --------------
// const fruit = ['Mango', 'Kiwi', 'Strawbery', 'Poly', 'Ajax'];
// const text = fruit.join(', ');
// console.log(text);

// --------------
// const title = 'Top 10 benefits of react framework';
// const editingTitle = title.toLowerCase().split(' ').join('-');
// console.log(editingTitle);

// --------------
const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];

let sum = 0;
const arrayTotal = array1.concat(array2);
for (array of arrayTotal) {
  sum += array;
}
// for (array of array2) {
//   sum += array;
// }
console.log('Total: ', sum);
