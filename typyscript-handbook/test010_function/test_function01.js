/**
 * Created by liguohua on 16/9/14.
 */
//1.一种定义函数的方式
function add(x, y) {
    return x + y;
}
console.info(add("zhangsan", "lishi"));
//2.给函数加上类型
function add0(x, y) {
    return x + y;
}
console.info(add0(1, 1));
// 3.另一种定义函数发方式
var myadd = function (x, y) {
    return x + y;
};
console.info(myadd("zhangsan", "lishi"));
//4.给函数加上类型
var myadd0 = function (x, y) {
    return x + y;
};
console.info(myadd0("zhangsan", "lishi"));
//5.函数可以获取函数外的变量,
var z = 100;
function addToZ(x, y) {
    return x + y + z;
}
console.info(addToZ(1, 1));
//6.可选参数,可选参数必须放在必选参数的后面
function buildName(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
var result1 = buildName("Bob"); //works correctly now
// var result2 = buildName("Bob", "Adams", "Sr.");  //error, too many parameters
var result3 = buildName("Bob", "Adams"); //ah, just right
//7.默认参数,默认参数必须出现在必选参数的后面(可选参数不能有默认值)
function buildName0(firstName, lastName) {
    if (lastName === void 0) { lastName = "Smith"; }
    return firstName + " " + lastName;
}
var result1 = buildName0("Bob"); //works correctly now, also
// var result2 = buildName0("Bob", "Adams", "Sr.");  //error, too many parameters
var result3 = buildName0("Bob", "Adams"); //ah, just right
//8.可选参数列表
function buildName2(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var employeeName = buildName2("Joseph", "Samuel", "Lucas", "MacKinzie");
console.info(employeeName);
//# sourceMappingURL=test_function01.js.map