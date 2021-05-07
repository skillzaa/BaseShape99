
export default interface IShape {
    constructor(name);    
    update(a:number) :boolean
    preUpdate():void;
    postUpdate():void;

    draw(metal:Metal):void;
    preDraw():void;
    postDraw():void;
    setAttr(attrName:string,attrValue:string|number|boolean):string|number|boolean;
    getAttr(attrName:string):string|number|boolean;
    //-animations
    moveHorizontal(fromSecond:number, toSecond:number, from:number, to :number);
    moveVerticle(fromSecond:number, toSecond:number, from:number, to :number);
    moveDiagonal(fromSecond:number, toSecond:number, fromX:number, toX:number, fromY:number, toY:number);
    widen(fromSecond:number,toSecond:number,from:number,to:number);
    heighten(fromSecond:number,toSecond:number,from:number,to:number);
    scale(fromSecond:number,toSecond:number,fromWidth:number,toWidth:number,fromHeight:number,toHeight:number);
    rotate(fromSecond:number,toSecond:number,from:number,to:number);

}