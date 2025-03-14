// Задание 4.1. Вывод карточек товаров

function parseProducts(json) {    // Аргументом функции является JSON
let data = JSON.parse(json); // Создайте переменную data
//Присвойте переменной data результат преобразования аргумента в объект - JSON.parse(json)
let products = data.products; //Создайте переменную products
//Присвойте products значение свойства data.products
return products; // Верните с помощью return как результат функции parseProducts переменную products
    
}

function renderProductsCards(json){ // Напишите функцию renderProductsCards(json)
    clearProducts();// Выполните функцию clearProducts - она уже написана в коде, просто вызовите ее, аргументы не требуются
    let products; //Создайте в функции renderProductsCards переменную products
    products = parseProducts(json); // Выполните функцию parseProducts, передав в неё json - аргумент функции и запишите результат в переменную products
    length = products.length; // Запишите в переменную length значение свойства products.length
    for (let i = 0; i < length; i += 1) { // Напишите цикл, в котором перебираете все products от 0 до (length - 1)
        addProduct(products[i]); // и выполняете addProduct с каждым элементом массива products (передавая элемент массива как аргумент)
     }
}





