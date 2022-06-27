"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.people = [];
    }
    Person.prototype.addPerson = function (person) {
        this.people.push(person);
    };
    return Person;
}());
exports.Person = Person;
