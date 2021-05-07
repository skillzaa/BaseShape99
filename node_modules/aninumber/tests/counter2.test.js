const log = console.log;
const Counter = require("../testSrc/Counter");

// log(assert);

const counter = new Counter({
        attributeToAnimateName:"x",
        fromSecond:1,   toSecond:3,
        readOnlyElementAttrNames:[]
    },{ from: 10, to:30} );
/**Time difference is 2000 ms and distance delta = 20 */
//counter.animate(10,2980)

test('counter.milliPerPix', () => {
expect(counter.milliPerPix()).toEqual(100); 
});

test('Exception::The current Time is less than the starting time of the animation', () => {
    expect(() => {
        counter.animate(10,700);
      }).toThrow('The current Time is before than the starting time OR after the finish point of the animation');
  });

test('Exception::The current Time is after the end time of the animation', () => {
    expect(() => {
        counter.animate(10,3001);
      }).toThrow('The current Time is before than the starting time OR after the finish point of the animation');
  });

test('the first return value', () => {
expect(counter.animate(10,1000)).toEqual(10); 
});

test('the last return value', () => {
expect(counter.animate(10,3000)).toEqual(30); 
});
        
test('the 25% value: time 25% = 2000/4 = 500+1000 since starts at 1000 similarly the answer is 15 and not five since we added from:10 also', () => {
expect(counter.animate(10,1500)).toEqual(15); 
});

test('the 35%:: time @ 35% = 20000/100 * 25 =700+1000 from start = 1700, ret value 35% = 20/100*35=7+10 start', () => {
expect(counter.animate(10,1700)).toEqual(17); 
});

test('the 99%:: time @ 99% = 20000/100 * 99 =1980+1000 from start = 2980, ret value 99% = 20/100*99=19.8+10=29.8 start', () => {
    //29.8 = 30 remeebr we just deal in round numbers
expect(counter.animate(10,2980)).toEqual(30); 
});
 
