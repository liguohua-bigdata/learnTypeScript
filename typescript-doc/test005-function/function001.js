/**
 * Created by liguohua on 16/10/10.
 */
var function001;
(function (function001) {
    /**
     * 函数
     和JavaScript一样，TypeScript函数可以创建有名字的函数和匿名函数。
     */
    // Named function
    function add(x, y) {
        return x + y;
    }
    console.info(add(1, 2));
    // Anonymous function
    var myAdd = function (x, y) {
        return x + y;
    };
    console.info(myAdd(1, 2));
    /**
     * 函数的变量捕获
     * 在JavaScript里，函数可以使用函数体外部的变量。 当函数这么做时，我们说它‘捕获’了这些变量。
     */
    var z = 100;
    function addToZ(x, y) {
        return x + y + z; //捕获外部变量z
    }
    console.info(addToZ(1, 2));
})(function001 || (function001 = {}));
//# sourceMappingURL=function001.js.map