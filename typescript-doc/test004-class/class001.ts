/**
 * Created by liguohua on 16/10/10.
 */
namespace ClassTest001 {
    /**
     * 就是ECMAScript 6开始，JavaScript程序员将能够使用基于类的面向对象的方式
     */
    class GreeterClass {
        greeting:string;

        constructor(message:string) {
            this.greeting = message;
        }

        greet() {
            return "Hello, " + this.greeting;
        }
    }

    let greeterClass = new GreeterClass("world");
    console.info(greeterClass);


    /**
     * 继承
     在TypeScript里，我们可以使用常用的面向对象模式。 当然，基于类的程序设计中最基本的模式是允许使用继承来扩展现有的类。
     */
    class Animal {
        name:string;

        constructor(theName:string) {
            this.name = theName;
        }

        move(distanceInMeters:number = 0) {
            console.log(`${this.name} moved ${distanceInMeters}m.`);
        }
    }

    class Snake extends Animal {
        constructor(name:string) {
            super(name);
        }

        move(distanceInMeters = 5) {
            console.log("Slithering...");
            super.move(distanceInMeters);
        }
    }

    class Horse extends Animal {
        constructor(name:string) {
            super(name);
        }

        move(distanceInMeters = 45) {
            console.log("Galloping...");
            super.move(distanceInMeters);
        }
    }

    let sam = new Snake("Sammy the Python");
    let tom:Animal = new Horse("Tommy the Palomino");

    sam.move();
    tom.move(34);

    /**
     * 公共，私有与受保护的修饰符
     默认为public
     */
    class Animal2 {
        public name:string;

        public constructor(theName:string) {
            this.name = theName;
        }

        public move(distanceInMeters:number) {
            console.log(`${this.name} moved ${distanceInMeters}m.`);
        }
    }

    /**
     * 理解private

     当成员被标记成private时，它就不能在声明它的类的外部访问。
     */
    class Animal3 {
        private name:string;

        constructor(theName:string) {
            this.name = theName;
        }
    }

    // new Animal3("Cat").name; // Error: 'name' is private;


    /**
     * 当我们比较带有private或protected成员的类型的时候，情况就不同了。
     * 如果其中一个类型里包含一个 private成员，那么只有当另外一个类型中也存在这样一个private成员，
     * 并且它们都是来自同一处声明时，我们才认为这两个类型是兼容的。 对于 protected成员也使用这个规则。
     */

    class Animal4 {
        private name:string;

        constructor(theName:string) {
            this.name = theName;
        }
    }

    class Rhino extends Animal4 {
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

    let animal = new Animal4("Goat");
    let rhino = new Rhino();
    let employee = new Employee("Bob");

    animal = rhino;
    // animal = employee; // Error: Animal and Employee are not compatible

    /**
     * 理解protected

     protected修饰符与private修饰符的行为很相似，但有一点不同，protected成员在派生类中仍然可以访问
     我们不能在Person类外使用name，但是我们仍然可以通过Employee类的实例方法访问，因为Employee是由Person派生而来的。
     */

    class Person {
        protected name:string;

        constructor(name:string) {
            this.name = name;
        }
    }

    class Employee2 extends Person {
        private department:string;

        constructor(name:string, department:string) {
            super(name)
            this.department = department;
        }

        public getElevatorPitch() {
            return `Hello, my name is ${this.name} and I work in ${this.department}.`;
        }
    }

    let howard = new Employee2("Howard", "Sales");
    console.log(howard.getElevatorPitch());
    // console.log(howard.name); // error


    /**
     * 构造函数也可以被标记成protected。
     * 这意味着这个类不能在包含它的类外被实例化，但是能被继承。
     */
    class PersonA {
        protected name:string;

        constructor(theName:string) {
            this.name = theName;
        }
    }

// Employee can extend Person
    class EmployeeA extends PersonA {
        private department:string;

        constructor(name:string, department:string) {
            super(name);
            this.department = department;
        }

        public getElevatorPitch() {
            return `Hello, my name is ${this.name} and I work in ${this.department}.`;
        }
    }

    let howardA = new EmployeeA("Howard", "Sales");
    let john = new PersonA("John"); // Error: The 'Person' constructor is protected


    /**
     *我们把对 fullName的直接访问改成了可以检查密码的set方法。 我们也加了一个 get方法
     */

    let passcode = "secret passcode";

    class EmployeeB {
        private _fullName:string;

        get fullName():string {
            return this._fullName;
        }

        set fullName(newName:string) {
            if (passcode && passcode == "secret passcode") {
                this._fullName = newName;
            }
            else {
                console.log("Error: Unauthorized update of employee!");
            }
        }
    }

    let employeeB = new EmployeeB();
    employeeB.fullName = "Bob Smith";
    if (employeeB.fullName) {
        console.info(employeeB.fullName);
    }

    /**
     * 静态属性
     到目前为止，我们只讨论了类的实例成员，那些仅当类被实例化的时候才会被初始化的属性。
     我们也可以创建类的静态成员，这些属性存在于类本身上面而不是类的实例上。
     */
    class Grid {
        static origin = {x: 0, y: 0};

        calculateDistanceFromOrigin(point:{x:number; y:number;}) {
            let xDist = (point.x - Grid.origin.x);
            let yDist = (point.y - Grid.origin.y);
            return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
        }

        constructor(public scale:number) {
        }
    }

    let grid1 = new Grid(1.0);  // 1x scale
    let grid2 = new Grid(5.0);  // 5x scale

    console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
    console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));

    /**
     * 抽象类
     抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化。 不同于接口，抽象类可以包含成员的实现细节。
     abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法。
     */
    abstract class AnimalC {
        abstract makeSound():void;

        move():void {
            console.log('roaming the earch...');
        }
    }

    /**
     * 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。 抽象方法的语法与接口方法相似。
     * 两者都是定义方法签名但不包含方法体。 然而，抽象方法必须包含 abstract关键字并且可以包含访问修饰符。
     */
    abstract class Department {

        constructor(public name:string) {
        }

        printName():void {
            console.log('Department name: ' + this.name);
        }

        abstract printMeeting():void; // 必须在派生类中实现
    }

    class AccountingDepartment extends Department {

        constructor() {
            super('Accounting and Auditing'); // constructors in derived classes must call super()
        }

        printMeeting():void {
            console.log('The Accounting Department meets each Monday at 10am.');
        }

        generateReports():void {
            console.log('Generating accounting reports...');
        }
    }

    let department:Department; // ok to create a reference to an abstract type
    // department = new Department(); // error: cannot create an instance of an abstract class
    department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
    department.printName();
    department.printMeeting();
    // department.generateReports(); // error: method doesn't exist on declared abstract type


    /**
     *把类当做接口使用
     类定义会创建两个东西：类的实例类型和一个构造函数。 因为类可以创建出类型，所以你能够在允许使用接口的地方使用类。
     */

    class Point {
        x:number;
        y:number;
    }

    interface Point3d extends Point {
        z:number;
    }

    let point3d:Point3d = {x: 1, y: 2, z: 3};
}
