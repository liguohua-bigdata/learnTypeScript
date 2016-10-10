var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by liguohua on 16/10/10.
 */
var ClassTest001;
(function (ClassTest001) {
    /**
     * 就是ECMAScript 6开始，JavaScript程序员将能够使用基于类的面向对象的方式
     */
    var GreeterClass = (function () {
        function GreeterClass(message) {
            this.greeting = message;
        }
        GreeterClass.prototype.greet = function () {
            return "Hello, " + this.greeting;
        };
        return GreeterClass;
    }());
    var greeterClass = new GreeterClass("world");
    console.info(greeterClass);
    /**
     * 继承
     在TypeScript里，我们可以使用常用的面向对象模式。 当然，基于类的程序设计中最基本的模式是允许使用继承来扩展现有的类。
     */
    var Animal = (function () {
        function Animal(theName) {
            this.name = theName;
        }
        Animal.prototype.move = function (distanceInMeters) {
            if (distanceInMeters === void 0) { distanceInMeters = 0; }
            console.log(this.name + " moved " + distanceInMeters + "m.");
        };
        return Animal;
    }());
    var Snake = (function (_super) {
        __extends(Snake, _super);
        function Snake(name) {
            _super.call(this, name);
        }
        Snake.prototype.move = function (distanceInMeters) {
            if (distanceInMeters === void 0) { distanceInMeters = 5; }
            console.log("Slithering...");
            _super.prototype.move.call(this, distanceInMeters);
        };
        return Snake;
    }(Animal));
    var Horse = (function (_super) {
        __extends(Horse, _super);
        function Horse(name) {
            _super.call(this, name);
        }
        Horse.prototype.move = function (distanceInMeters) {
            if (distanceInMeters === void 0) { distanceInMeters = 45; }
            console.log("Galloping...");
            _super.prototype.move.call(this, distanceInMeters);
        };
        return Horse;
    }(Animal));
    var sam = new Snake("Sammy the Python");
    var tom = new Horse("Tommy the Palomino");
    sam.move();
    tom.move(34);
    /**
     * 公共，私有与受保护的修饰符
     默认为public
     */
    var Animal2 = (function () {
        function Animal2(theName) {
            this.name = theName;
        }
        Animal2.prototype.move = function (distanceInMeters) {
            console.log(this.name + " moved " + distanceInMeters + "m.");
        };
        return Animal2;
    }());
    /**
     * 理解private

     当成员被标记成private时，它就不能在声明它的类的外部访问。
     */
    var Animal3 = (function () {
        function Animal3(theName) {
            this.name = theName;
        }
        return Animal3;
    }());
    // new Animal3("Cat").name; // Error: 'name' is private;
    /**
     * 当我们比较带有private或protected成员的类型的时候，情况就不同了。
     * 如果其中一个类型里包含一个 private成员，那么只有当另外一个类型中也存在这样一个private成员，
     * 并且它们都是来自同一处声明时，我们才认为这两个类型是兼容的。 对于 protected成员也使用这个规则。
     */
    var Animal4 = (function () {
        function Animal4(theName) {
            this.name = theName;
        }
        return Animal4;
    }());
    var Rhino = (function (_super) {
        __extends(Rhino, _super);
        function Rhino() {
            _super.call(this, "Rhino");
        }
        return Rhino;
    }(Animal4));
    var Employee = (function () {
        function Employee(theName) {
            this.name = theName;
        }
        return Employee;
    }());
    var animal = new Animal4("Goat");
    var rhino = new Rhino();
    var employee = new Employee("Bob");
    animal = rhino;
    // animal = employee; // Error: Animal and Employee are not compatible
    /**
     * 理解protected

     protected修饰符与private修饰符的行为很相似，但有一点不同，protected成员在派生类中仍然可以访问
     我们不能在Person类外使用name，但是我们仍然可以通过Employee类的实例方法访问，因为Employee是由Person派生而来的。
     */
    var Person = (function () {
        function Person(name) {
            this.name = name;
        }
        return Person;
    }());
    var Employee2 = (function (_super) {
        __extends(Employee2, _super);
        function Employee2(name, department) {
            _super.call(this, name);
            this.department = department;
        }
        Employee2.prototype.getElevatorPitch = function () {
            return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
        };
        return Employee2;
    }(Person));
    var howard = new Employee2("Howard", "Sales");
    console.log(howard.getElevatorPitch());
    // console.log(howard.name); // error
    /**
     * 构造函数也可以被标记成protected。
     * 这意味着这个类不能在包含它的类外被实例化，但是能被继承。
     */
    var PersonA = (function () {
        function PersonA(theName) {
            this.name = theName;
        }
        return PersonA;
    }());
    // Employee can extend Person
    var EmployeeA = (function (_super) {
        __extends(EmployeeA, _super);
        function EmployeeA(name, department) {
            _super.call(this, name);
            this.department = department;
        }
        EmployeeA.prototype.getElevatorPitch = function () {
            return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
        };
        return EmployeeA;
    }(PersonA));
    var howardA = new EmployeeA("Howard", "Sales");
    var john = new PersonA("John"); // Error: The 'Person' constructor is protected
    /**
     *我们把对 fullName的直接访问改成了可以检查密码的set方法。 我们也加了一个 get方法
     */
    var passcode = "secret passcode";
    var EmployeeB = (function () {
        function EmployeeB() {
        }
        Object.defineProperty(EmployeeB.prototype, "fullName", {
            get: function () {
                return this._fullName;
            },
            set: function (newName) {
                if (passcode && passcode == "secret passcode") {
                    this._fullName = newName;
                }
                else {
                    console.log("Error: Unauthorized update of employee!");
                }
            },
            enumerable: true,
            configurable: true
        });
        return EmployeeB;
    }());
    var employeeB = new EmployeeB();
    employeeB.fullName = "Bob Smith";
    if (employeeB.fullName) {
        console.info(employeeB.fullName);
    }
    /**
     * 静态属性
     到目前为止，我们只讨论了类的实例成员，那些仅当类被实例化的时候才会被初始化的属性。
     我们也可以创建类的静态成员，这些属性存在于类本身上面而不是类的实例上。
     */
    var Grid = (function () {
        function Grid(scale) {
            this.scale = scale;
        }
        Grid.prototype.calculateDistanceFromOrigin = function (point) {
            var xDist = (point.x - Grid.origin.x);
            var yDist = (point.y - Grid.origin.y);
            return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
        };
        Grid.origin = { x: 0, y: 0 };
        return Grid;
    }());
    var grid1 = new Grid(1.0); // 1x scale
    var grid2 = new Grid(5.0); // 5x scale
    console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
    console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
    /**
     * 抽象类
     抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化。 不同于接口，抽象类可以包含成员的实现细节。
     abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法。
     */
    var AnimalC = (function () {
        function AnimalC() {
        }
        AnimalC.prototype.move = function () {
            console.log('roaming the earch...');
        };
        return AnimalC;
    }());
    /**
     * 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。 抽象方法的语法与接口方法相似。
     * 两者都是定义方法签名但不包含方法体。 然而，抽象方法必须包含 abstract关键字并且可以包含访问修饰符。
     */
    var Department = (function () {
        function Department(name) {
            this.name = name;
        }
        Department.prototype.printName = function () {
            console.log('Department name: ' + this.name);
        };
        return Department;
    }());
    var AccountingDepartment = (function (_super) {
        __extends(AccountingDepartment, _super);
        function AccountingDepartment() {
            _super.call(this, 'Accounting and Auditing'); // constructors in derived classes must call super()
        }
        AccountingDepartment.prototype.printMeeting = function () {
            console.log('The Accounting Department meets each Monday at 10am.');
        };
        AccountingDepartment.prototype.generateReports = function () {
            console.log('Generating accounting reports...');
        };
        return AccountingDepartment;
    }(Department));
    var department; // ok to create a reference to an abstract type
    // department = new Department(); // error: cannot create an instance of an abstract class
    department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
    department.printName();
    department.printMeeting();
    // department.generateReports(); // error: method doesn't exist on declared abstract type
    /**
     *把类当做接口使用
     类定义会创建两个东西：类的实例类型和一个构造函数。 因为类可以创建出类型，所以你能够在允许使用接口的地方使用类。
     */
    var Point = (function () {
        function Point() {
        }
        return Point;
    }());
    var point3d = { x: 1, y: 2, z: 3 };
})(ClassTest001 || (ClassTest001 = {}));
//# sourceMappingURL=class001.js.map