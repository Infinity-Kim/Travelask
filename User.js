class User {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    // getFullName напишите сами
}

class Student extends User {
    constructor(year) {
        super();
        this.year = year;
    }
}
