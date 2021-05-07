const ArrayOfObjects = require('../dist/ArrayOfObjectsCjs');


const aoo = new ArrayOfObjects();

const a = aoo.add("test",500);

test('obj', () => {
expect(typeof a).toBe("object"); 
});
test('name', () => {
expect(a.name).toBe("test"); 
});

test('without name :error', () => {
expect(a.value).toBe(500); 
});
test('try to add another test', () => {
    expect(() => {
        aoo.add("test");
    }).toThrow('Please Provide a unique and valid string name for the object');
});
test('try sending no name', () => {
    expect(() => {
        aoo.add();
    }).toThrow('The name is compulsary and should be of type string');
});
