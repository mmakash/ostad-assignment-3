// 8) javascript es6 super keyword
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    introduce(){
        console.log(`Hello my name is ${this.name} and im ${this.age} years old`);
    }
}
class Student extends Person{
    constructor(name,age,major){
        super(name,age);
        this.major = major;
    }
    introduce(){
        console.log(`Hello my name is ${this.name} , Im ${this.age} years old and ${this.major} is my major`);
    }
}
const person = new Person("John",30);
person.introduce();
const student = new Student("Brian",20,"CSE");
student.introduce();