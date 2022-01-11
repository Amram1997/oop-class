## Oop class

## Source map

- Source
  - 1.acount.js
  - 2.autorBook.js
  - 3.coffeShop.js
  - 4.shiritori.js

---

1. Create an Author class and a Book class.

```js
let author1 = new Author("J. K. Rowling", "abc@gmail.com", "fEmaLe");
console.log(author1.gender); // female
console.log(author1.name); // J. K. Rowling
console.log(author1.toString()); // Ms. J. K. Rowling
author.name = 12; // throws error
```

[Decision](./autorBook.js)

---

2. Create an Account class. Account should have:

```js
let savingAcc = new Account("Saving account", 2000);
let cardAcc = new Account("Card account", 1000);
console.log(savingAcc); // Account { id: 0, _name: 'Saving account',
_balance: 2000 }
console.log(cardAcc); // Account { id: 1, _name: 'Card account', _balance:
1000 }
console.log(savingAcc.balance); // 2000
console.log(savingAcc.credit(400)); // 2400
console.log(savingAcc.balance); // 2400
console.log(savingAcc.debit(9000)); //6600
console.log(savingAcc.transferTo(cardAcc, 1000)); // 1400
console.log(savingAcc.balance); // 1400
console.log(cardAcc.balance); // 2000
let anotherAcc = savingAcc;
console.log(Account.identifyAccounts(savingAcc, anotherAcc)); // true
console.log(Account.identifyAccounts(savingAcc, cardAcc)); // false
console.log(savingAcc.toString()); // Saving account's account balance is
$1400.
```

[Decision](./acount.js)

---

3.CoffeeShop

```js
tcs.addOrder("hot cocoa"); // "This item is currently unavailable!"
// Tesha's coffee shop does not sell hot cocoa
tcs.addOrder("iced tea"); // "This item is currently unavailable!"
// specifying the variant of "iced tea" will help the process
tcs.addOrder("cinnamon roll"); // "Order added!"
tcs.addOrder("iced coffee"); // "Order added!"
tcs.listOrders; // ["cinnamon roll", "iced coffee"]
// the list of all the items in the current order
tcs.dueAmount(); // 2.17
tcs.fulfillOrder(); // "The cinnamon roll is ready!"
tcs.fulfillOrder(); // "The iced coffee is ready!"
tcs.fulfillOrder(); // "All orders have been fulfilled!"
// all orders have been presumably served
tcs.listOrders(); // []
// an empty array is returned if all orders have been exhausted
tcs.dueAmount();
```

[Decision](./coffeShop.js)

---
