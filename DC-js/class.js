'use strict';
// Object-oriented programing

// Class: template
// object: instance of a class

// Javascript classes
// - Introduced in. S6
// - Syntactical sugar over prototype-based inheritance 

// 1. Class declarations
class Person{
    //constructor 생성자 
    constructor(name, age){ // 생성자는 object를 만들 때 사용함. ex) new Person(name, age)
        // fields => 변수
        this.name = name;
        this.age = age;
    }
    // methods => 함수
    speak(){
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person(`ellie`, 20); // 새로운 object 생성
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. Getter and setters
// 클래스를 사용하는 사용자가 잘못 사용하더라도, 방어적인 자세로 만들 수 있게 하는 것
// ex) 사용자가 나이를 -1로 입력?! 나이가 -1인건 말이 안됨 
class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age(){ // 값 return
        return this._age; // getter, setter에서 사용하는 변수는 이름을 좀 다르게
    }
    set age(value){ // 값 설정
        // if(value<0){
        //     throw Error('age can not be negative');
        // }
        this._age = value < 0 ? 0 : value;
    }
}
const user1 = new User('steve', 'job', -1); // 나이가 음수일 수 없듬
console.log(user1.age);

// 3. Fields (public, private)
// Too soon!
class Experiment{
    publicField = 2;
    #privateField = 0;  // 클라스 밖에선 읽을 수 없음 .. 
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// Too soon!
class Article{
    static publisher = 'Dream Coding';  // object와 상관없이 공통적인 부분 - 메모리 사용 줄임 
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }
    static printPublisher(){
        console.log(Article.publisher);
    }
}
const article1 = new Article(1);
const article2 = new Article(2);
// static 은 object 마다 설정되는게 아니라 class 자체에 붙어있음 
// console.log(article1.publisher); // error
console.log(Article.publisher); // 클래스에서 직접 접근해야함
Article.printPublisher();

// 5. Inheritance 상속
// A way for one class to extend another class
class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw(){
        console.log(`drawing ${this.color} color!`);
    }
    getArea(){
        return this.width * this.height;
    }
}
class Rectangle extends Shape {} // Rectangle이 Shape 클래스를 상속받음
class Triangle extends Shape{
    draw(){
        super.draw(); // 부모의 메소드 호출
        console.log('🔺');
    }
    getArea(){  // 재정의 
        return (this.width * this.height) / 2;
    }
    toString(){ // Object안의 메소드 재정의 
        return `Trianble: color: ${this.color}`;
    }
}

const rectangle = new Rectangle(20,20,'blue');
rectangle.draw(); 
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
// object가 해당 클래스를 이용해서 생성된건지 확인 
console.log(rectangle instanceof Rectangle); //T
console.log(triangle instanceof Rectangle);  // F
console.log(triangle instanceof Triangle);  // T
console.log(triangle instanceof Shape);     // T
console.log(triangle instanceof Object);    // T, 자바스크립트의 모든 object는 Object 클래스를 상속한것
