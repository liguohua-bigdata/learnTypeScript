/**
 * Created by liguohua on 16/10/9.
 */
/**
 * 一.布尔值
 最基本的数据类型就是简单的true/false值，在JavaScript和TypeScript里叫做boolean（其它语言中也一样
 * @type {boolean}
 */
var isDone = false;
console.log(isDone);
/**
 * 二.数字
 和JavaScript一样，TypeScript里的所有数字都是浮点数。 这些浮点数的类型是 number。 除了支持十进制和十六进制字面量，Typescript还支持ECMAScript 2015中引入的二进制和八进制字面量。
 * @type {number}
 */
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
console.log(decLiteral);
console.log(hexLiteral);
console.log(binaryLiteral);
console.log(octalLiteral);
/**
 * 三.字符串
 JavaScript程序的另一项基本操作是处理网页或服务器端的文本数据。 像其它语言里一样，我们使用 string表示文本数据类型。 和JavaScript一样，可以使用双引号（ "）或单引号（'）表示字符串。
 * @type {string}
 */
var name = "bob";
name = "smith";
console.log(name);
/*
 * 你还可以使用模版字符串，它可以定义多行文本和内嵌表达式。 这种字符串是被反引号包围（ `），并且以${ expr }这种形式嵌入表达式
 * @type {string}
 */
var name2 = "Gene";
var age = 37;
var sentence = "Hello, my name is " + name2;
console.log(sentence);
/**
 * 四.数组
 TypeScript像JavaScript一样可以操作数组元素。 有两种方式可以定义数组。 第一种，可以在元素类型后面接上 []，表示由此类型元素组成的一个数组：
 * @type {number[]}
 */
var list = [1, 2, 3];
console.log(list);
/*
 * 第二种方式是使用数组泛型，Array<元素类型>：
 * @type {number[]}
 */
var list2 = [2, 3, 4];
console.log(list2);
/**
 * 五.元组 Tuple
 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
 */
var x;
x = ["zhangsan", 19];
console.log(x);
/**
 * 六.枚举
 enum类型是对JavaScript标准数据类型的一个补充。默认情况下，从0开始为元素编号。 你也可以手动的指定成员的数值。
 */
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
var bc = Color.Blue;
console.info(bc);
/*
 * 全部都采用手动赋值
 */
var Color1;
(function (Color1) {
    Color1[Color1["red"] = 2] = "red";
    Color1[Color1["blue"] = 4] = "blue";
    Color1[Color1["green"] = 7] = "green";
})(Color1 || (Color1 = {}));
var c1b = Color1.blue;
console.info(c1b);
/*
 * 获取枚举的索引和名称
 */
var Color2;
(function (Color2) {
    Color2[Color2["red"] = 1] = "red";
    Color2[Color2["blue"] = 2] = "blue";
    Color2[Color2["green"] = 3] = "green";
})(Color2 || (Color2 = {}));
var c2g = Color2.green;
console.info(c2g); //index
var c2gName = Color2[3];
console.info(c2gName); //name
/**
 * 七.任意值
 有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。 这些值可能来自于动态的内容
 * @type {boolean}
 */
var notSure = true;
console.log(notSure);
notSure = "this is a good idea!";
console.log(notSure);
notSure = 18;
console.log(notSure);
/*
 当你只知道一部分数据的类型时，any类型也是有用的。 比如，你有一个数组，它包含了不同的类型的数据：
 */
var anyList = [1, true, "hello"];
anyList[1] = 'yes';
console.log(anyList);
/**
 * 八.空值
 * 某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void：
 */
function testVoid() {
    console.info("this is a void  function!");
}
/*
 void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
 */
var unusable = undefined;
console.info(unusable);
unusable = null;
console.info(unusable);
/**
 九.Null 和 Undefined
 TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null。 和 void相似，它们的本身的类型用处不是很大：
 默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。

 */
/**
 * 十.强制类型转换,类型断言
 */
var someValue = "this is a string";
//“尖括号”语法：
var len = someValue.length;
console.info(len);
//as语法：
var len2 = someValue.length;
console.info(len2);
//两种形式是等价的。 至于使用哪个大多数情况下是凭个人喜好；然而，当你在TypeScript里使用JSX时，只有 as语法断言是被允许的。
/**
 * 十一.关于let
 你可能已经注意到了，我们使用let关键字来代替大家所熟悉的JavaScript关键字var。
 let关键字是JavaScript的一个新概念，TypeScript实现了它。 我们会在以后详细介绍它，很多常见的问题都可以通过使用 let来解决，
 所以尽可能地使用let来代替var吧。
 */ 
//# sourceMappingURL=type001.js.map