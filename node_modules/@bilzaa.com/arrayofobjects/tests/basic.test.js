const ArrayOfObjects = require('../dist/ArrayOfObjectsCjs');

const aoo = new ArrayOfObjects();

const a = aoo.add("first");
const b = aoo.add("second");

test('add first', () => {
expect(typeof a).toBe("object"); 
});

test('add second', () => {
expect(typeof b).toBe("object"); 
});

test('length = 2 ', () => {
expect(aoo.length).toEqual(2); 
});

test('add non unique name to throw error', () => {
    expect(() => {
        aoo.add("first");     
  }).toThrow('Please Provide a unique and valid string name for the object');
});

    

test('setAttr', () => {
const ans = aoo.setAttr("first","value of first");
expect(ans).toBe("value of first"); 
});    

test('getAttr', () => {
const ans = aoo.getAttr("first");
expect(ans).toBe("value of first"); 
});    