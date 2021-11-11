# Travelask

## Задание 1
Реализуйте класс Elem, который параметром принимает
селектор одного HTML элемента и затем может выполнять
с ним различные операции. 

Так же класс должен уметь работать
не только с одним элементом, но и одновременно с группой

Класс должен работать следующим образом:
```javascript
const elem = new Elem('селектор');

elem.html('!'); //запишет в текст элемента '!'
elem.append('!'); //запишет в начало элемента '!'
elem.prepend('!'); //запишет в конец элемента '!'
elem.attr('class', 'www'); //запишет в атрибут class значение www

//Должны работать цепочки методов:
elem.html('hello').append('!').prepend('!');
elem.attr('class', 'www').attr('title', 'hello');
```

## Задание 2
Реализуйте класс Student (Студент), который будет наследовать от класса User.
Этот класс должен иметь следующие свойства: name (имя, наследуется от User),
surname (фамилия, наследуется от User), year (год поступления в вуз).
Класс должен уметь возвращать полное имя getFullName (наследуется от User).

Также класс должен уметь выводить текущий курс студента (getCourse, от 1 до 5).
Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получите самостоятельно.

_Нужно решить без использования методов._

Класс должен работать следующим образом:

```javascript
const student = new Student('Иван', 'Иванов', 2018);

console.log(worker.name); //выведет 'Иван'
console.log(worker.surname); //выведет 'Иванов'
console.log(worker.getFullName); //выведет 'Иван Иванов'
console.log(worker.year); //выведет 2018
console.log(worker.getCourse); //выведет 3 - третий курс, так как текущий год 2021

// Вот так должен выглядеть класс User, от которого наследуется наш Student

class User {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    // getFullName напишите сами
}
```
## Задание 3
Реализуйте класс Worker (Работник), который будет иметь следующие приватные свойства:
name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней).

Также класс должен уметь выводить зарплату работника (getSalary).
Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.

Класс должен работать следующим образом:
```javascript
const worker = new Worker('Иван', 'Иванов', 100, 31);

console.log(worker.getName); //выведет 'Иван'
console.log(worker.getSurname); //выведет 'Иванов'
console.log(worker.getRate); //выведет 100
console.log(worker.getDays); //выведет 31
console.log(worker.getSalary); //выведет 3100$ - то есть 100*31
```