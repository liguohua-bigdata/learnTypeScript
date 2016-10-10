/**
 * Created by liguohua on 16/10/10.
 */
namespace generic003 {
    /**
     * 泛型约束
     */
        //定义约束接口
    interface Lengthwise {
        length:number;
    }
    //使用泛型约束
    function loggingIdentity<T extends Lengthwise>(arg:T):T {
        console.log(arg.length);  // Now we know it has a .length property, so no more error
        return arg;
    }

    //调研函数,必须有约束中的field
    console.info(loggingIdentity({length: 10, value: 3}));


    /**
     * 在泛型里使用类类型
     在TypeScript使用泛型创建工厂函数时，需要引用构造函数的类类型
     */
    //定义工厂方法
    function create<T>(c:{new():T; }):T {
        return new c();
    }

    //使用工厂方法
    class Dog {
        age:number;
        name:string;
    }
    let dog = create(Dog);
    dog.name = 'wang wang';
    dog.age = 2;
    console.info(dog);
    //使用工厂方法
    class Cat {
        name:string;
        age:number;
    }
    let cat:Cat = create(Cat);
    cat.name = 'miao miao';
    cat.age = 2;
    console.info(cat);


    /**
     *一个更高级的例子，使用原型属性推断并约束构造函数与类实例的关系。
     */

    class BeeKeeper {
        hasMask:boolean;
    }

    class ZooKeeper {
        public nametag:string;
    }

    class Animal {
        numLegs:number;
    }

    class Bee extends Animal {
        keeper:BeeKeeper;
    }

    class Lion extends Animal {
        keeper:ZooKeeper;
    }

    function findKeeper<A extends Animal, K>(a:{new():A;prototype:{keeper:K}}):K {
        return a.prototype.keeper;
    }

    // findKeeper(Lion).nametag;  // typechecks!
}
