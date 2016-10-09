/**
 * Created by liguohua on 16/9/12.
 */
//1.基本原理
//我们需要给这个参数传入一个带有名为'label'的字符串类型属性的对象。注意我们传入的这个对象实际上不只有'label'属性，但编译器只检查那些指定的属性，查看它们的类型是否相符
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function printLabel2(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel2(myObj);
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
console.info(mySquare);
//实现接口的函数,参数名称与接口完全一致
var mySearch1 = function (source, subString) {
    var result = source.search(subString);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
};
console.info(mySearch1("hello good", "good"));
//实现接口的函数,允许参数名称与接口不一致
var mySearch2 = function (src, sub) {
    var result = src.search(sub);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
};
console.info(mySearch2("hello good", "good"));
var myArray;
myArray = ["Bob", "Fred"];
console.info(myArray);
var Clock = (function () {
    //构造方法
    function Clock(h, m) {
    }
    //方法
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
var c = new Clock();
console.info(c);
var Clock2 = (function () {
    function Clock2(h, m) {
    }
    return Clock2;
}());
var cs = Clock2;
var newClock = new cs(7, 30);
console.info(newClock);
var square = {};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
console.info(square);
var c;
// c(10);//error
// c.reset();//error
c.interval = 5.0;
console.info(c);
//# sourceMappingURL=test002_interface.js.map