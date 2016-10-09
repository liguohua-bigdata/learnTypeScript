/**
 * Created by liguohua on 16/9/14.
 */
/// <reference path="Validation.ts" />

module Validation {
    var numberRegexp = /^[0-9]+$/;
    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
}