import BaseGenerator from "./BaseGenerator.js";
export default class RandomColors extends BaseGenerator {
    constructor(aniData: any, argsForAlgo?: {});
    animate(attributeToAnimateData: string | number | boolean, currentSecond: number, readOnlyElementData?: {}): string | number | boolean;
    isWaitOver(): boolean;
    returnColor(): string;
}
