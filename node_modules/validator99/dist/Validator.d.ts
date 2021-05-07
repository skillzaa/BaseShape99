export default class Validator {
    constructor();
    isNumber(no: number, shout?: boolean, message?: string): boolean;
    isInteger(no: number, shout?: boolean, message?: string): boolean;
    isSmaller(smaller: number, bigger: number, shout?: boolean, message?: string): boolean;
    wholeNumber(no: number, shout?: boolean): number;
    isString(str: string, shout?: boolean, message?: string): boolean;
    isBoolean(b: boolean, shout?: boolean, message?: string): boolean;
    isSNB(snb: string | number | boolean, shout?: boolean, message?: string): boolean;
}
