import BaseGenerator from "./BaseGenerator.js";

export default class RandomColors extends BaseGenerator{
constructor(aniData,argsForAlgo={}){
    super(aniData,argsForAlgo);
    this.state.previous = 0;

}

animate(attributeToAnimateData:string|number|boolean,
    currentSecond:number,
    readOnlyElementData:{}={}):string|number|boolean{

      if (this.state.previous == 0){
        this.state.previous = Date.now();
    }

    if(this.isWaitOver() == true){
      this.state.previous = Date.now();
      return this.returnColor();
    }
  else{
      return attributeToAnimateData;
   }
  
}

//-------------------------------------------------------------    
isWaitOver(){
  const lapsedTime = Math.abs(Date.now() - this.state.previous);
  if(lapsedTime > this.argsForAlgo.timeGap){
      return true;
  }else{
      return false;
  }
}

//-------------------------------------------------------------   
returnColor(){
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
} 
//-------------------------------------------------------------    
//-------------------------------------------------------------    
//-------------------------------------------------------------    
}