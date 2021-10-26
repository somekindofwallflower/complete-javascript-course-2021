'use strict'

const jonasObject = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    // calcAge: function (birthYear) {
    //   return 2037 - birthYear;
    // }
    //   calcAge: function () {
    //     console.log(this)
    //     return 2037 - this.birthYear;
    // }
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },
  getSummary: function() {
    return `${this.firstName} is a ${this.age}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
  }
};

console.log(jonasObject.calcAge());
console.log(jonasObject['calcAge']());

console.log(jonasObject.age);

// Challenge
"Jonas is a 46-year old teacher, and he has a/no driver's license"
console.log(jonasObject.getSummary())
