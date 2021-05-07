/**
 * 1--every objects must have a unique "name"  field
 * 2--every OBJECT MUST HAVE "value" field.
 */
export default class ArrayOfObjects {
    data: [];
    constructor();
    add(name: string): {};
    protected isUnique(name: string): boolean;
    get length(): 0;
    getItem(name: string): boolean;
    getProperty(name: string, field?: string): boolean;
    getAttr(name: string, field?: string): number;
    setProperty(name: string, value: string | number | boolean, field?: string): string | number | boolean;
    setAttr(name: string, value: string | number | boolean, field?: string): string | number | boolean;
    getObjectsByName(argumentsRequired?: never[]): never[];
}
