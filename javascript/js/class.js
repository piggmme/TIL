// 1. class
class Animal {
  constructor(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
  }
  say() {
    console.log(this.sound);
  }
}

console.log(Animal.prototype.say); // say함수가 출력됨.

// 1-2. class 상속
class Dog extends Animal {
  constructor(name, sound) {
    super("개", name, sound); // 부모의 메소드 호출
  }
}
class Cat extends Animal {
  constructor(name, sound) {
    super("고양이", name, sound);
  }
}

const dog = new Animal("개", "멍멍이", "멍멍");
const cat = new Animal("고양이", "야옹이", "야옹");

const dog2 = new Dog("멍멍이", "멍멍");
const cat2 = new Cat("야옹이", "야옹");

dog.say();
cat.say();

// 2. 연습 - class food
class Food {
  constructor(name) {
    this.name = name;
    this.brands = [];
  }
  addBrand(brand) {
    this.brands.push(brand);
  }
  print() {
    console.log(`${this.name}을/를 파는 음식점들`);
    console.log(this.brands.join(", "));
  }
}
const pizza = new Food("피자");
pizza.addBrand("피자헛");
pizza.addBrand("도미노");

const chicken = new Food("치킨");
chicken.addBrand("굽네치킨");
chicken.addBrand("BBQ");

pizza.print();
chicken.print();
