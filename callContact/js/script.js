'use strict'; 
/* 
const phoneBook = {
    phoneContact: [],

    setPhoneContact: (cnt) => {
        phoneBook.phoneContact.push(cnt);
    },
    printPhoneContact: () => {
        if (phoneBook.phoneContact.length != 0) {
            for (let i = 0; i < phoneBook.phoneContact.length; i++) {
                console.log(`Контакт ${i+1}: ${phoneBook.phoneContact[i].printConsoleLog()}`);
            }
        } else {
            console.log("Контактов нет!");
        }
    }
};
 */

/* const contact = {
    name: {},
    lastName: {},
    callNumber: {},

    setName: () => {
        this.name = prompt(`Введите имя контакта`);
        while (this.name == null || this.name == '') {
            this.name = prompt(`Введите имя контакта`);
        }
    },
    setLastName: () => {
        this.lastName = prompt(`Введите фамилию контакта`);
        while (this.lastName == null || this.lastName == '') {
            this.lastName = prompt(`Введите фамилию контакта`);
        }
    },
    setNumber: () => {
        this.callNumber = prompt(`Введите номер телефона контакта`);
        while (this.callNumber == null || this.callNumber == '') {
            this.callNumber = prompt(`Введите номер телефона контакта`);
        }
    },
    setContact: () => {
        this.setName();
        this.setLastName();
        this.setNumber();
    },
    print: () => {
        alert(`Имя: ${this.name}  Фамилия: ${this.lastName}  Номер телефона: ${this.callNumber}`);
    },
    printConsoleLog: () => {
        console.log(`Имя: ${this.name}  Фамилия: ${this.lastName}  Номер телефона: ${this.callNumber}`);
    }
}; */

/* let a = new contact();
const b = new contact();
a.setContact();
b.setContact();

phoneBook.setPhoneContact(b);
phoneBook.setPhoneContact(a);

phoneBook.printPhoneContact();

class asad {
    constructor(a, b) {
        this.a1 = a;
       this.b1 = b;
    } 
} */

class phoneBook{
    constructor(){
        this.phoneContact = [];
    }

    setPhoneContact(cnt){
       this.phoneContact.push(cnt);
    }
    printPhoneContact(){
        document.write(`<h1>Телефонная книга</h1>`);
        if (this.phoneContact.length != 0) {
            for (let i = 0; i < this.phoneContact.length; i++) {
                console.log(`Контакт ${i+1}: ${this.phoneContact[i].grtContactString()}`);
                document.write(`<b>Контакт${i+1}:</b> ${this.phoneContact[i].grtContactString()}`);
            }
        } else {
            console.log("Контактов нет!");
        }
    }
}

class contact{
    constructor(){
        this.name = "";
        this.lastName = '';
        this.callNumber = 0;
    }

    setName(){
        this.name = prompt(`Введите имя контакта`);
        while (this.name == null || this.name == '') {
            this.name = prompt(`Введите имя контакта`);
        }
    }
    setLastName(){
        this.lastName = prompt(`Введите фамилию контакта`);
        while (this.lastName == null || this.lastName == '') {
            this.lastName = prompt(`Введите фамилию контакта`);
        }
    }
    setNumber(){
        this.callNumber = prompt(`Введите номер телефона контакта`);
        while (this.callNumber == null || this.callNumber == '') {
            this.callNumber = prompt(`Введите номер телефона контакта`);
        }
    }
    setContact(){
        this.setName();
        this.setLastName();
        this.setNumber();
    }
    print(){
        alert(`Имя: ${this.name}  Фамилия: ${this.lastName}  Номер телефона: ${this.callNumber}`);
    }
    printConsoleLog(){
        console.log(`Имя: ${this.name}  Фамилия: ${this.lastName}  Номер телефона: ${this.callNumber}`);
    }

    grtContactString(){
        return `Имя: ${this.name}; Фамилия: ${this.lastName}; Номер телефона: ${this.callNumber}`;
    }
}

const phBook = new phoneBook();
const cnt1 = new contact();
/* const cnt2 = new contact();
const cnt3 = new contact(); */

cnt1.setContact();
/* cnt2.setContact();
cnt3.setContact(); */

phBook.setPhoneContact(cnt1);
/* phBook.setPhoneContact(cnt2);
phBook.setPhoneContact(cnt3); */
/* let tmp;
for(let i = 0; i < 5; i++)
{
    let temp = new contact();
    temp.setContact();
   phBook.setPhoneContact(temp);
} */

phBook.printPhoneContact();