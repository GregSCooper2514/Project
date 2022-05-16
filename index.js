var balance = 500;
const books = [{ id: 1, name: 'Совершенный код. Мастер-класс', price: 100, amount: 3 },
    { id: 2, name: 'Rapid Development, Steve McConnell', price: 180, amount: 2 },
    { id: 3, name: 'Искусство программирования, Д.Кнут', price: 210, amount: 1 },];
let bought_books = 0;
let money_spent = 0;
balanceset();
function balanceset() {
    let element = document.getElementById("bal");
    element.innerText = "Баланс " + balance.toString();
}
;
function render(id, name, price) {
    let element = document.getElementById("selection");
    element.insertAdjacentHTML("beforeend", "<div class='book-listing'><div class='book-stats'><p class='book-title'>" + name + "</p><p class='book-price'>Цена: " + price + "₽</p></div><button class='buy-button' id='buy-button" + id + "' onclick='counterupdate()'>Купить</button></div>");
}
;
function counterupdate() {
    bought_books = bought_books + 1;
    let element = document.getElementById("book-counter");
    let booksintext = bought_books.toString();
    element.innerText = "Вы купили " + booksintext + " книги";
}
;
books.forEach(function (book) {
    render(book.id, book.name, book.price);
});
