import { table } from "../utils/customTable.js";

const process = (quantity, balance) => {
    const newDate = new Date();
    return ({
        Date: `${newDate.getDate()}.${newDate.getMonth()+1}.${newDate.getFullYear()}`,
        Amount: quantity,
        Balance: balance
    })
}

export class Account {
    constructor() {
        this.balance = 0;
        this.processList = []
    }

    deposit(quantity) {
        this.balance += quantity;
        this.processList.push(process(`+${quantity}`, this.balance))
    }

    withdraw(quantity) {
        this.balance -= quantity;
        this.processList.push(process(`-${quantity}`, this.balance))
    }

    printStatement() {
        table(this.processList)
    }

}