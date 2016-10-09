/**
 * Created by liguohua on 16/9/12.
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//1.定义类,使用类创建对象
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("world"); //创建对象
console.info(greeter); //使用对象
console.info(greeter.greeting); //使用对象的属性
console.info(greeter.greet()); //使用对象的方法
//2.类的继承
var Animal = (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (meters) {
        if (meters === void 0) { meters = 0; }
        console.info(this.name + " moved " + meters + "m.");
    };
    return Animal;
}());
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        _super.call(this, name);
    }
    Snake.prototype.move = function (meters) {
        if (meters === void 0) { meters = 5; }
        console.info("Slithering...");
        _super.prototype.move.call(this, meters);
    };
    return Snake;
}(Animal));
var Horse = (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        _super.call(this, name);
    }
    Horse.prototype.move = function (meters) {
        if (meters === void 0) { meters = 45; }
        console.info("Galloping...");
        _super.prototype.move.call(this, meters);
    };
    return Horse;
}(Animal));
var sam = new Snake("Sammy the Python");
var tom = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);
//3.理解private
//当我们比较两种不同的数据类型时，我们会忽略它们是怎么来的。只要它们的每个成员都是一致的，我们就说这两种类型是一致的。
// 而当比较拥有私有成员的类型时，情况会稍有不同。当比较两种类型是否兼容时，如果其中一种类型拥有私有成员，那么只有当另一种类型也对应拥有具有相同定义的私有成员时，我们才说这两种类型是兼容的。
var Animal2 = (function () {
    function Animal2(theName) {
        this.name = theName;
    }
    return Animal2;
}());
var Rhino = (function (_super) {
    __extends(Rhino, _super);
    function Rhino() {
        _super.call(this, "Rhino");
    }
    return Rhino;
}(Animal2));
var Employee = (function () {
    function Employee(theName) {
        this.name = theName;
    }
    return Employee;
}());
var animal = new Animal2("Goat");
var rhino = new Rhino();
var employee = new Employee("Bob");
animal = rhino;
//animal = employee; //error: Animal and Employee are not compatible
// rhino = employee;
console.info(animal);
//4.访问器（Accessors）
var Student = (function () {
    function Student() {
    }
    Object.defineProperty(Student.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    return Student;
}());
var s1 = new Student();
s1.name = "张三"; //set
console.info(s1.name); //get
//4.静态属性
var Teacher = (function () {
    function Teacher() {
    }
    Object.defineProperty(Teacher, "salary", {
        get: function () {
            return this._salary;
        },
        set: function (value) {
            this._salary = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Teacher.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Teacher.prototype.say = function () {
        console.info(this._name + Teacher._salary);
    };
    Teacher.haha = function () {
        console.info("hahaha" + Teacher._salary);
    };
    Teacher.staticThis = function () {
        console.info("########:  " + this.toString());
    };
    Teacher.prototype.noStaticThis = function () {
        console.info("*******  " + this.toString());
    };
    return Teacher;
}());
// console.info(t.haha);//error,对象不能访问静态的东西
var t = new Teacher();
console.info(Teacher.staticThis());
console.info(t.noStaticThis());
Teacher.salary = "1000.00"; //static set
console.info(Teacher.salary); //static get
t.name = "zhangsan"; //set
console.info(t.name); //get
console.info(t.say());
console.info(t);
//# sourceMappingURL=test003_class.js.map