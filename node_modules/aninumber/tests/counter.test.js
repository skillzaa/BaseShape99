const log = console.log;
const Counter  = require("../testSrc/Counter");

const counter = new Counter({
        attributeToAnimateName:"x",
        fromSecond:0,   toSecond:10,
        readOnlyElementAttrNames:[]
    },{ from: 0, to:100} );

/**the time starts at 0 and from = 0 so no need to add into time and distance */
test('first value', () => {
expect(counter.animate(10,0)).toEqual(0); 
});

test('the last return value', () => {
expect(counter.animate(10,10000)).toEqual(100); 
});
        
test('the middle return value', () => {
expect(counter.animate(10,5000)).toEqual(50); 
});

test('the 25% return value', () => {
expect(counter.animate(10,2500)).toEqual(25); 
});
 

test('the 75% return value', () => {
expect(counter.animate(10,7500)).toEqual(75); 
});

test('the 80% return value', () => {
expect(counter.animate(10,8000)).toEqual(80); 
});

test('the 35% return value', () => {
expect(counter.animate(10,3500)).toEqual(35); 
});
