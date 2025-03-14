function calcShipping(sum, min, shipping) {
    let productsSum = sum; // сумма в корзине
    let freeShippingMinSum = min; // минимальная цена для бесплатной доставки
    let shippingPrice = shipping; // стоимость доставки

    // Задание №2.1. Рассчитать доставку

    let shippingSum; // создайте переменную shippingSum

    if (productsSum === 0){ // если productsSum равно 0,
        shippingSum = 0;}// то shippingSum присвоить значение 0

    else if (productsSum >= freeShippingMinSum){// если productsSum Больше или равна freeShippingMinSum,
            shippingSum = 0;}// то shippingSum присвоить значение 0

    else { // если productsSum больше 0 и меньше freeShippingMinSum,
        shippingSum = shippingPrice};// то shippingSum присвоить значение shippingPrice

    // Конец решения задания №2.1.

    return shippingSum;
}

function calcDiscount(sum, min, discount) {
    let productsSum = sum; // сумма в корзине
    let discountMinSum = min; // минимальная цена для скидки
    let discountPart = discount; // величина скидки в процентах

    // Задание №2.2. Рассчитать скидку

    let discountPrice// создайте переменную discountPrice

    if (productsSum >= discountMinSum){// если productsSum больше или равно discountMinSum,
        discountPrice = productsSum/100 * discountPart;}// то присвойте discountSum значение discountPart процентов от productsSum,
    else {discountPrice = 0};// иначе присвойте discountSum значение 0

    // Конец решения задания №2.2.

    return discountPrice;
}

function calcInvoice({sum, discountMinSum, discountPart, shippingFreeMinSum, shippingPrice}) {
    let productsSum = sum;
    let discountSum = calcDiscount(sum, discountMinSum, discountPart);

    // Задача №2.3. Рассчитать скидки и доставку в корзине

    let totalSum;// создайте переменную totalSum

    totalSum = productsSum;// присвойте totalSum значение productsSum
    totalSum -= discountSum;// уменьшите totalSum на discountSum

    let shippingSum = calcShipping(totalSum, shippingFreeMinSum, shippingPrice); // не изменяйте эту строку!!!

    totalSum += shippingSum;// прибавьте к totalSum значение shippingSum

    let freeShipping; // создайте переменную freeShipping
    // запишите без использования if или любых других условий:
    freeShipping = shippingSum ? false: true; // если shippingSum равно нулю, то freeShipping должна быть равна true, иначе freeShipping должна быть равна false

    // Конец решения задачи №2.3.

    return {discount: discountSum, freeShipping, shipping: shippingSum, total: totalSum};
}
