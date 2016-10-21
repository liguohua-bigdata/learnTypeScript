/**
 * Created by liguohua on 16/10/10.
 */
/**
 * 作为对象方法调用
 在 JavaScript 中，函数也是对象，因此函数可以作为一个对象的属性，此时该函数被称为该对象的方法，在使用这种调用方式时，this 被自然绑定到该对象。
 */
var point = {
    x : 0,
    y : 0,
    moveTo : function(x, y) {
        this.x = this.x + x;
        this.y = this.y + y;
    }
};

point.moveTo(1, 1)//this 绑定到当前对象，即 point 对象