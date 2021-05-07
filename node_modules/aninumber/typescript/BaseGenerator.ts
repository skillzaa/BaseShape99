import IaniData from "./interfaces/IaniData";
import IBaseGenerator from "./interfaces/IBaseGenerator";

export default class BaseGenerator implements IBaseGenerator{  
            attributeToAnimateName:string;
            fromSecond:number;   
            toSecond:number;
            readOnlyElementAttrNames:string[]|[];
            argsForAlgo : {};
private     state:{};
            fps:number;

constructor(aniData:IaniData,argsForAlgo={}){
 //this.aniData = aniData;
 this.attributeToAnimateName = aniData.attributeToAnimateName ;//must 
 this.fromSecond = aniData.fromSecond *1000  ; //must for every animation
 this.toSecond = aniData.toSecond *1000;//must for every animation
 this.readOnlyElementAttrNames = aniData.readOnlyElementAttrNames;   
//--------------------------------------------------------------------
 this.argsForAlgo = argsForAlgo;
//--------------------------------------------------------------------
 this.fps =  60 ; // this has to be settled
 this.state = {}; ///every new data goes here
}

public animate(attributeToAnimateData:string|number|boolean,
    currentSecondMilli:number,
    readOnlyElementData:{}={}):string|number|boolean{    
return true;
}
//===============================================  
}
