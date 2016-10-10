/**
 * Created by liguohua on 16/10/9.
 */

function fx() {
    var a = 10;
    return function g() {
        var b = a + 1;
        return b;
    }
}

var g = fx();
console.info(g);
console.info(g());//returns 11


/**
 * ，g可以获取到f函数里定义的a变量。 每当 g被调用时，它都可以访问到f里的a变量。
 * 即使当 g在f已经执行完后才被调用，它仍然可以访问及修改a。
 * @returns {number}
 */

function fun1() {
    var a = 1;

    a = 2;
    var b = g();
    a = 3;

    return b;
    function g() {
        return a;
    }
}

console.info(fun1()); // returns 2

/**
 * 作用域规则

 对于熟悉其它语言的人来说，var声明有些奇怪的作用域规则.
 变量 x是定义在*if语句里面*，但是我们却可以在语句的外面访问它。些人称此为* var作用域或函数作用域*
 * @param shouldInitialize
 * @returns {number}
 */
function fun2(shouldInitialize:boolean) {
    if (shouldInitialize) {
        var x = 10;
    }

    return x;
}

console.log(fun2(true));  // returns '10'
console.info(fun2(false)); // returns 'undefined'

/**
 * 多次声明同一个变量并不会报错：🏦隐患很大!
 * 里层的for循环会覆盖变量i，因为所有i都引用相同的函数作用域内的变量。
 * 有经验的开发者们很清楚，这些问题可能在代码审查时漏掉，引发无穷的麻烦。
 * @param matrix
 * @returns {number}
 */
function sumMatrix(matrix:number[][]) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (var i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }

    return sum;
}
console.info(sumMatrix([[1, 2, 3], [5, 6, 7]]));


/**
 *变量获取怪异之处
 *  setTimeout在若干毫秒后执行一个函数，并且是在for循环结束后。
 *  for循环结束后，i的值为10。 所以当函数被调用的时候，它会打印出 10！
 */
function fun3() {

    for (var i = 0; i < 10; i++) {
        setTimeout(function () {
            console.log(i);
        }, 100 * i);
    }
}
// fun3();

/**
 * 通常的解决方法是使用立即执行的函数表达式（IIFE）来捕获每次迭代时i的值
 * 这种奇怪的形式我们已经司空见惯了。 参数 i会覆盖for循环里的i，但是因为我们起了同样的名字，所以我们不用怎么改for循环体里的代码。
 */
function fun4() {
    for (var i = 0; i < 10; i++) {
        //IIFE=立即执行函数
        (function (i) {
            setTimeout(function () {
                console.log(i);
            }, 100 * i);
        })(i)
    }
}
// fun4();

/**
 *
 重定义及屏蔽

 我们提过使用var声明时，它不在乎你声明多少次；你只会得到1个。
 * @param x
 */

function f2(x) {
    var x;//ok
    var x;//ok

    if (true) {
        var x;//ok,only this
    }
}


/**
 *
 块作用域

 当用let声明一个变量，它使用的是词法作用域或块作用域。 不同于使用 var声明的变量那样可以在包含它们的函数外访问，块作用域变量在包含它们的块或for循环之外是不能访问的。

 * @param input
 * @returns {any}
 */
function f0(input:boolean) {
    let a = 100;

    if (input) {
        // Still okay to reference 'a'
        let b = a + 1;
        return b;
    }

    // Error: 'b' doesn't exist here
    // return b;
}

/**
 * catch语句里声明的变量也具有同样的block作用域规则。
 *
 */
try {
    throw "oh no!";
}
catch (e) {
    console.log("Oh well.");
}

// Error: 'e' doesn't exist here
// console.log(e);

/**
 * 拥有块级作用域的变量的另一个特点是，它们不能在被声明之前读或写。
 * @returns {any}
 */

function foo() {
    // okay to capture 'a'
    return a;
}

// 不能在'a'被声明前调用'foo'
// 运行时应该抛出错误
foo();

let a;

/**
 * 不能重复定义
 */
function f3() {
    let x = 10;
    // let x=20;//报错,redeclare

    if (true) {
        // var x;//报错,redeclare
    }
}
function f(x) {
    // let x = 100; // error: interferes with parameter declaration
}

function g() {
    let x = 100;
    // var x = 100; // error: can't have both declarations of 'x'
}


/**
 * 在一个嵌套作用域里引入一个新名字的行为称做屏蔽。 它是一把双刃剑，它可能会不小心地引入新问题，同时也可能会解决一些错误。
 * @param condition
 * @param x
 * @returns {any}
 */
function f5(condition, x) {
    if (condition) {
        let x = 100;//屏蔽
        return x;
    }

    return x;
}

f5(false, 0); // returns 0
f5(true, 0);  // returns 100

/**
 *
 * @param matrix
 * @returns {number}
 */
function sumMatrix2(matrix:number[][]) {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        var currentRow = matrix[i];
        for (let i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
        }
    }

    return sum;
}
console.info(sumMatrix2([[1, 2, 3], [5, 6, 7]]) + "sumMatrix2");


/**
 * 块级作用域变量的获取

 在我们最初谈及获取用var声明的变量时，我们简略地探究了一下在获取到了变量之后它的行为是怎样的。
 直观地讲，每次进入一个作用域时，它创建了一个变量的 环境。
 就算作用域内代码已经执行完毕，这个环境与其捕获的变量依然存在。
 在city的环境里获取到了city，所以就算if语句执行结束后我们仍然可以访问它。
 * @returns {any}
 */

function theCityThatAlwaysSleeps() {
    let getCity;

    if (true) {
        let city = "Seattle";
        getCity = function () {
            return city;
        }
    }

    return getCity();
}
console.info(theCityThatAlwaysSleeps());


/**
 * const 声明
 * 它们与let声明相似，但是就像它的名字所表达的，它们被赋值后不能再改变。
 * 换句话说，它们拥有与 let相同的作用域规则，但是不能对它们重新赋值。
 * 使用最小特权原则，所有变量除了你计划去修改的都应该使用const。
 * @type {number}
 */
function fun8() {
    const numLivesForCat = 9;
    const kitty = {
        name: "Aurora",
        numLives: numLivesForCat,
    }

// Error
// kitty = {
//     name: "Danielle",
//     numLives: numLivesForCat
// };

// all "okay"
    kitty.name = "Rory";
    kitty.name = "Kitty";
    kitty.name = "Cat";
    kitty.numLives--;
}

/**
 * 解构数组
 */
function fun9() {
    console.log("*****************");
    let input = [1, 2];
    let [first, second] = input;
    console.log(first); // outputs 1
    console.log(second); // outputs 2
}
fun9();

/**
 * 解构数组2
 * @param first
 * @param second
 */
function fun10([first, second]: [number, number]) {
    console.log("*****************");
    console.log(first);
    console.log(second);
}
fun10([3, 4]);


/**
 *  解构数组3
 * 使用...name语法创建一个剩余变量列表：
 */

function fun11() {
    console.log("*****************");
    let [first, ...rest] = [1, 2, 3, 4];
    console.log(first); // outputs 1
    console.log(rest); // outputs [ 2, 3, 4 ]
}
fun11();


/**
 *  解构数组4
 *  你可以忽略你不关心的元素
 */
function fun12() {
    console.log("*****************");
    let [first] = [1, 2, 3, 4];
    console.log(first); // outputs 1
    console.log("*****************");
    let [, second, , fourth] = [1, 2, 3, 4];
    console.log(second); // outputs 2
    console.log(fourth); // outputs 4
}
fun12();


/**
 * 解构对象
 */
function fun13() {
    console.log("*****************解构对象");
    let o = {
        a: "foo",
        b: 12,
        c: "bar"
    }
    let {a, b} = o;//解构对象
    console.info(a);//foo
    console.info(b);//12


    console.log("*****************别名解构");
    let o = {
        a: "foo",
        b: 12,
        c: "bar"
    }
    let {a:aNewName, b:bNewName} = o;//解构对象,别名解构
    console.info(aNewName);//foo
    console.info(bNewName);//12


    console.log("*****************类型解构");
    let o1 = {
        a1: "foo",
        b1: 12,
        c1: "bar"
    }
    let {a1, b1}: {a1:string, b1:string} = o1;//解构对象,带类型的解构
    console.info(a1);//foo
    console.info(b1);//12


    console.log("*****************直接赋值");
    ({a, b} = {a: "baz", b: 101});//没有声明的赋值
    console.info(a);//baz
    console.info(b);//101
}
fun13();



/**
 * 默认值

 默认值可以让你在属性为 undefined 时使用缺省值：
 */
function keepWholeObject(wholeObject:{a:string, b?:number}) {
    console.log("*****************默认值");
    let {a, b = 1001} = wholeObject;
    console.info(a);
    console.info(b);
}
keepWholeObject({a:'zhangsan'});

/**
 * 函数入参可以,解构对象
 */

type C = {a: string, b?: number}
function fun14({a, b}: C): void {
    console.info(a);
    console.info(b);
}
fun14({a:'lisi'})



/**
 * 函数中的解构对象,简单
 */
function fund1({a,b}){
    console.log("*****************");
    console.info(a);
    console.info(b);
}
fund1({a:'zhangsan',b:'lisi'});
/**
 * 函数中的解构对象,类型
 */
function fund2({a,b}:{a:string,b:string} ){
    console.log("*****************");
    console.info(a);
    console.info(b);
}
fund2({a:'zhangsan',b:'lisi'});


/**
 * 函数中的解构对象,类型抽取
 */
type T1={a:string,b:string};
function fund3({a,b}: T1){
    console.log("*****************");
    console.info(a);
    console.info(b);
}
fund3({a:'zhangsan',b:'lisi'});


/**
 * 函数中的解构对象,对象抽取
 */
function fund4(obj: T1){
    console.log("*****************");
    console.info(obj.a);
    console.info(obj.b);
}
fund4({a:'zhangsan',b:'lisi'});

/**
 * 函数中的解构对象,别名
 */
function fund5({a:aNewName,b:bNewName}){
    console.log("*****************");
    console.info(aNewName);
    console.info(bNewName);

}
fund5({a:'zhangsan',b:'lisi'});



/**
 * 函数中的解构对象,别名+类型
 */
function fund6({a:aNewName,b:bNewName}:{a:string,b:string}){
    console.log("*****************");
    console.info(aNewName);
    console.info(bNewName);
}
fund6({a:'zhangsan',b:'lisi'});


/**
 * 函数中的解构对象,别名+类型+可选参数
 */
function fund7({a:aNewName,b:bNewName}:{a:string,b?:string}){
    console.log("*****************");
    console.info(aNewName);
    console.info(bNewName);
}
fund7({a:'zhangsan'});


/**
 * 函数中的解构对象,别名+默认值
 */
function fund8({a, b} = {a: "", b: 0}){
    console.log("*****************");
    console.info(a);
    console.info(b);
}
fund8({a:'zhangsan',b:12});
//解构表达式要尽量保持小而简单。 你自己也可以直接使用解构将会生成的赋值表达式。



