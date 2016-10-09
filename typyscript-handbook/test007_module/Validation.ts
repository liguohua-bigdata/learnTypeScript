/**
 * Created by liguohua on 16/9/14.
 */
interface StringValidator {
    isAcceptable(s:string):boolean;
}
export=StringValidator;

// "export ="句法可以指定模块要输出的单一对象。这个对象可以是类，接口，模块，函数或枚举类型。每当这个模块被输入时，其输出的东西就可以被直接使用，而不需要再在模块上加上任何名称。