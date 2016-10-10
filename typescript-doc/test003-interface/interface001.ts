/**
 * Created by liguohua on 16/10/10.
 */
/**
 * 接口初探
 * 类型检查器会查看printLabel的调用。 printLabel有一个参数，并要求这个对象参数有一个名为label类型为string的属性。
 * 需要注意的是，我们传入的对象参数实际上会包含很多属性，但是编译器只会检查那些必需的属性是否存在，并且其类型是否匹配
 * @param labeldObj
 */
function printlabel(labeldObj:{label:string}) {
    console.info(labeldObj.label)
}
let myobj = {
    name: "zhangsan",
    label: "shandongren"
}
printlabel(myobj);

/**
 * 接口定义和使用
 *使用接口来描述：必须包含一个label属性且类型为string：
 * 类型检查器不会去检查属性的顺序，只要相应的属性存在并且类型也是对的就可以
 */
//define interface
interface  Inter1 {
    label:string
}
//define function
function printlabel2(o:Inter1) {
    console.info(o.label);
}
//call function apply interface
let myobj2 = {
    name: "zhangsan",
    label: "kejiren"
}
printlabel2(myobj2);

/**
 * 可选属性
 接口里的属性不全都是必需的。 有些是只在某些条件下存在，或者根本不存在。
 可选属性在应用“option bags”模式时很常用，即给函数传入的参数对象中只有部分属性赋值了。
 */
//define interface
interface  SquareConfig {
    color0?:string;
    width0?:number;
}
interface reSquareConfig {
    color:string;
    area:number
}
//define function
function createSquare2(config:SquareConfig):reSquareConfig {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare2 = createSquare2({color: "black"});
console.info(mySquare2);


/**
 只读属性
 一些对象属性只能在对象刚刚创建的时候修改其值。 你可以在属性名前用 readonly来指定只读属性:
 */
interface Point {
    // readonly x:number;
    // readonly y:number;
    x:number;
    y:number;
}
let p1:Point = {x: 12, y: 12};
console.info(p1);


/**
 * 函数类型
 * 除了描述带有属性的普通对象外，接口也可以描述函数类型。
 */
interface SearchFunc {
    //interface declare function type
    (source:string, subString:string):boolean;
}
// function type define
let searchFunc:SearchFunc = function (source:string, subString:string) {
    let result = source.search(subString);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
}
console.info(searchFunc("zhangsan", "san"))

//函数的参数名不需要与接口里定义的名字相匹配

let searchFunc2:SearchFunc = function (src:string, sub:string) {
    let res = src.search(sub);
    if (res == -1) {
        return false;
    } else {
        return true;
    }
}
console.info(searchFunc2("zhangsan", "san"));

//类型推断
let mySearch3:SearchFunc = function (src, sub) {
    let result = src.search(sub);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
}
console.info(mySearch3("zhangsan", "san"));


/**
 * 可索引的类型
 与使用接口描述函数类型差不多，我们也可以描述那些能够“通过索引得到”的类型，比如a[10]或ageMap["daniel"]。
 可索引类型具有一个 索引签名，它描述了对象索引的类型，还有相应的索引返回值类型。
 共有支持两种索引签名：字符串和数字。 可以同时使用两种类型的索引，
 但是数字索引的返回值必须是字符串索引返回值类型的子类型。
 这是因为当使用 number来索引时，JavaScript会将它转换成string然后再去索引对象。
 也就是说用 100（一个number）去索引等同于使用"100"（一个string）去索引，因此两者需要保持一致。
 */
interface StringArray {
    //StringArray[0]->'bob'
    [i:number]:string;
}
let myArray2:StringArray = ["Bob", "Fred"];
let myStr:string = myArray2[0];
console.info(myStr);


interface ClockInterface{
    currentTimex: Date;
    setTime(d: Date);
}
class Clocktx implements ClockInterface{
    currentTime:Date;
    currentTimex:Date;
    setTime(d:Date) {
        this.currentTimex=d;

    }
    
}

/**
 * 扩展接口
 * 和类一样，接口也可以相互扩展。 这让我们能够从一个接口里复制成员到另一个接口里，可以更灵活地将接口分割到可重用的模块里。
 */
interface Shape {
    colorx: string;
}

interface PenStroke {
    penWidthx: number;
}

interface Square extends Shape, PenStroke {
    sideLengthx: number;
}

let squarex = <Square>{};
squarex.colorx = "blue";
squarex.sideLengthx = 10;
squarex.penWidthx = 5.0;
console.info(squarex);




interface Counter {
    (start: number): string;
    intervalx: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.intervalx = 123;
    counter.reset = function () { };
    return counter;
}

let cx = getCounter();
console.info(cx(10));
cx.reset();
cx.intervalx = 5.0;
console.info(cx);