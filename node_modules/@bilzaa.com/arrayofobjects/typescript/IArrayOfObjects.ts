export default interface IArrayOfObjects {
    data: [];
    constructor();
    add(name: string, value?: number | string | boolean): {};
    // protected isUnique(name: string): boolean;
    // get length(): 0;
    getItem(name: string): boolean;
    getAttr(name: string, field?: string): string | number | boolean;
    setAttr(name: string, value: string | number | boolean, field?: string): string | number | boolean;
    getObjectsByName(argumentsRequired?: never[]): never[];
    getItemsByNames(argumentsRequired?: never[]): never[];
}
