'use strict';
// TASK 1.
// -=Сделать первый символ заглавным=-
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:
// ucFirst("вася") == "Вася";
// let result = '';
// const ucFirst = function (str) {
//   result += str[0].toUpperCase() + str.slice(1);
//   return result;
// };

// console.log(ucFirst('hello!'));

// ==================================================================================================================================
// TASK 2.
// -= Операции с массивами =-
// Давайте произведём 5 операций с массивом.
// 1. Создайте массив styles с элементами «Джаз» и «Блюз».
// 2. Добавьте «Рок-н-ролл» в конец.
// 3. Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// 4. Удалите первый элемент массива и покажите его.
// 5. Вставьте «Рэп» и «Регги» в начало массива.

// const styles = ['Джаз', 'Блюз'];
// styles.push('Рок-н-ролл');
// console.log(styles);

// const length = styles.length;
// const index = Math.floor(length / 2);

// styles.splice(index, 1, 'Классика');
// console.log(styles);

// console.log(styles.shift(styles[0]));

// styles.unshift('Рэп', 'Регги');

// console.log(styles);

// ==================================================================================================================================
// Task 3.
// -=Сумма введённых чисел=-
// Напишите функцию sumInput(), которая:
// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

// const sumInput = function () {
//   const array = [];
//   let input = '';
//   let sum = 0;

//   do {
//     input = prompt('Введите число');
//     console.log(Number.isNaN(Number(input)));
//     if (Number.isNaN(Number(input)) || !input) {
//       break;
//     }
//     array.push(input);
//   } while (input !== null);
//   console.log(array);

//   for (const item of array) {
//     sum += Number(item);
//   }
//   console.log(sum);
// };

// sumInput();

// ==================================================================================================================================
// Task 4.
// -=Переведите текст вида border-left-width в borderLeftWidth=-
// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.
// Примеры:
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно

// const camelize = function (str) {
//   const array = str.split('-');
//   let result = '';
//   const length = array.length;

//   for (let i = 0; i < length; i += 1) {
//     if (i === 0) {
//       result += array[i];

//       continue;
//     }
//     result += array[i][0].toUpperCase() + array[i].slice(1);
//   }

//   console.log(result);
// };

// camelize('background-color');
// camelize('list-style-image');
// camelize('-webkit-transition');

// ==================================================================================================================================
// Task 5.
// -=Фильтрация по диапазону=-
// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.
// Функция должна возвращать новый массив и не изменять исходный.
// Например:
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// console.log( filtered ); // 3,1 (совпадающие значения)
// console.log( arr ); // 5,3,8,1 (без изменений)

// let arr = [5, 3, 8, 1];

// const filterRange = (arr, a, b) => {
//   const newArr = [];
//   for (const item of arr) {
//     if (item >= a && item <= b) {
//       newArr.push(item);
//     }
//   }
//   return newArr;
// };

// console.log(filterRange(arr, 2, 4));
// console.log(arr);

// ==================================================================================================================================
// Task 6.
// -=Фильтрация по диапазону "на месте"=-
// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
// Функция должна изменять принимаемый массив и ничего не возвращать.
// Например:
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
// console.log( arr ); // [3, 1]

// let arr = [5, 3, 8, 1];

// const filterRangeInPlace = (arr, a, b) => {
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] >= a && arr[i] <= b) {
//       continue;
//     }
//     arr.splice(i, 1);

//     i -= 1;
//   }
//   return arr;
// };
// console.log(filterRangeInPlace(arr, 1, 4));

// ==================================================================================================================================
// Task 7.
// -=Отсортировать пользователей по возрасту=-
// Напишите функцию sortByAge(users), которая принимает массив массивов и сортирует их по возрасту.
// Например:
// const vasya = ['Вася', 25];
// const petya = ['Петя', 30];
// const masha = ['Маша', 28];
// const users = [vasya, petya, masha];

// const sortByAge = function (users) {
//   const usersLength = users.length;

//   for (let i = 0; i < usersLength - 1; i += 1) {
//     if (users[i][1] > users[i + 1][1]) {
//       let temp = users[i];
//       users[i] = users[i + 1];
//       users[i + 1] = temp;
//     }
//   }
//   return console.log(users);
// };
// sortByAge(users);

// ====Вариант 2====

// const result = users.sort(function (a, b) {
//   return a[1] - b[1];
// });

// console.log(result);

// ==================================================================================================================================
// Task 8.
// -=Получить средний возраст=-
// Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
// Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.
// Например:
// let vasya = [ "Вася", 25 ];
// let petya = ["Петя", 30 ];
// let masha = ["Маша", 29 ];
// let arr = [ vasya, petya, masha ];
// console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

// const vasya = { age: 25 };
// const petya = { age: 30 };
// const masha = { age: 29 };
// const arr = [vasya, petya, masha];

// const getAverageAge = function (users) {
//   const arrAges = [];
//   let total = 0;

//   for (const user of users) {
//     arrAges.push(user.age);
//   }

//   for (const item of arrAges) {
//     total += item;
//   }
//   return total / arrAges.length;
// };

// console.log(getAverageAge(arr));
// ==================================================================================================================================
// Task 9.
// -=Трансформировать в массив имён=-
// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.
// Например:
// let vasya = [ "Вася", 25 ];
// let petya = ["Петя", 30 ];
// let masha = ["Маша", 28 ];
// let users = [ vasya, petya, masha ];

// const vasya = { name: 'Вася', age: 25 };
// const petya = { name: 'Петя', age: 30 };
// const masha = { name: 'Маша', age: 28 };
// const users = [vasya, petya, masha];

// const usersName = [];

// for (const user of users) {
//   usersName.push(user.name);
// }

// console.log('usersName :>> ', usersName);

// ==================================================================================================================================
// Task 10.
// Нужно написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных, которые содержатся в строке.
// Гласными являются «a», «e», «i», «o», «u».

// const findVowels = string => {
//   let result = 0;
//   const stringToLowercase = string.toLowerCase();
//   for (const letter of stringToLowercase) {
//     if (
//       letter === 'a' ||
//       letter === 'e' ||
//       letter === 'i' ||
//       letter === 'o' ||
//       letter === 'u'
//     ) {
//       result += 1;
//     }
//   }
//   return result;
// };

// console.log('findVowels :>> ', findVowels('Hello world!'));
// ==================================================================================================================================
// Task 11.
// -=Анаграмма=-
// Так называют слово, которое содержит все буквы другого слова в том же количестве, но ином порядке.
// Постановка
// Нужно написать функцию, которая проверяет, являются ли две строки анаграммами, причем регистр букв не имеет значения. Учитываются лишь символы; пробелы или знаки препинания в расчет не берутся.
// anagram('finder', 'Friend');

const findAnagram = (str1, str2) => {
  const str1ToLower = str1.toLowerCase();
  const str2ToLower = str2.toLowerCase();
  const str1ToLowerArr = [...str1ToLower];
  const str2ToLowerArr = [...str2ToLower];

  for (let i = 0; i < str1ToLowerArr.length; i += 1) {
    if (str2ToLowerArr.includes(str1ToLowerArr[i])) {
      str2ToLowerArr.splice(str2ToLowerArr.indexOf(str1ToLowerArr[i]), 1);
      str1ToLowerArr.splice(i, 1);
      console.log('object1 :>> ', str1ToLowerArr);
      console.log('object2 :>> ', str2ToLowerArr);
      i -= 1;
      continue;
    }
    console.log('----object1 :>> ', str1ToLowerArr);
    console.log('-----object2 :>> ', str2ToLowerArr);
    return false;
  }
  console.log('----object1 :>> ', str1ToLowerArr);
  console.log('-----object2 :>> ', str2ToLowerArr);
  return str1ToLowerArr.length === str2ToLowerArr.length ? true : false;
};

console.log('findAnagram :>> ', findAnagram('finder', 'Frien d'));
// ==================================================================================================================================
// Task 12.
// -=Палиндром=-
// Палиндром — слово, предложение или последовательность символов, которая абсолютно одинаково читается как в привычном направлении, так и в обратном. К примеру, “Anna” — это палиндром, а “table” и “John” — нет.
// Постановка
// Дана строка; нужно написать функцию, которая позволяет вернуть значение true, если строка является палиндромом, и false — если нет. При этом нужно учитывать пробелы и знаки препинания.
// palindrome("racecar") === true
// palindrome("table") === false
