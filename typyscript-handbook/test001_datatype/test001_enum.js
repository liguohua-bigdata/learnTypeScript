/**
 * Created by liguohua on 16/9/12.
 */
function testEnum() {
    //1.枚举默认从0开始,但可以指定开始值,后续值依次+1
    var Direction;
    (function (Direction) {
        Direction[Direction["Up"] = 1] = "Up";
        Direction[Direction["Down"] = 2] = "Down";
        Direction[Direction["Left"] = 3] = "Left";
        Direction[Direction["Right"] = 4] = "Right";
    })(Direction || (Direction = {}));
    var d = Direction.Right;
    console.info(d);
    var FileAccess;
    (function (FileAccess) {
        // constant members
        FileAccess[FileAccess["Read"] = 2] = "Read";
        FileAccess[FileAccess["Write"] = 4] = "Write";
        FileAccess[FileAccess["ReadWrite"] = 6] = "ReadWrite";
        // computed member
        FileAccess[FileAccess["g"] = "123".length] = "g";
    })(FileAccess || (FileAccess = {}));
    console.info(FileAccess.ReadWrite);
    console.info(FileAccess.g);
}
testEnum();
//# sourceMappingURL=test001_enum.js.map