/**
 * Created by liguohua on 16/9/14.
 */
//1.定义模块
module  Validation {
    export interface StringValidator {
        isAcceptable(s:string):boolean;
    }

    var lettersRegexp = /^[A-Za-z]+$/;
    var numberRegexp = /^[0-9]+$/;

    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s:string) {
            return lettersRegexp.test(s);
        }
    }

    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s:string) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
}
//2.使用模块
// Some samples to try
var strings = ['Hello', '98052', '101'];
// Validators to use
var validators:{ [s:string]:Validation.StringValidator; } = {};
validators['ZIP code'] = new Validation.ZipCodeValidator();
validators['Letters only'] = new Validation.LettersOnlyValidator();
// Show whether each string passed each validator
strings.forEach(s => {
    for (var name in validators) {
        console.log('"' + s + '" ' + (validators[name].isAcceptable(s) ? ' matches ' : ' does not match ') + name);
    }
});
