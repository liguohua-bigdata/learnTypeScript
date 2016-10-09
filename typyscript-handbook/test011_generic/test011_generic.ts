/**
 * Created by liguohua on 16/9/14.
 */
//1.泛型函数
function identity<T>(x:T):T {
    return x;
}
//指定泛型调研的实际类型
console.info(identity<string>("zhangsan"));
//不指定泛型调研的实际类型
console.info(identity("zhangsan"));

//2.泛型数组的函数一
function indentity2<T>(x:T[]):T[] {
    console.info(x.length)
    return x;
}
console.info(indentity2(["zhangsan", "lisi"]));
//3.泛型数组的函数二
function indentity3<T>(x:Array<T>) {
    console.info(x.length)
    return x;
}
console.info(indentity3(["zhangsan", "lisi"]));

//4.泛型接口一
interface GenericIf<T> {
    (x:T):T;
}
function t1<T>(x:T):T {
    return x;
}
var vt1:GenericIf<string> = t1;
console.info(vt1("lisi"))


//5.泛型接口二
console.info("#####################################")
interface  GenericIF2<T,E> {
    (t:[T], e:[E]):[T];
}
function t3<T,E>(t:[T], e:[E]):[T] {
    console.info(e);
    console.info(e.length);
    return t;
}
var vt3:GenericIF2<string,number> = t3;
console.info(vt3(["zhangsan", "lisi"], [1, 2]));

//6.泛型类
console.info("#####################################")

class GenericClazz<A,B,X,Y> {
    a:A;
    b:B;

    say(x:X, y:Y) {
        console.info(x);
        console.info(y);
        console.info(this);
    }

    constructor(a:A, b:B) {
        this.a = a;
        this.b = b;
    }
}

var genericClazs:GenericClazz<string,number,string,number> = new GenericClazz("ZHANGSAN", 18);
genericClazs.say("caoxian", 21345);


//7.泛型限定
console.info("#####################################")
//7.1定义泛型限定的方法
interface LengthWise {
    length:number;
}
function sayLength<X extends LengthWise>(x:X):X {
    console.info(x.length);
    return x;
}
//7.2调研泛型限定的方法
//调用方法一
console.info(sayLength({length: 123, name: "hahahahhah"}));
// 调用方法二
class LengthWiseImpl1 implements LengthWise {
    name:string="hahhahahh2";
    length:number;

    constructor(length:number) {
        this.length = length;
    }
}
var lengthWiseImpl1:LengthWiseImpl1 = new LengthWiseImpl1(123);
console.info(sayLength(lengthWiseImpl1));