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

class BaseGenerator {
    constructor(aniData, argsForAlgo = {}) {
        //this.aniData = aniData;
        this.attributeToAnimateName = aniData.attributeToAnimateName; //must 
        this.fromSecond = aniData.fromSecond * 1000; //must for every animation
        this.toSecond = aniData.toSecond * 1000; //must for every animation
        this.readOnlyElementAttrNames = aniData.readOnlyElementAttrNames;
        //--------------------------------------------------------------------
        this.argsForAlgo = argsForAlgo;
        //--------------------------------------------------------------------
        this.fps = 60; // this has to be settled
        this.state = {}; ///every new data goes here
    }
    animate(attributeToAnimateData, currentSecondMilli, readOnlyElementData = {}) {
        return true;
    }
}

class Counter extends BaseGenerator {
    constructor(aniData, argsForAlgo = {}) {
        super(aniData, argsForAlgo);
        // this.    
        this.milliPerPixConst = this.milliPerPix();
    }
    animate(attributeToAnimateData, currentSecondMilli, readOnlyElementData = {}) {
        //--------------------------------
        /**chq if time is valid */
        if (this.isTimeValid(currentSecondMilli) === false) {
            throw new Error("The current Time is before than the starting time OR after the finish point of the animation");
        }
        //--------------------------------
        const timeDifferenceInMilli = this.currentTimeDifferenceInMilli(currentSecondMilli);
        (timeDifferenceInMilli / this.milliPerPixConst);
        let ans = 0;
        if (this.argsForAlgo.from < this.argsForAlgo.to) {
            ans = (timeDifferenceInMilli / this.milliPerPixConst) + this.argsForAlgo.from;
        }
        else {
            ans = (timeDifferenceInMilli / this.milliPerPixConst) - this.argsForAlgo.from;
        }
        return Math.abs((Number(ans.toFixed(0))));
        //if (ans < 1){return 1;}else {return ans;}
        //--------------------------------
    }
    milliPerPix() {
        const timeDiff = (this.toSecond - this.fromSecond);
        const totalValueDiff = Math.abs((this.argsForAlgo.to - this.argsForAlgo.from));
        //consider using Math.ceil here
        const ans = Number((timeDiff / totalValueDiff).toFixed(0));
        if (ans < 1) {
            return 1;
        }
        else {
            return ans;
        }
    }
    currentTimeDifferenceInMilli(currentSecondMilli) {
        return Math.abs(Number(currentSecondMilli - this.fromSecond));
    }
    //-------------------------------------------------------------    
    isTimeValid(currentSecondMilli) {
        if ((currentSecondMilli > this.toSecond)
            ||
                (currentSecondMilli < this.fromSecond)) {
            return false;
        }
        else {
            return true;
        }
    }
}

class RandomColors extends BaseGenerator {
    constructor(aniData, argsForAlgo = {}) {
        super(aniData, argsForAlgo);
        this.state.previous = 0;
    }
    animate(attributeToAnimateData, currentSecond, readOnlyElementData = {}) {
        if (this.state.previous == 0) {
            this.state.previous = Date.now();
        }
        if (this.isWaitOver() == true) {
            this.state.previous = Date.now();
            return this.returnColor();
        }
        else {
            return attributeToAnimateData;
        }
    }
    //-------------------------------------------------------------    
    isWaitOver() {
        const lapsedTime = Math.abs(Date.now() - this.state.previous);
        if (lapsedTime > this.argsForAlgo.timeGap) {
            return true;
        }
        else {
            return false;
        }
    }
    //-------------------------------------------------------------   
    returnColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}

class Vibrate extends BaseGenerator {
    constructor(aniData, argsForAlgo = {}) {
        super(aniData, argsForAlgo);
        this.state.previous = 0;
        //this.state.previous = 0;
    }
    animate(attributeToAnimateData, currentSecond, readOnlyElementData = {}) {
        /////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////
        if (this.state.previous == 0) {
            this.state.previous = Date.now();
        }
        this.argsForAlgo.timeGap;
        this.argsForAlgo.deviation;
        if (this.isWaitOver() == true) {
            this.state.previous = Date.now();
            return this.manipulate(attributeToAnimateData);
        }
        else {
            return attributeToAnimateData;
        }
        /////////////////////////////////////////////////////////////////////
        /////////////////////////////////////////////////////////////////////
    }
    //-------------------------------------------------------------    
    isWaitOver() {
        const lapsedTime = Math.abs(Date.now() - this.state.previous);
        if (lapsedTime > this.argsForAlgo.timeGap) {
            return true;
        }
        else {
            return false;
        }
    }
    //-------------------------------------------------------------    
    manipulate(incomming) {
        const min = incomming - this.argsForAlgo.deviation;
        const max = incomming + this.argsForAlgo.deviation;
        return Math.abs(Math.random() * (max - min + 1) + min);
    }
}

class Generators {
    constructor() {
        this.data = [];
    }
    addCounter(attributeToAnimateName, fromSecond, toSecond, from, to, readOnlyElementAttrNames = []) {
        if (fromSecond > toSecond) {
            throw new Error("From second can not be bigger than to second.");
        }
        const aniData = {
            attributeToAnimateName: attributeToAnimateName,
            fromSecond: fromSecond,
            toSecond: toSecond,
            readOnlyElementAttrNames: readOnlyElementAttrNames
        };
        const argsForAlgo = { from: from, to: to };
        const a = new Counter(aniData, argsForAlgo);
        this.data.push(a);
        return a;
    }
    addVibrate(attributeToAnimateName, fromSecond, toSecond, timeGap, deviation, readOnlyElementAttrNames = []) {
        const aniData = {
            attributeToAnimateName: attributeToAnimateName,
            fromSecond: fromSecond,
            toSecond: toSecond,
            readOnlyElementAttrNames: readOnlyElementAttrNames
        };
        const argsForAlgo = { timeGap: timeGap, deviation: deviation };
        const a = new Vibrate(aniData, argsForAlgo);
        this.data.push(a);
        return a;
    }
    addRandomColors(attributeToAnimateName, fromSecond, toSecond, readOnlyElementAttrNames = []) {
        const aniData = {
            attributeToAnimateName: attributeToAnimateName,
            fromSecond: fromSecond,
            toSecond: toSecond,
            readOnlyElementAttrNames: readOnlyElementAttrNames
        };
        const a = new RandomColors(aniData, {});
        this.data.push(a);
        return a;
    }
}

class BaseShape {
    constructor(name) {
        this.attributes = getBaseAttributes(name);
        this.animations = [];
        this.generators = new Generators();
    }
    preUpdate() { }
    postUpdate() { }
    update(currentSecondMilli) {
        //==================LLLLLOOOOPPPPP======================== 
        this.animations.forEach(animation => {
            //----STEP 1 -- GET DATA FROM ATTRIBUTES COLLECTION
            //filter out not relavant seq here
            if ((currentSecondMilli >= animation.fromSecond)
                &&
                    (currentSecondMilli <= animation.toSecond)) {
                //----STEP 2 -- GET DATA FROM ATTRIBUTES COLLECTION
                //---get item by name since its one item --a string
                const attributeToAnimateValue = this.attributes.getItem(animation.attributeToAnimateName).value;
                const readOnlyElementData = this.attributes.getItemsByNames(animation.readOnlyElementAttrNames);
                //----STEP 3 -- Animate the data
                const retValue = animation.animate(attributeToAnimateValue, currentSecondMilli, readOnlyElementData); //wofffffff
                //----STEP 4 -- SAVE ATTRIBUTES
                this.attributes.setAttr(animation.attributeToAnimateName, retValue);
            } /////--filter no relevant animations
            //========================================== 
        });
        return true;
    }
    preDraw() {
    }
    draw(metal) {
        //console.log("Base Shape");
    } //draw ends
    postDraw() {
    }
    setAttr(attrName, attrValue) {
        return Number(this.attributes.setAttr(attrName, attrValue));
    }
    getAttr(attrName) {
        return (this.attributes.getAttr(attrName));
    }
    ////////////////////////////////---Animations---/////
    moveHorizontal(fromSecond = 1, toSecond = 5, from = 1, to = 100) {
        const l = this.generators.addCounter("x", fromSecond, toSecond, from, to);
        this.animations.push(l);
        return l;
    }
    // //---------------------------------
    moveVerticle(fromSecond = 1, toSecond = 5, fromY = 1, toY = 100) {
        const l = this.generators.addCounter("y", fromSecond, toSecond, fromY, toY);
        this.animations.push(l);
        return l;
    }
    // //---------------------------------
    moveDiagonal(fromSecond = 1, toSecond = 5, fromX = 1, toX = 100, fromY = 1, toY = 100) {
        const lX = this.generators.addCounter("x", fromSecond, toSecond, fromX, toX);
        this.animations.push(lX);
        const ly = this.generators.addCounter("y", fromSecond, toSecond, fromY, toY);
        this.animations.push(ly);
        return true;
    }
    simpleCounter(attribToAnimate = "x", fromSecond = 1, toSecond = 10, from = 100, to = 200) {
        const w = this.generators.addCounter(attribToAnimate, fromSecond, toSecond, from, to, []);
        this.animations.push(w);
        return w;
    }
    widen(fromSecond = 1, toSecond = 10, from = 100, to = 200) {
        return this.simpleCounter("width", fromSecond, toSecond, from, to);
    }
    heighten(fromSecond = 1, toSecond = 10, from = 100, to = 200) {
        return this.simpleCounter("height", fromSecond, toSecond, from, to);
    }
    scale(fromSecond, toSecond, fromWidth, toWidth, fromHeight, toHeight) {
        this.simpleCounter("width", fromSecond, toSecond, fromWidth, toWidth);
        //----------------------------
        this.simpleCounter("height", fromSecond, toSecond, fromHeight, toHeight);
        return true;
    }
    rotate(fromSecond = 1, toSecond = 5, from = 1, to = 100) {
        const w = this.simpleCounter("currentRotateAngle", fromSecond, toSecond, from, to);
        return w;
    }
}
//==========================================================
//==========================================================
//==========================================================
function getBaseAttributes(name) {
    const attributes = new ArrayOfObjects();
    //--The name--
    attributes.add(name, name);
    //--x,y,width,height--
    attributes.add("x", 100);
    attributes.add("y", 100);
    attributes.add("width", 100);
    attributes.add("height", 100);
    //--rotation--
    attributes.add("rotateClockwise", true);
    //---the angle at which);the obj is currently rotated--this is also rpm / rps
    attributes.add("currentRotateAngle", 0);
    //--colors--
    attributes.add("color", "green");
    attributes.add("opacity", 1); //----------???? transparency
    /**this just became border */
    attributes.add("lineWidth", 5); //----------???? transparency
    /**there is no strokeStyle since the color is fillStyle as well as strokeStyle since we have border feature coming later so we do not need this confusion now */
    //attributes.add({ name: "strokeStyle", value: "#F0000" });
    //--shadows--
    attributes.add("shadowColor", "grey");
    attributes.add("shadowBlur", 0);
    attributes.add("shadowOffsetX", 0);
    attributes.add("shadowOffsetY", 0);
    // if filled draw filled if not draw border only
    attributes.add("filled", true);
    attributes.add("lineDashSize", 1);
    attributes.add("lineDashGap", 0);
    attributes.add("drawBoundingRectangle", true);
    attributes.add("boundingRectangleColor", "red");
    attributes.add("boundingRectanglePadding", 20);
    //--20 items
    return attributes;
}
//====================================================
// export default getBaseAttributes;

module.exports = BaseShape;
