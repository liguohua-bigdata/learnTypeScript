/**
 * Created by liguohua on 16/9/12.
 */
/**
 * 此方法用于测试基本的数据类型
 */
function testDataType(){
    //1.bool
    var v1:boolean=false;
    console.info(v1);
    //2.number
    var decLiteral: number = 6;
    console.info(decLiteral);
    var hexLiteral: number = 0x9837abdef;
    console.info(hexLiteral);
    var binaryLiteral: number = 0b0010;
    console.info(binaryLiteral);
    var octalLiteral: number = 0o74563;
    console.info(octalLiteral);
    //3.string
    var name: string = "bob";
    console.info(name);
    name = 'smith';
    console.info(name);
    //你也可以使用 模板字符串，他能支持多行文本和内嵌表达式。这些字符串使用单引号(`)包围，并且嵌入的表达式使用${ expr }这样的形式表示。
    var age: number = 37;
    var sentence: string = `Hello, my name is ${ name }.
                            I'll be ${ age + 1 } years old 
                            next month.`
    console.info(sentence);
    //与上面等价
     sentence = "Hello, my name is " + name + ".\n\n" +
                 "I'll be " + (age + 1) + " years old" + ".\n\n" +
                 " next month."
    console.info(sentence);

    //4.数组(两种定义方法)
    var list1: number[] = [1, 2, 3];
    console.info(list1);
    var list2: Array<number> = [1, 2, 3];
    console.info(list2);

    //5.元组
    var stu: [string, number];
    stu = ['hello', 10]; // 准确
    console.info(stu);
    console.log(stu[0].toUpperCase());

    //6.枚举
    enum Color {Red, Green, Blue};
    var c: Color = Color.Green;
    console.info(c);

    //7.任意类型
    var notSure: any = 4;
    console.info(notSure);
    notSure = "maybe a string instead";
    console.info(notSure);
    notSure = false;
    console.info(notSure);

    //8.空类型
    //void就像any的相反面：void就是没有，any就是所有。没有返回值的函数就可以认为是'void'类型：
    var unusable: void = undefined;
    console.info(unusable);




}
testDataType();