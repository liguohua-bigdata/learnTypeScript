/**
 * Created by liguohua on 16/10/10.
 */
/**
 * 接口初探
 * 类型检查器会查看printLabel的调用。 printLabel有一个参数，并要求这个对象参数有一个名为label类型为string的属性。
 * 需要注意的是，我们传入的对象参数实际上会包含很多属性，但是编译器只会检查那些必需的属性是否存在，并且其类型是否匹配
 * @param labeldObj
 */
function printlabel(labeldObj) {
    console.info(labeldObj.label);
}
var myobj = {
    name: "zhangsan",
    label: "shandongren"
};
printlabel(myobj);
//define function
function printlabel2(o) {
    console.info(o.label);
}
//call function apply interface
var myobj2 = {
    name: "zhangsan",
    label: "kejiren"
};
printlabel2(myobj2);
//define function
function createSquare2(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare2 = createSquare2({ color: "black" });
console.info(mySquare2);
var p1 = { x: 12, y: 12 };
console.info(p1);
// function type define
var searchFunc = function (source, subString) {
    var result = source.search(subString);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
};
console.info(searchFunc("zhangsan", "san"));
//函数的参数名不需要与接口里定义的名字相匹配
var searchFunc2 = function (src, sub) {
    var res = src.search(sub);
    if (res == -1) {
        return false;
    }
    else {
        return true;
    }
};
console.info(searchFunc2("zhangsan", "san"));
//类型推断
var mySearch3 = function (src, sub) {
    var result = src.search(sub);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
};
console.info(mySearch3("zhangsan", "san"));
var myArray2 = ["Bob", "Fred"];
var myStr = myArray2[0];
console.info(myStr);
var Clocktx = (function () {
    function Clocktx() {
    }
    Clocktx.prototype.setTime = function (d) {
        this.currentTimex = d;
    };
    return Clocktx;
}());
var squarex = {};
squarex.colorx = "blue";
squarex.sideLengthx = 10;
squarex.penWidthx = 5.0;
console.info(squarex);
function getCounter() {
    var counter = function (start) { };
    counter.intervalx = 123;
    counter.reset = function () { };
    return counter;
}
var cx = getCounter();
console.info(cx(10));
cx.reset();
cx.intervalx = 5.0;
console.info(cx);
//# sourceMappingURL=interface001.js.map