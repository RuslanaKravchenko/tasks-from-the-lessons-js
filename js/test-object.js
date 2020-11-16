'use strict';
// Объекты
// ==============================================================================
const products = [
  {
    id: '1',
    name: 'milk',
    value: 'Молоко',
    price: 20,
    sale: true,
    quantity: 10,
  },
  {
    id: '2',
    name: 'water',
    value: 'Вода',
    price: 10,
    sale: false,
    quantity: 50,
  },
  {
    id: '3',
    name: 'juice',
    value: 'Сок',
    price: 34,
    // sale: true,
    // quantity: 24,
  },
  {
    id: '4',
    name: 'fruitDrink',
    value: 'Морс',
    price: 32,
    sale: true,
    quantity: 25,
  },
  {
    id: '5',
    name: 'milkShake',
    value: 'Молочный коктейль',
    price: 37,
    // sale: false,
    // quantity: 37,
  },
];
// 1. Создайте функцию getSaleProducts(), которая вернет новый массив со свойством sale равным true.
// const getSaleProducts = (array, prop) => {
//   const newArr = [];

//   for (const item of array) {
//     if (item[prop]) {
//       newArr.push(item);
//     }
//   }
//   return newArr;
// };

// console.log('getSaleProducts :>> ', getSaleProducts(products, 'sale'));

// вариант 2

// const getSaleProducts = (array, prop) => {
//   const newArr = [];

//   for (const item of array) {
//     if (item[prop] > 30) {
//       newArr.push(item);
//     }
//   }
//   return newArr;
// };

// console.log('getSaleProducts :>> ', getSaleProducts(products, 'price'));
// ======================================================================
// 2. Создайте функцию getProductsName(), которая вернет новый массив со всеми названиями продуктов на русском языке.

// const getProductsName = (array, prop) => {
//   const newArr = [];

//   for (const item of array) {
//     newArr.push(item[prop]);
//   }

//   return newArr;
// };

// console.log(' getProductsName :>> ', getProductsName(products, 'value'));

// =======================================================================
// 3. Создайте функцию getTotalQuantity(), которая вернет общую сумму всех товаров на складе(свойство quantity).

// const getTotalQuantity = (array, prop) => {
//   let result = 0;
//   for (const item of array) {
//     result += item[prop];
//   }
//   return result;
// };
// console.log('getTotalQuantity :>> ', getTotalQuantity(products, 'quantity'));

// ==========================================================================
// 4. Создайте функцию getProductById(), которая будет возвращать продукт по id.

// const getProductById = (array, id) => {
//   for (const item of array) {
//     if (item.id === id) {
//       return item;
//     }
//   }
// };
// console.log('getProductById :>> ', getProductById(products, '4'));

// =========================================================================
// 5. Создайте функцию deleteProductById(), которая будет удялять из исходного массива products товар по id.

// const deleteProductById = (array, prop, val) => {
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i][prop] === val) {
//       array.splice(i, 1);
//     }
//   }
//   return products;
// };
// console.log('deleteProductById :>> ', deleteProductById(products, 'id', '2'));

// ==========================================================================
// 6. Создайте функцию createProduct(), которая будет добавлять новый продукт в исходный массив products. Товар передается в функцию в виде объекта
// const newObject = {
//   id: '6',
//   name: 'apple',
//   value: 'Яблоко',
//   price: 10,
//   sale: true,
//   quantity: 10,
// };

// const createProduct = (array, newObject) => {
//   array.push(newObject);
//   return array;
// };

// console.log('createProduct :>> ', createProduct(products, newObject));

// вариант 2

// const newObject = {
//   name: 'apple',
//   value: 'Яблоко',
//   price: 10,
//   sale: true,
//   quantity: 10,
// };

// const createProduct = (array, newObject) => {
//   const newArr = [...array, { id: `${array.length + 1}`, ...newObject }];
//   return newArr;
// };

// console.log('createProduct :>> ', createProduct(products, newObject));

// ===========================================================================
// 7. Создайте функцию findProductByName(), которая будет возвращать объект из массива products в зависимости от передаваемого значения name или value.

// const findProductByName = (array, option) => {
//   for (const item of array) {
//     if (item.name === option || item.value === option) {
//       return item;
//     }
//   }
// };

// console.log('findProductByName :>> ', findProductByName(products, 'milkShake'));

// вариант2 с деструктуризацией

// const findProductByName = (array, option) => {
//   for (const item of array) {
//     const { name, value } = item;
//     if (name === option || value === option) {
//       return item;
//     }
//   }
// };

// console.log('findProductByName :>> ', findProductByName(products, 'Морс'));

// =========================================================================
// 8. Создайте функцию editProduct(), которая будет изменять объект products. В качестве аргументов, в функцию будут передаваться id, а также ключ и его значение, которое нужно перезаписать.

// const editProduct = (array, id, key, value) => {
//   for (let i = 0; i < array.length; i += 1) {
//     if (array[i].id === id) {
//       array[i][key] = value;
//     }
//   }
//   return products;
// };

// console.log('editProduct :>> ', editProduct(products, '4', 'name', 'banana'));

// =========================================================================
// 9. Создайте функцию modifyProductList(), которая будет возвращать новый массив с продуктами у которых будут только свойства id, name, value и price

// const modifyProductList = array => {
//   const newArr = [];

//   for (const item of array) {
//     const { id, name, value, price } = item;

//     newArr.push({ id, name, value, price });
//   }

//   return newArr;
// };

// console.log('modifyProductList :>> ', modifyProductList(products));

// ======================================================================
// 10. Создайте функцию addToCart(), которая будет записывать товар по id в новый массив cart.

// const addToCart = (array, id) => {
//   const cart = [];
//   for (const item of array) {
//     if (item.id === id) {
//       cart.push(item);
//     }
//   }
//   return cart;
// };

// console.log('addToCart :>> ', addToCart(products, '3'));
