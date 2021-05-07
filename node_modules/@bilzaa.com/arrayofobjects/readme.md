# Array Of Objects
In Javascript we have built in functions for dealing with arrays as well as for objects BUT we need something to deal with 'Array of Objects'. This module is a wrapper around an array that stores objects. Each object should have a property named 'name' and a property named 'value'.
There can not be two objects with the same name (each name of the object should be unique).

# Usage
we create a new object by add method.
add('nameOfTheObject)
After an object has been created we can change its value using setAttr method. 
setAttr("name of the attribute");
To get the 'value' attribute of an object we use getAttr method.
getAttr("name of the object");

# The API
/**
 * 1--every objects must have a unique "name"  field
 * 2--every OBJECT MUST HAVE "value" field.
 */
- add(name:string,value:string|number|boolean);
- length;  //get length()
- getItem(name:string); //not tested yet fully
- getAttr(name:string,field= "value"):string|number|boolean
- setAttr(name:string,value:string|number|boolean,field = "value"):string|number|boolean

### THERE MAY BE BREAKING CHANGES IN NEAR FUTURE
