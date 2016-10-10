/**
 * Created by liguohua on 16/9/12.
 */
function testEnum() {
    //1.枚举默认从0开始,但可以指定开始值,后续值依次+1
    enum Direction {
        Up = 1,
        Down,
        Left,
        Right
    }
    var d:Direction = Direction.Right;
    console.info(d);

    enum FileAccess {
        // constant members
        Read = 1 << 1,
        Write = 1 << 2,
        ReadWrite = Read | Write,
        // computed member
        g = "123".length
    }
    console.info(FileAccess.ReadWrite);
    console.info(FileAccess.g);

}
testEnum();


