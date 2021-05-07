import IaniData from "./IaniData";
export default interface IBaseGenerator {
    attributeToAnimateName: string;
    fromSecond: number;
    toSecond: number;
    readOnlyElementAttrNames: string[] | [];
    argsForAlgo: {};
    fps: number;
    constructor(aniData: IaniData, argsForAlgo?: object): any;
    animate(attributeToAnimateData: string | number | boolean, currentSecondMilli: number, readOnlyElementData?: {}): string | number | boolean;
}
