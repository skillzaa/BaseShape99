import BaseGenerator from "./BaseGenerator.js";
export default class Counter extends BaseGenerator {
    private milliPerPixConst;
    constructor(aniData: any, argsForAlgo?: {});
    animate(attributeToAnimateData: number, currentSecondMilli: number, readOnlyElementData?: {}): number;
    milliPerPix(): number;
    currentTimeDifferenceInMilli(currentSecondMilli: number): number;
    isTimeValid(currentSecondMilli: number): boolean;
}
