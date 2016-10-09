/**
 * Created by liguohua on 16/10/9.
 */
function f() {
    var a = 10;
    return function g() {
        var b = a + 1;
        return b;
    };
}
var g = f();
console.info(g);
console.info(g()); //returns 11
//# sourceMappingURL=let001.js.map