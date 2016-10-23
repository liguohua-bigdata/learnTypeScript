namespace  template {
    /**
     * TypeScript里的类型兼容性是基于结构子类型的。 结构类型是一种只使用其成员来描述类型的方式。
     * 它正好与名义（nominal）类型形成对比。（译者注：在基于名义类型的类型系统中，
     * 数据类型的兼容性或等价性是通过明确的声明和/或类型的名称来决定的。
     * 这与结构性类型系统不同，它是基于类型的组成结构，且不要求明确地声明。）
     */
    console.info("######################001");
    {
        interface Named {
            name:string;
        }

        class Person {
            name:string;
        }

        let p:Named;
        // OK, because of structural typing
        p = new Person();
        p.name="zhagnsan";
        console.info(p);
        /**
         * 在使用基于名义类型的语言，比如C#或Java中，这段代码会报错，因为Person类没有明确说明其实现了Named接口。
         */
    }

    /**
     * TypeScript结构化类型系统的基本规则是，如果x要兼容y，那么y至少具有与x相同的属性
     */
    console.info("######################002");
    {
        {
            interface Named {
                name: string;
            }

            let x: Named;
            // y's inferred type is { name: string; location: string; }
            let y = { name: 'Alice', location: 'Seattle' };
            x = y;
            console.info(x);
            console.info(x.name);
            //console.info(x.location);//虽然报错,但能取值
        }
        {
            //类型
            interface Named {
                name: string;
            }
            //方法
            function greet(n: Named) {
                console.info('Hello, ' + n.name);
            }
            //调用测试
            let y = { name: 'Alice', location: 'Seattle' };
            greet(y); // OK,y有个额外的location属性，但这不会引发错误。 只有目标类型（这里是 Named）的成员会被一一检查是否兼容。
        }
    }
    console.info("######################001");
    {
        let x = (a: number) => 0;
        let y = (b: number, s: string) => 0;

        y = x; // OK
        // x = y; // Error.与属性不同
    }
    console.info("######################001");
    {
        //类型系统强制源函数的返回值类型必须是目标函数返回值类型的子类型。
        let x = () => ({name: 'Alice'});
        let y = () => ({name: 'Alice', location: 'Seattle'});

        x = y; // OK
        // y = x; // Error because x() lacks a location property


    }
    console.info("######################001");
    {

    }
    console.info("######################001");
    {

    }
    console.info("######################001");
    {

    }
    console.info("######################001");
    {

    }
    console.info("######################001");
    {

    }
    console.info("######################001");
    {

    }
    console.info("######################001");
    {

    }
    console.info("######################001");
    {

    }
    console.info("######################001");
    {

    }
    console.info("######################001");
    {

    }
    console.info("######################001");
    {

    }
}
