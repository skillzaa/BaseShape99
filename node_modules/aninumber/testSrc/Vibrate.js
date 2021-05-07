
const BaseGenerator = require("./BaseGenerator.js");
module.exports =  class Vibrate extends BaseGenerator {
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
        const timeGap = this.argsForAlgo.timeGap;
        const deviation = this.argsForAlgo.deviation;
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