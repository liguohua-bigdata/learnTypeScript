/**
 * Created by liguohua on 16/9/14.
 */
module Validation {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }
}