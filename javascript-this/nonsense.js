/**
 * Created by liguohua on 16/10/10.
 */
/**
 * 作为函数调用
 函数也可以直接被调用，此时 this 绑定到全局对象。在浏览器中，window 就是该全局对象。
 * @param x
 */
function makeNoSense(x) {
    this.x = x;
}

makeNoSense(5);
x;// x 已经成为一个值为 5 的全局变量