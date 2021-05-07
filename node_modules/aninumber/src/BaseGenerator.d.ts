import IaniData from "./interfaces/IaniData";
import IBaseGenerator from "./interfaces/IBaseGenerator";
export default class BaseGenerator implements IBaseGenerator {
    attributeToAnimateName: string;
    fromSecond: number;
    toSecond: number;
    readOnlyElementAttrNames: string[] | [];
    argsForAlgo: {};
    private state;
    fps: number;
    constructor(aniData: IaniData, argsForAlgo?: {});
    animate(attributeToAnimateData: string | number | boolean, currentSecondMilli: number, readOnlyElementData?: {}): string | number | boolean;
}
