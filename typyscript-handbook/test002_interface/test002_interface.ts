/**
 * Created by liguohua on 16/9/12.
 */
//1.基本原理
//我们需要给这个参数传入一个带有名为'label'的字符串类型属性的对象。注意我们传入的这个对象实际上不只有'label'属性，但编译器只检查那些指定的属性，查看它们的类型是否相符
function printLabel(labelledObj:{label:string}) {
    console.log(labelledObj.label);
}

var myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);


//2.抽取接口
interface LabelledValue {
    label:string;
}
function printLabel2(labelledObj:LabelledValue) {
    console.log(labelledObj.label);
}
var myObj = {size: 10, label: "Size 10 Object"};
printLabel2(myObj);


//3.可选属性使用?
interface SquareConfig {
    color?:string;
    width?:number;
}
function createSquare(config:SquareConfig):{color:string; area:number} {
    var newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

var mySquare = createSquare({color: "black"});
console.info(mySquare);


//4.接口描述函数类型
interface SearchFunc {
    (source:string, subString:string):boolean;
}
//实现接口的函数,参数名称与接口完全一致
var mySearch1:SearchFunc = function (source:string, subString:string) {
    var result = source.search(subString);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
}
console.info(mySearch1("hello good", "good"));
//实现接口的函数,允许参数名称与接口不一致
var mySearch2:SearchFunc = function (src:string, sub:string) {
    var result = src.search(sub);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
}
console.info(mySearch2("hello good", "good"));
//5.接口描述数组
//ypeScript支持两种索引类型：string和number。同时使用这两种类型的索引也是可能的，只要我们保证数字类型的索引所对应的值的类型，必须是字符串索引对应的值的类型的子类型。
interface StringArray {
    [index:number]:string;
}

var myArray:StringArray;
myArray = ["Bob", "Fred"];
console.info(myArray);

//6.接口描述类中的属性和方法
interface ClockInterface {
    currentTime:Date;
    setTime(d:Date);
}
class Clock implements ClockInterface {
    //属性
    currentTime:Date;
    //方法
    setTime(d:Date) {
        this.currentTime = d;
    }

    //构造方法
    constructor(h:number, m:number) {
    }

}
var c = new Clock();
console.info(c);
//7.接口描述类的属性和方法,静态检查
interface ClockStatic {
    new (hour:number, minute:number);
}

class Clock2 {
    currentTime:Date;

    constructor(h:number, m:number) {
    }

}

var cs:ClockStatic = Clock2;
var newClock = new cs(7, 30);
console.info(newClock);


//8.接口的继承体系
interface Shape {
    color:string;
}

interface PenStroke {
    penWidth:number;
}

interface Square extends Shape, PenStroke {
    sideLength:number;
}

var square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
console.info(square);


//9.
interface Counter {
    (start:number):string;
    interval:number;
    reset():void;
}

var c:Counter;
// c(10);//error
// c.reset();//error
c.interval = 5.0;
console.info(c);