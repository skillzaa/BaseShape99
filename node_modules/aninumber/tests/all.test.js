const Generators  = require("../testSrc/Generators");
//const log = console.log;
const generators = new Generators();

test('expect(typeof l).toBe(object)', () => {
    const l = generators.addCounter("x",1,100,0,1000);
    expect(typeof l).toBe('object');
  });

test('expect(typeof l).toBe(object)', () => {
    const v = generators.addVibrate("x",1,100,100,10);
    expect(typeof v).toBe('object');
  });

test('expect(typeof l).toBe(object)', () => {
    const r = generators.addRandomColors("x",1,100);
    expect(typeof r).toBe('object');
  });

