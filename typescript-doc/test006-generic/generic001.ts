/**
 * Created by liguohua on 16/10/10.
 */
namespace generic001 {
    /**
     * 泛型函数
     * 它可以适用于多个类型。 不同于使用 any，它不会丢失信息，
     */
    //定义一个泛型函数
    function identity<T>(arg:T):T {
        return arg;
    }

    //调用泛型函数
    console.info(identity('zhangsan'));
    console.info(identity(18));
    //调用泛型函数
    let output = identity<string>("myString");
    console.info(output);

    // 调用泛型函数,类型推断
    let output2 = identity("myString2");
    console.info(output2);

    // 调用泛型函数,泛型函数的类型
    let myIdentity:<T>(arg:T) => T = identity;
    console.info(myIdentity('zhangsan'));

    // 调用泛型函数,泛型函数的类型
    let myIdentity2: {<T>(arg: T): T} = identity;
    console.info(myIdentity2('zhangsan'));


    // 调用泛型函数,泛型函数的类型,泛型在接口的函数上
    interface GenericIdentityFn {
        <T>(arg: T): T;
    }
    let myIdentity3: GenericIdentityFn = identity;
    console.info(myIdentity3('zhangsan'));

    // 调用泛型函数,泛型函数的类型,泛型在接口本身上
    interface GenericIdentityFnT <T> {
       (arg: T): T;
    }
    let myIdentity4: GenericIdentityFnT<string> = identity;
    console.info(myIdentity4('zhangsan'));



    // 调用泛型函数,泛型函数的类型,使用不同的变量
    let myIdentity5:<U>(arg:U) => U = identity;
    console.info(myIdentity5('zhangsan'));
    /**
     * 泛型函数,数组一
     * @param arg
     * @returns {T[]}
     */

    function loggingIdentity1<T>(arg:T[]):T[] {
        console.log(arg.length);  // Array has a .length, so no more error
        return arg;
    }

    console.info(loggingIdentity1(['zhangsan', 'lisi', 'wangwu']))
    /**
     * 泛型函数,数组二
     */
    function loggingIdentity2<T>(arg:Array<T>):Array<T> {
        console.log(arg.length);  // Array has a .length, so no more error
        return arg;
    }

    console.info(loggingIdentity2(['zhangsan', 'lisi', 'wangwu']))

}
