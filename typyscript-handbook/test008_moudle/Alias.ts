/**
 * Created by liguohua on 16/9/14.
 */
module Shapes {
    export module Polygons {
        export class Triangle {
        }
        export class Square {
        }

    }
    //注意这里我们没有使用require关键字，而是import的右侧赋值为我们导入对象的限定名。
    import polygons=Shapes.Polygons;
    import sq0=polygons.Square;
    // // Same as 'new Shapes.Polygons.Square()'
    var sq1=new sq0();
    //

}
export =Shapes;