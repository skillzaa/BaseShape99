const log = console.log;
const Generators = require("../testSrc/Generators");
const generators = new Generators();

test('Exception::', () => {
    expect(() => {
        generators.addCounter("x",10,1,100,10,[]);
    }).toThrow();
});
    