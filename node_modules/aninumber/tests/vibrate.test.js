const Generators = require('../testSrc/Generators');
const generators = new Generators();
//const log = console.log;
const vib = generators.addVibrate("x",1,10,6000,300,[]);


test('first time it will NOT change', () => {
  let newX = vib.animate(0,1000);

  expect(newX).toEqual(0);
});

test('2nd time will also not change', () => {
  let newX = vib.animate(33,1200);

  expect(newX).toEqual(33);
});
////////////////////////////////

jest.useFakeTimers();

describe("delay", () => {
  test("does something after 200ms", () => {
    const doSomething = jest.fn();

    delay(200, doSomething);

    jest.advanceTimersByTime(7000);
    
    let newX = vib.animate(33,7000);

    expect(newX).toEqual(33);
  
    expect(doSomething).toHaveBeenCalled();
  });
});



////////////////////////////
const delay = (milliseconds, fn) => {
  setTimeout(() => {
    fn();
  }, milliseconds);
};

