//https://kata-log.rocks/banking-kata

import { Account } from "./account.js";

const newAccount = new Account();

newAccount.deposit(10);
newAccount.deposit(500);
newAccount.deposit(10000);
newAccount.withdraw(6000);
newAccount.printStatement();