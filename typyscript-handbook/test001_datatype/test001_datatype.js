/**
 * Created by liguohua on 16/9/12.
 */
/**
 * 此方法用于测试基本的数据类型
 */
function testDataType() {
    //1.bool
    var v1 = false;
    console.info(v1);
    //2.number
    var decLiteral = 6;
    console.info(decLiteral);
    var hexLiteral = 0x9837abdef;
    console.info(hexLiteral);
    var binaryLiteral = 2;
    console.info(binaryLiteral);
    var octalLiteral = 31091;
    console.info(octalLiteral);
    //3.string
    var name = "bob";
    console.info(name);
    name = 'smith';
    console.info(name);
    //你也可以使用 模板字符串，他能支持多行文本和内嵌表达式。这些字符串使用单引号(`)包围，并且嵌入的表达式使用${ expr }这样的形式表示。
    var age = 37;
    var sentence = "Hello, my name is " + name + ".\n                            I'll be " + (age + 1) + " years old \n                            next month.";
    console.info(sentence);
    //与上面等价
    sentence = "Hello, my name is " + name + ".\n\n" +
        "I'll be " + (age + 1) + " years old" + ".\n\n" +
        " next month.";
    console.info(sentence);
    //4.数组(两种定义方法)
    var list1 = [1, 2, 3];
    console.info(list1);
    var list2 = [1, 2, 3];
    console.info(list2);
    //5.元组
    var stu;
    stu = ['hello', 10]; // 准确
    console.info(stu);
    console.log(stu[0].toUpperCase());
    //6.枚举
    var Color;
    (function (Color) {
        Color[Color["Red"] = 0] = "Red";
        Color[Color["Green"] = 1] = "Green";
        Color[Color["Blue"] = 2] = "Blue";
    })(Color || (Color = {}));
    ;
    var c = Color.Green;
    console.info(c);
    //7.任意类型
    var notSure = 4;
    console.info(notSure);
    notSure = "maybe a string instead";
    console.info(notSure);
    notSure = false;
    console.info(notSure);
    //8.空类型
    //void就像any的相反面：void就是没有，any就是所有。没有返回值的函数就可以认为是'void'类型：
    var unusable = undefined;
    console.info(unusable);
}
testDataType();
//# sourceMappingURL=test001_datatype.js.map