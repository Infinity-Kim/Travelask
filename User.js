// Сделал геттеры, так как, в примере вызова был вызов без скобок

class User {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    get getFullName() {
        return `${this.name} ${this.surname}`;
    }
}

class Student extends User {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = +year;
    }

    get getCourse () {
        return new Date().getFullYear() - this.year;
    }
}