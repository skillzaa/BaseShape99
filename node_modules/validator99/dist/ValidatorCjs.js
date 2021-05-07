'use strict';

class Validator {
    constructor() {
    } //const
    isNumber(no, shout = false, message = "This is not a Number") {
        //if (data === parseInt(data, 10))
        if ((typeof no) != "number") {
            if (shout === true) {
                throw new Error(message);
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
    }
    isInteger(no, shout = false, message = "This is not an Integer") {
        if (Number.isInteger(no) === false) {
            if (shout === true) {
                throw new Error(message);
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
    }
    isSmaller(smaller, bigger, shout = false, message = "First Number is not smaller than the second number") {
        if (bigger < smaller) {
            if (shout === true) {
                throw new Error(message);
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
    } //fn
    wholeNumber(no, shout = false) {
        this.isNumber(no, shout);
        return Number(Math.round(no));
    }
    isString(str, shout = false, message = "This value is not string") {
        if (typeof str === 'string') {
            return true;
        }
        else if (shout === true) {
            throw new Error(message);
        }
        else {
            return false;
        }
    }
    isBoolean(b, shout = false, message = "This value is not boolean") {
        if (typeof b === 'boolean') {
            return true;
        }
        else if (shout === true) {
            throw new Error(message);
        }
        else {
            return false;
        }
    }
    isSNB(snb, shout = false, message = "This value is not boolean or string or number") {
        const isString = this.isString(snb, false);
        const isBoolean = this.isBoolean(snb, false);
        const isNumber = this.isNumber(snb, false);
        if (isString == false && isBoolean == false && isNumber == false) {
            if (shout === true) {
                throw new Error(message);
            }
            else {
                return false;
            }
        }
        else {
            return true;
        }
    }
} //class

module.exports = Validator;
