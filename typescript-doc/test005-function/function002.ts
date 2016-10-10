/**
 * Created by liguohua on 16/10/10.
 */
namespace function002 {
    /**
     * 函数类型
     为函数定义类型,让我们为上面那个函数添加类型：
     * @param x
     * @param y
     * @returns {number}
     */

    // Named function
    function add(x:number, y:number):number {
        return x + y;
    }

    console.info(add(1, 2));

    // Anonymous function
    //从右到左的类型推断
    console.info("*************")
    let myAdd = function (x:number, y:number):number {
        return x + y;
    };
    console.info(myAdd(1, 2));

    // Anonymous function with full type
    //补全类型,原样参数
    console.info("*************")
    let myAdd2:(x:number, y:number)=>number =
        function (x:number, y:number):number {
            return x + y;
        };
    console.info(myAdd2(1, 2));

    // Anonymous function with full type  and chang  parameters name
    //只要参数类型是匹配的，那么就认为它是有效的函数类型，而不在乎参数名是否正确。
    console.info("*************")
    //补全类型,改动参数
    let myAdd3:(baseValue:number, increment:number) => number =
        function (x:number, y:number):number {
            return x + y;
        };
    console.info(myAdd3(1, 2));

    //从左到右的类型推断
    console.info("*************")
    let myAdd4:(baseValue:number, increment:number) => number =
        function (x, y) {
            return x + y;
        };
    console.info(myAdd3(1, 2));

    /**
     *可选参数
     TypeScript里的每个函数参数都是必须的。 简短地说，传递给一个函数的参数个数必须与函数期望的参数个数一致。
     在TypeScript里我们可以在参数名旁使用 ?实现可选参数的功能.
     可选参数必须跟在必须参数后
     */
    console.info("*************")
    function buildName(firstName:string, lastName?:string) {
        if (lastName)
            return firstName + " " + lastName;
        else
            return firstName;
    }

    let result1 = buildName("Bob");  // works correctly now
    console.log(result1);
    // let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
    // console.log(result2);
    let result3 = buildName("Bob", "Adams");  // ah, just right
    console.log(result3);

    /**
     * 默认参数
     * 我们也可以为参数提供一个默认值当用户没有传递这个参数或传递的值是undefined时。 它们叫做有默认初始化值的参数。
     * 在所有必须参数后面的带默认初始化的参数都是可选的，与可选参数一样，在调用函数的时候可以省略。 也就是说可选参数与末尾的默认参数共享参数类型。
     * @param firstName
     * @param lastName
     * @returns {string}
     */    console.info("*************")

    function buildName2(firstName:string, lastName = "Smith") {
        return firstName + " " + lastName;
    }

    let result1x = buildName2("Bob");                  // works correctly now, returns "Bob Smith"
    console.info(result1x);
    let result2x = buildName2("Bob", undefined);       // still works, also returns "Bob Smith"
    console.info(result2x);

    // let result3x = buildName2("Bob", "Adams", "Sr.");  // error, too many parameters
    let result4x = buildName2("Bob", "Adams");         // ah, just right
    console.info(result4x);

    /**
     * 在所有必须参数后面的带默认初始化的参数都是可选的，与可选参数一样，在调用函数的时候可以省略。 也就是说可选参数与末尾的默认参数共享参数类型。

     function buildName(firstName: string, lastName?: string) {  }
     和

     function buildName(firstName: string, lastName = "Smith") { }
     共享同样的类型(firstName: string, lastName?: string) => string。 默认参数的默认值消失了，只保留了它是一个可选参数的信息。
     */

    /**
     *与普通可选参数不同的是，带默认值的参数不需要放在必须参数的后面。
     * 如果带默认值的参数出现在必须参数前面，用户必须明确的传入 undefined值来获得默认值
     */    console.info("*************")


    function buildName3(firstName = "Will", lastName:string) {
        return firstName + " " + lastName;
    }

    // let result31 = buildName3("Bob");                  // error, too few parameters
    // let result32 = buildName3("Bob", "Adams", "Sr.");  // error, too many parameters
    let result33 = buildName3("Bob", "Adams");         // okay and returns "Bob Adams"
    console.info(result33);
    let result34 = buildName3(undefined, "Adams");     // okay and returns "Will Adams"
    console.info(result34);

}