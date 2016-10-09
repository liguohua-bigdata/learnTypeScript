/**
 * Created by liguohua on 16/9/12.
 */


//1.定义类,使用类创建对象
class Greeter {
    greeting:string;

    constructor(message:string) {
        this.greeting = message;
    }

    greet() {
        return "Hello, " + this.greeting;
    }
}
var greeter = new Greeter("world");//创建对象
console.info(greeter);//使用对象
console.info(greeter.greeting);//使用对象的属性
console.info(greeter.greet());//使用对象的方法

//2.类的继承
class Animal {
    //在TypeScript中，每个成员都被默认为公有。
    name:string;

    constructor(theName:string) {
        this.name = theName;
    }

    move(meters:number = 0) {
        console.info(this.name + " moved " + meters + "m.");
    }
}

class Snake extends Animal {
    constructor(name:string) {
        super(name);
    }

    move(meters = 5) {
        console.info("Slithering...");
        super.move(meters);
    }
}

class Horse extends Animal {
    constructor(name:string) {
        super(name);
    }

    move(meters = 45) {
        console.info("Galloping...");
        super.move(meters);
    }
}
var sam = new Snake("Sammy the Python");
var tom:Animal = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);


//3.理解private
//当我们比较两种不同的数据类型时，我们会忽略它们是怎么来的。只要它们的每个成员都是一致的，我们就说这两种类型是一致的。
// 而当比较拥有私有成员的类型时，情况会稍有不同。当比较两种类型是否兼容时，如果其中一种类型拥有私有成员，那么只有当另一种类型也对应拥有具有相同定义的私有成员时，我们才说这两种类型是兼容的。
class Animal2 {
    private name:string;

    constructor(theName:string) {
        this.name = theName;
    }
}

class Rhino extends Animal2 {
    constructor() {
        super("Rhino");
    }
}

class Employee {
    private name:string;

    constructor(theName:string) {
        this.name = theName;
    }
}

var animal = new Animal2("Goat");
var rhino = new Rhino();
var employee = new Employee("Bob");

animal = rhino;
//animal = employee; //error: Animal and Employee are not compatible
// rhino = employee;
console.info(animal);

//4.访问器（Accessors）
class Student {
    private _name;

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}
var s1:Student = new Student();
s1.name = "张三";//set
console.info(s1.name);//get


//4.静态属性
class Teacher {
    private _name;
    private static _salary;

    static get salary() {
        return this._salary;
    }

    static set salary(value) {
        this._salary = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    public say() {
        console.info(this._name + Teacher._salary);
    }
    public static  haha(){
        console.info("hahaha"+Teacher._salary);
    }
    public static  staticThis(){
        console.info("########:  "+this.toString());
    }
    public noStaticThis(){
        console.info("*******  "+this.toString());
    }
}
// console.info(t.haha);//error,对象不能访问静态的东西
var t = new Teacher();
console.info(Teacher.staticThis());
console.info(t.noStaticThis());

Teacher.salary = "1000.00";//static set
console.info(Teacher.salary);//static get

t.name = "zhangsan";//set
console.info(t.name);//get
console.info(t.say());


console.info(t);