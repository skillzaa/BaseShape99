'use strict';

/**
 * 1--every objects must have a unique "name"  field
 * 2--every OBJECT MUST HAVE "value" field.
 */
// const IItem = require("IItem");
class ArrayOfObjects {
    constructor() {
        this.data = [];
    }
add(name) {
    if (this.isUnique(name) === true) {
        const a = {};
        a.name = name;
        this.data.push(a);
        return a;
    }
    else {
        throw new Error("Please Provide a unique and valid string name for the object");
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
    for (let idx = 0; idx < this.data.length; idx++) {
        if (this.data[idx].name === name) {
            return this.data[idx];
        }
    }
    return false;
} //.....................
getProperty(name, field = "value") {
    for (let idx = 0; idx < this.data.length; idx++) {
        if (this.data[idx].name === name) {
            return this.data[idx][field];
        }
    }
    return false;
}
getAttr(name, field = "value") {
    return this.getProperty(name);
}
setProperty(name, value, field = "value") {
    for (let idx = 0; idx < this.data.length; idx++) {
        if (this.data[idx].name === name) {
            this.data[idx][field] = value;
            return this.data[idx][field];
        }
    }
    return value;
} //
    setAttr(name, value, field = "value") {
        return this.setProperty(name, value);
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
}

module.exports = ArrayOfObjects;
