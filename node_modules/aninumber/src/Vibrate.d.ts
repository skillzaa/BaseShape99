import BaseGenerator from "./BaseGenerator.js";
export default class Vibrate extends BaseGenerator {
    constructor(aniData: any, argsForAlgo?: {});
    animate(attributeToAnimateData: string | number | boolean, currentSecond: number, readOnlyElementData?: {}): string | number | boolean;
    isWaitOver(): boolean;
    manipulate(incomming: any): number;
}
