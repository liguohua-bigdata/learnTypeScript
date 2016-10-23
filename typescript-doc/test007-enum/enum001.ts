/**
 * Created by liguohua on 2016/10/23.
 */
namespace enum007 {
    /**
     * 使用枚举我们可以定义一些有名字的数字常量。 枚举通过 enum关键字来定义。
     * 枚举内的元素,以此加一,
     * 开头可以指定
     * 枚举成员被当作是常数
     * 一个枚举类型可以包含零个或多个枚举成员
     */
    console.info("######################001");
    {
        enum Direction {
            Up = 1,
            Down,
            Left,
            Right
        }
        var d = Direction.Left;
        console.info(d);
    }
    /**
     * 枚举成员的值可以是计算得到
     */
    console.info("######################002");
    {
        enum FileAccess {
            // constant members
            None,
            Read = 1 << 1,
            Write = 1 << 2,
            // computed member
            ReadWrite = Read | Write,
            // computed member
            G = "123".length
        }
        console.info(FileAccess.ReadWrite)
        console.info(FileAccess.G)
    }
    /**
     *  当访问枚举值时，为了避免生成多余的代码和间接引用，可以使用常数枚举。
     *  常数枚举是在 enum关键字前使用const修饰符。
     *  常数枚举只能使用常数枚举表达式并且不同于常规的枚举的是它们在编译阶段会被删除。
     */
    console.info("######################003");
    {
        const enum Enum {
            A = 1,
            B = A * 88
        }
        console.info(Enum.B)
    }
    /**
     * 外部枚举用来描述已经存在的枚举类型的形状
     * 外部枚举和非外部枚举之间有一个重要的区别，在正常的枚举里，没有初始化方法的成员被当成常数成员。
     * 对于非常数的外部枚举而言，没有初始化方法时被当做需要经过计算的。
     */
    console.info("######################001");
    {
        /**
         declare enum Enum {
             A = 1,
             B,
             C = 2
         }
         console.info(Enum.B)
         */
    }
}