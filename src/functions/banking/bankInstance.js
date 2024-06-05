
import { Account } from "./account.js";

/*
const test = [
    { name: "Jane", id: '1234', pastime: 'Archery' },
    { name: "John", id: '1235', pastime: 'Knitting' },
    { name: "Jess", id: '1236', pastime: 'Fishing' }
];
  
table(test)
*/
const newAccount = new Account();

newAccount.deposit(10);
newAccount.deposit(500);
newAccount.deposit(10000);
newAccount.withdraw(6000);
newAccount.printStatement();