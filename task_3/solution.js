function renderCartItem(item) {
    const product = item;

    // Задание №3.1. Формирование строки корзины

    // product - объект вида {id: id, title: title, count: count, price: price}
    // например, {id: 1, title: 'Пицца', count: 5, price: '500.00'}, где
    // id - идентификатор
    // title - наименование
    // price - цена
    // count - количество

    // сформируйте строку itemCountText вида:
    // количество × цена ₽ = стоимость ₽
    // например,
    // 5 × 500.00 ₽ = 2500 ₽
    let itemCountText = ''; // 1. Создайте переменную itemCountText, равную пустой строке
    itemCountText += product.count; // 2. Присвойте переменной itemCountText результат склеивания itemCountText и количества
    itemCountText += ' × '; // 3. Присвойте переменной itemCountText результат склеивания itemCountText и ` × `
    itemCountText += product.price; // 4. Присвойте переменной itemCountText результат склеивания itemCountText и цены
    itemCountText +=  ' ₽ = ';// 5. Присвойте переменной itemCountText результат склеивания itemCountText и ` ₽ = `
    let sum = product.price*product.count; // 6. Создайте переменную sum и присвойте ей значение произведения количества и цены
    itemCountText += sum // 7. Присвойте переменной itemCountText результат склеивания itemCountText и sum
    itemCountText += ' ₽'// 8. Присвойте переменной itemCountText результат склеивания itemCountText и ` ₽`

    // Конец решения задания №3.1.

    return `<div class="cart-item"><div>${product.title}</div><div>${itemCountText}</div></div>`;
}
