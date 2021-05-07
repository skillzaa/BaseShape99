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

const val = new Validator();
class ArrayOfObjects {
    constructor() {
        this.data = [];
    }
    add(name, value = "") {
        val.isString(name, true, "The name is compulsary and should be of type string");
        if (this.isUnique(name) === true) {
            const a = {};
            a.name = name;
            a.value = value;
            this.data.push(a);
            return a;
        }
        else {
            throw new Error(`Please Provide a unique and valid string name for the object. The name ::${name} already exists`);
        }
    }
    isUnique(name) {
        if (typeof name == "undefined") {
            return false;
        }
        let uniqueOrNot = true;
        for (let idx = 0; idx < this.data.length; idx++) {
            const element = this.data[idx];
            if (element.name === name) {
                uniqueOrNot = false;
            }
        }
        return uniqueOrNot;
    }
    get length() {
        return this.data.length;
    }
    getItem(name) {
        val.isString(name, true, "The name should be of type string");
        for (let idx = 0; idx < this.data.length; idx++) {
            if (this.data[idx].name === name) {
                return this.data[idx];
            }
        }
        return false;
    } //.....................
    getAttr(name, field = "value") {
        val.isString(name, true, "The name should be of type string");
        for (let idx = 0; idx < this.data.length; idx++) {
            const thisName = this.data[idx].name;
            if (thisName == name) {
                return this.data[idx][field];
            }
        }
        return false;
    }
    setAttr(name, value, field = "value") {
        val.isString(name, true, "The name should be of type string");
        for (let idx = 0; idx < this.data.length; idx++) {
            if (this.data[idx].name == name) {
                this.data[idx][field] = value;
                return this.data[idx][field];
            }
        }
        return true;
    } //......
    getObjectsByName(argumentsRequired = []) {
        const ret = [];
        this.data.forEach(bd => {
            argumentsRequired.forEach(ag => {
                if (ag == bd.name) {
                    ret.push(bd);
                }
            });
        });
        return ret;
    }
    getItemsByNames(argumentsRequired = []) {
        const ret = [];
        this.data.forEach(bd => {
            argumentsRequired.forEach(ag => {
                if (ag == bd.name) {
                    ret.push(bd);
                }
            });
        });
        return ret;
    }
}

module.exports = ArrayOfObjects;
