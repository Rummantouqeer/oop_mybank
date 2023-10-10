class customer {
    firstName;
    lastName;
    age;
    gender;
    mobileNumber;
    accountNumber;
    constructor(firstName, lastName, age, gender, mobileNumber, accountNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.mobileNumber = mobileNumber;
        this.accountNumber = accountNumber;
    }
    getinfo() {
        console.log(`first Name = ${this.firstName}, Last Name = ${this.lastName}, age = ${this.age}, gender = ${this.gender},Mobile Number = ${this.mobileNumber}, Account Number = ${this.accountNumber}`);
    }
}
class Bank {
    customer = [];
    account = [];
}
let myBank = new Bank();
let cus = new customer("Rumman", "Touqeer", 19, "female", 123456, 909);
console.log(cus);
let cus2 = new customer("Hassan", "Naseer", 18, "male", 78910, 911);
console.log(cus2);
let cus3 = new customer("Neha", "Irfan", 17, "female", 11121314, 914);
console.log(cus3);
export {};
