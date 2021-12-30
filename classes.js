// OOP - Object Oriented Programming

// class
// JS - paid good money
// JAVA - they also learned JS
// JAVA - tc39 - class performance

// class (JS)


class Car{
    constructor(name, wheels, doors, engine){
        this.name = name;
        this.wheels = wheels;
        this.doors = doors;
        this.engine = engine;
    }
}
const ferrari = new Car ("Ferrari", 4,2, "v8");
const venue = new Car ("venue", 4,4, "v3");
const toyota = new Car ("toyota", 4,5, "v8");

console.log(ferrari, typeof ferrari);
console.log(venue, typeof venue);
console.log(toyota, typeof toyota);

class Account{
    constructor(name, accno, balance){
        this.name = name;
        this.accno= accno;
        this.balance=balance;
    }
    // class methods or member functions
    getBalance(){
        return `The balance is: ₹${this.balance}`;
    }
    // Withdraw(n){
    //     return (this.balance-n);
    // }
withdraw(amount){
    if (this.balance>= amount) {
        this.balance = this.balance - amount;
        // console.log("Reduced balance", this.name, this.balance);
        return this.getBalance();
    } else {
        return `Insufficient balance. ${this.getBalance()}`;
    }
}
deposit(n){
        this.balance = this.balance + n;
        //  console.log("Deposited balance:", this.name, this.balance);
        return this.getBalance();
}
}

const prasanth = new Account("Prasanth",150,5_55_000);
const banu = new Account("BanuPrasanth",151,7_77_000);

console.log(prasanth);
console.log(banu);

// console.log(banu.balance);
// encapsulation
console.log(banu.getBalance());
console.log(prasanth.getBalance());

// console.log(banu.Withdraw(500));
// console.log(banu.getBalance());

console.log(banu.withdraw(1_00_000));
console.log(banu.getBalance());

console.log(prasanth.withdraw(6_00_000));
console.log(prasanth.getBalance());

console.log(prasanth.withdraw(1_00_000));
console.log(prasanth.withdraw(1_00_000));
console.log(prasanth.getBalance());

// Task (29.12.2021)- deposit
console.log(banu.deposit(10_000));
console.log(banu.getBalance());
