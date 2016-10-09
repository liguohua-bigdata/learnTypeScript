/**
 * Created by liguohua on 16/9/14.
 */
//1.泛型函数
function identity(x) {
    return x;
}
//指定泛型调研的实际类型
console.info(identity("zhangsan"));
//不指定泛型调研的实际类型
console.info(identity("zhangsan"));
//2.泛型数组的函数一
function indentity2(x) {
    console.info(x.length);
    return x;
}
console.info(indentity2(["zhangsan", "lisi"]));
//3.泛型数组的函数二
function indentity3(x) {
    console.info(x.length);
    return x;
}
console.info(indentity3(["zhangsan", "lisi"]));
function t1(x) {
    return x;
}
var vt1 = t1;
console.info(vt1("lisi"));
//5.泛型接口二
console.info("#####################################");
function t3(t, e) {
    console.info(e);
    console.info(e.length);
    return t;
}
var vt3 = t3;
console.info(vt3(["zhangsan", "lisi"], [1, 2]));
//6.泛型类
console.info("#####################################");
var GenericClazz = (function () {
    function GenericClazz(a, b) {
        this.a = a;
        this.b = b;
    }
    GenericClazz.prototype.say = function (x, y) {
        console.info(x);
        console.info(y);
        console.info(this);
    };
    return GenericClazz;
}());
var genericClazs = new GenericClazz("ZHANGSAN", 18);
genericClazs.say("caoxian", 21345);
//7.泛型限定
console.info("#####################################");
function sayLength(x) {
    console.info(x.length);
    return x;
}
//7.2调研泛型限定的方法
//调用方法一
console.info(sayLength({ length: 123, name: "hahahahhah" }));
// 调用方法二
var LengthWiseImpl1 = (function () {
    function LengthWiseImpl1(length) {
        this.name = "hahhahahh2";
        this.length = length;
    }
    return LengthWiseImpl1;
}());
var lengthWiseImpl1 = new LengthWiseImpl1(123);
console.info(sayLength(lengthWiseImpl1));
//# sourceMappingURL=test011_generic.js.map