// 1. Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4), вернет сумму переданных в параметры чисел.

// const func = function (a) {
//   return function (b) {
//     return function (c) {
//       return console.log('sum :>> ', a + b + c);
//     };
//   };
// };

// func(2)(3)(4);

// ======================================================================
// 2. Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4)(5)(), вернет массив переданных в параметры чисел.

// const func = function (a) {
//   // const arr = [];
//   // arr.push(a);
//   return function (b) {
//     // arr.push(b);
//     return function (c) {
//       // arr.push(c);
//       return function (d) {
//         // arr.push(d);
//         return function () {
//           return console.log('arr :>> ', [a, b, c, d]);
//         };
//       };
//     };
//   };
// };

// func(2)(3)(4)(5)();

// 2 вариант

// const pusher = function (...par) {
//   return console.log('par :>> ', par);
// };

// const func = function (a) {
//   return function (b) {
//     return function (c) {
//       return function (d) {
//         return function () {
//           return pusher(a, b, c, d);
//         };
//       };
//     };
//   };
// };

// func(2)(3)(4)(5)();

// =================================================================
// 3. Реализуйте счетчик вызова функции, работающий на замыканиях.

// const func = function (a) {
//   let count = 1;
//   return function (b) {
//     count += 1;
//     return function (c) {
//       count += 1;
//       return function (d) {
//         count += 1;
//         return function () {
//           count += 1;
//           return console.log('count :>> ', count);
//         };
//       };
//     };
//   };
// };

// func(2)(3)(4)(5)();

// вариант 2

// const addOne = function (num = 0) {
//   // let num = 0;
//   return function (step = 1) {
//     return (num += step);
//   };
// };

// const counter = addOne();
// console.log(counter(-1));
// console.log(counter(-1));
// console.log(counter(-1));

// const oneMoreCounter = addOne(50);
// console.log('object :>> ', oneMoreCounter());
// console.log('object :>> ', oneMoreCounter());
// console.log('object :>> ', oneMoreCounter());

// =====================================================================
// 4. Пусть функция в замыкании хранит число 10. Сделайте так, чтобы каждый вызов функции уменьшал это число на 1 и выводил на экран уменьшенное число.

// const func = function (a) {
//   let count = 10;
//   count -= 1;
//   console.log('count :>> ', count);
//   return function (b) {
//     count -= 1;
//     console.log('count :>> ', count);
//     return function (c) {
//       count -= 1;
//       console.log('count :>> ', count);
//       return function (d) {
//         count -= 1;
//         console.log('count :>> ', count);
//         return function () {
//           count -= 1;

//           return console.log('count :>> ', count);
//         };
//       };
//     };
//   };
// };

// func(2)(3)(4)(5)();

// ===================================================================

// 5. Модифицируйте предыдущую задачу так, чтобы отсчет доходил до 0, а затем каждый последующий вызов функции выводил на экран сообщение о том, что отсчет окончен.

// const createCounter = function (num = 3) {
//   return function (step = -1) {
//     return num ? (num += step) : 'отсчет окончен';
//   };
// };

// const counter = createCounter();
// console.log('counter() :>> ', counter());
// console.log('counter() :>> ', counter());
// console.log('counter() :>> ', counter());
// console.log('counter() :>> ', counter());
// console.log('counter() :>> ', counter());

// ===================================================================
// 6. Сделайте объект с тремя функциями, каждая из которых будет принимать параметром массив с числами.
// Сделайте так, чтобы первая функция возвращала сумму элементов массива,
// вторая функция - сумму квадратов, а третья - сумму кубов.

// const obj = {
//   sum(array) {
//     let result = 0;
//     for (const item of array) {
//       result += item;
//     }
//     return console.log('result :>> ', result);
//   },
//   square(array) {
//     let result = 0;
//     for (const item of array) {
//       result += Math.pow(item, 2);
//     }
//     return console.log('result :>> ', result);
//   },
//   triple(array) {
//     let result = 0;
//     for (const item of array) {
//       result += Math.pow(item, 3);
//     }
//     return console.log('result :>> ', result);
//   },
// };

// const numbers = [1, 2, 3];

// obj.sum(numbers);
// obj.square(numbers);
// obj.triple(numbers);

// вариант 2

// const obj = {
//   pow(array, exp) {
//     let sum = 0;
//     for (const item of array) {
//       sum += Math.pow(item, exp);
//     }
//     return console.log('result :>> ', sum);
//   },
//   sum(array) {
//     this.pow(array, 1);
//   },
//   square(array) {
//     this.pow(array, 2);
//   },
//   triple(array) {
//     this.pow(array, 3);
//   },
// };

// const numbers = [1, 2, 3];

// obj.sum(numbers);
// obj.square(numbers);
// obj.triple(numbers);

// ====================================================================
// *** 7. Создайте функцию высшего порядка cartCounter(),
// в которой будет реализован функционал увеличения или уменьшения
// количества выбраного товара в корзине в зависимости от
// передаваемого id товара.Используйте механизм замыкания для решения задачи.
const cart = {
  products: [
    {
      id: 1,
      name: 'Milk',
      price: 20,
      quantity: 1,
    },
    {
      id: 2,
      name: 'Juice',
      price: 30,
      quantity: 2,
    },
    {
      id: 3,
      name: 'Fresh juice',
      price: 40,
      quantity: 3,
    },
  ],
};

const cartCounter = function (quantity) {
  return function (step = 1) {
    return (quantity += step);
  };
};

const findProductById = function (array, id) {
  for (const product of array) {
    if (product.id === id) {
      return product;
    }
  }
};

const logger = function (counter, product) {
  product.quantity = counter();
  console.group(`${product.name}:`);
  console.log('name:', product.name);
  console.log('price:', product.price);
  console.log('quantity:', product.quantity);
  console.groupEnd();
};

const getValue = function (array, id) {
  const product = findProductById(array, id);
  const counter = cartCounter(product.quantity);
  logger(counter, product);
  logger(counter, product);
  logger(counter, product);
  logger(counter, product);
};

getValue(cart.products, 1);
