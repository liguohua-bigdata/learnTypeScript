"use strict";
/**
 * Created by liguohua on 16/9/14.
 */
var Shapes;
(function (Shapes) {
    var Polygons;
    (function (Polygons) {
        var Triangle = (function () {
            function Triangle() {
            }
            return Triangle;
        }());
        Polygons.Triangle = Triangle;
        var Square = (function () {
            function Square() {
            }
            return Square;
        }());
        Polygons.Square = Square;
    })(Polygons = Shapes.Polygons || (Shapes.Polygons = {}));
    //注意这里我们没有使用require关键字，而是import的右侧赋值为我们导入对象的限定名。
    var polygons = Shapes.Polygons;
    var sq0 = polygons.Square;
    // // Same as 'new Shapes.Polygons.Square()'
    var sq1 = new sq0();
})(Shapes || (Shapes = {}));
module.exports = Shapes;
//# sourceMappingURL=Alias.js.map