/**
 * Created by liguohua on 16/10/10.
 */
namespace generic002 {
    /**
     * 泛型类
     泛型类看上去与泛型接口差不多。 泛型类使用（ <>）括起泛型类型，跟在类名后面。
     */
        //定义泛型类
    class GenericNumber<T> {
        zeroValue:T;
        add:(x:T, y:T) => T;
    }
    //创建类的对象
    let myGenericNumber = new GenericNumber<number>();
    //使用类的对象
    myGenericNumber.zeroValue = 0;
    myGenericNumber.add = function (x, y) {
        return x + y;
    };
    console.log(myGenericNumber);

    //创建类的对象
    let stringNumeric = new GenericNumber<string>();
    stringNumeric.zeroValue = "";
    stringNumeric.add = function(x, y) { return x + y; };
    console.info(stringNumeric.add(stringNumeric.zeroValue, "test"));
}
