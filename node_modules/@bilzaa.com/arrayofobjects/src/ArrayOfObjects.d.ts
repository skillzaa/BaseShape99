/**
 * 1--every objects must have a unique "name"  field
 * 2--every OBJECT MUST HAVE "value" field.
 */
import IArrayOfObjects from "./IArrayOfObjects";
export default class ArrayOfObjects implements IArrayOfObjects {
    data: [];
    constructor();
    add(name: string, value?: number | string | boolean): {};
    protected isUnique(name: string): boolean;
    get length(): 0;
    getItem(name: string): boolean;
    getAttr(name: string, field?: string): string | number | boolean;
    setAttr(name: string, value: string | number | boolean, field?: string): string | number | boolean;
    getObjectsByName(argumentsRequired?: never[]): never[];
    getItemsByNames(argumentsRequired?: never[]): never[];
}
