import BaseGenerator from "./BaseGenerator.js";

export default class Counter extends BaseGenerator{
private milliPerPixConst:number;

constructor(aniData,argsForAlgo:{}={}){
    super(aniData,argsForAlgo);
// this.    
this.milliPerPixConst = this.milliPerPix();    
}

animate(attributeToAnimateData:number,
    currentSecondMilli:number,
    readOnlyElementData:{}={}):number{
//--------------------------------
/**chq if time is valid */
if (this.isTimeValid(currentSecondMilli)===false){
 throw new Error("The current Time is before than the starting time OR after the finish point of the animation");
}
//--------------------------------
       
const timeDifferenceInMilli = this.currentTimeDifferenceInMilli(currentSecondMilli);

const preAns = (timeDifferenceInMilli / this.milliPerPixConst );
let ans = 0;

if(this.argsForAlgo.from < this.argsForAlgo.to ){
    ans = (timeDifferenceInMilli / this.milliPerPixConst ) + this.argsForAlgo.from;

}else{
    ans = (timeDifferenceInMilli / this.milliPerPixConst ) - this.argsForAlgo.from;
}
return Math.abs((Number(ans.toFixed(0)))); 
//if (ans < 1){return 1;}else {return ans;}
//--------------------------------
}

milliPerPix(){
    const timeDiff = (this.toSecond - this.fromSecond);
const totalValueDiff = Math.abs((this.argsForAlgo.to - this.argsForAlgo.from));
//consider using Math.ceil here
const ans = Number((timeDiff/totalValueDiff).toFixed(0));  
if (ans < 1){return 1;}else {return ans;}

}

currentTimeDifferenceInMilli(currentSecondMilli:number){
return Math.abs(Number(currentSecondMilli - this.fromSecond));   
}
//-------------------------------------------------------------    

isTimeValid(currentSecondMilli:number){
    if( (currentSecondMilli > this.toSecond)
    || 
    (currentSecondMilli < this.fromSecond)){
        return false;
    }else{
        return true;
    }
}
//-------------------------------------------------------------    
}
