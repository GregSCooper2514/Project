let balance = 500;
const books = [{id: 1, name: 'Совершенный код. Мастер-класс', price: 100, amount: 3},
{id: 2, name: 'Rapid Development, Steve McConnell', price: 180, amount: 2},
{id: 3, name: 'Искусство программирования, Д.Кнут', price: 210, amount: 1},];
let bought_books = 0;
let money_spent = 0;
function balanceset() {
    let element = document.getElementById("bal");
    element.innerText = "Баланс " + balance.toString();
};
function render(id, name, price) {
    let element = document.getElementById("selection");
    element.insertAdjacentHTML("beforeend", "<div class='book-listing'><div class='book-stats'><p class='book-title'>" + name + "</p><p class='book-price'>Цена: " + price + "₽</p></div><button class='buy-button' id='" + id + "' onclick='buy(" + id + ")'>Купить</button></div>");
};
function buy(id) {
    let book = Object.values(books).find((obj) => {
        return obj.id == id
    });
    let price = book.price;
    if (price <= balance) {
        enough_money(price, book);
    } else {
        not_enough_money();
    }
};
function enough_money(price, book) {
    bought_books = bought_books + 1;
    let book_counter = document.getElementById("book-counter");
    let booksintext = bought_books.toString();
    book_counter.innerText = "Вы купили " + booksintext + " книги";
    let how_much = document.getElementById("how-much");
    money_spent += price;
    how_much.innerText ="На сумму " + money_spent.toString() + "₽";
    balance -= price;
    balanceset();
    decrece_ammount(book);

}
function not_enough_money() {
    let no_money_text = document.getElementById("no-money");
    no_money_text.innerText = "Недостаточно средств для покупки!";
    setTimeout(function() {
        no_money_text.remove();
    }, 2000);
};
books.forEach(function(book) {
    render(book.id, book.name, book.price);
    balanceset();
});
function decrece_ammount(book) {
    let button = document.getElementById(book.id)
    if (book.amount === 1) {
        button.disabled = true
        books[book.id - 1].amount = 0
    } else {
        books[book.id - 1].amount -= 1
    }
}