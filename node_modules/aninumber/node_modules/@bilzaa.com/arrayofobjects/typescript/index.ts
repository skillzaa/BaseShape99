/** 
 * 1--every objects must have a unique "name"  field
 * 2--every OBJECT MUST HAVE "value" field.
 */
// const IItem = require("IItem");

module.exports =  class ArrayOfObjects{
public data:[];        
constructor(){
    this.data=[];
}

add(name:string){
if (this.isUnique(name) === true){
    const a = {};
    a.name = name; 
    this.data.push(a);
    return a;    
} else {
    throw new Error("Please Provide a unique and valid string name for the object");
}   

} 
    
protected isUnique(name:string){
if(typeof name == "undefined"){return false;}    
let uniqueOrNot = true;
    for (let idx = 0; idx < this.data.length; idx++) {
        const element = this.data[idx];
        if(element.name === name){
            uniqueOrNot =  false;
        }       
    }
return uniqueOrNot;
}
    
get length(){
return this.data.length;
}
    
getItem(name:string){
for (let idx = 0; idx < this.data.length; idx++) {
    if(this.data[idx].name === name){
        return this.data[idx];
    }
} 
return false;   
}//.....................
    
getProperty(name:string,field= "value"){
for (let idx = 0; idx < this.data.length; idx++) {
    if(this.data[idx].name === name){
        return this.data[idx][field];
    }
}
return false;    
}
getAttr(name:string,field= "value"){
return Number(this.getProperty(name));
}
 
setProperty(name:string,value:string|number|boolean,field = "value"):string|number|boolean{
    for (let idx = 0; idx < this.data.length; idx++) {
        if(this.data[idx].name === name){
                this.data[idx][field] = value;
                return this.data[idx][field];
        }
    }        
return true;       
    }//......
setAttr(name:string,value:string|number|boolean,field = "value"):string|number|boolean{
    return Number(this.setProperty(name,value));          
    }//......
        
getObjectsByName(argumentsRequired=[]){
const ret = [];         
this.data.forEach(bd => {
    argumentsRequired.forEach(ag => {
        if(ag == bd.name){
            ret.push(bd);
        }
    });
});
return ret;    
}
    
///////////////////
}