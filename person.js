// Module Wrapper Function
// (function (exports, require, module, __filename, __dirname) {

// })

console.log(__dirname);
console.log(__filename);


class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`hello, i am ${this.name}`);
  }
}

module.exports = Person;