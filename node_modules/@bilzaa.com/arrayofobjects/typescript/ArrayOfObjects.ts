/** 
 * 1--every objects must have a unique "name"  field
 * 2--every OBJECT MUST HAVE "value" field.
 */
 import IArrayOfObjects from "./IArrayOfObjects";

 import Validator from "../node_modules/validator99/dist/Validator.js"; 
 const val = new Validator();

 export default  class ArrayOfObjects implements IArrayOfObjects{
 public data:[];        
 constructor(){
     this.data=[];
 }
 
 add(name:string,value:number|string|boolean=""){
 val.isString(name,true,"The name is compulsary and should be of type string");    
 if (this.isUnique(name) === true){
     const a = {};
     a.name = name; 
     a.value = value; 
     this.data.push(a);
     return a;    
 } else {
     throw new Error(`Please Provide a unique and valid string name for the object. The name ::${name} already exists`);
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
 val.isString(name,true,"The name should be of type string");    
 for (let idx = 0; idx < this.data.length; idx++) {
     if(this.data[idx].name === name){
         return this.data[idx];
     }
 } 
 return false;   
 }//.....................
     
 getAttr(name:string,field= "value"):string|number|boolean{
 val.isString(name,true,"The name should be of type string");    
 for (let idx = 0; idx < this.data.length; idx++) {
     const thisName = this.data[idx].name; 
     if( thisName == name){
         return this.data[idx][field];
     }
 }
 return false;    
 }
  
 setAttr(name:string,value:string|number|boolean,field = "value"):string|number|boolean{
 val.isString(name,true,"The name should be of type string");    
 
 for (let idx = 0; idx < this.data.length; idx++) {
     if(this.data[idx].name == name){
             this.data[idx][field] = value;
             return this.data[idx][field];
     }
 }        
 return true;       
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
 ///////////////////
 }