import Counter from "./Counter.js";
import RandomColors from "./RandomColors.js";
import Vibrate from "./Vibrate.js";
export default class Generators {
    data: object[];
    constructor();
    addCounter(attributeToAnimateName: string, fromSecond: number, toSecond: number, from: number, to: number, readOnlyElementAttrNames?: never[]): Counter;
    addVibrate(attributeToAnimateName: string, fromSecond: number, toSecond: number, timeGap: number, deviation: number, readOnlyElementAttrNames?: never[]): Vibrate;
    addRandomColors(attributeToAnimateName: string, fromSecond: number, toSecond: number, readOnlyElementAttrNames?: never[]): RandomColors;
}
