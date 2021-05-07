const ArrayOfObjects = require('../dist/ArrayOfObjectsCjs');

const aoo = new ArrayOfObjects();

const a = aoo.add("test");

test('add', () => {
expect(typeof a).toBe("object"); 
});

test('check name', () => {
expect(a.name).toBe("test"); 
});
test('try to add another test', () => {
    expect(() => {
        aoo.add("test");
    }).toThrow();
});
test('try sending non string as name', () => {
    expect(() => {
        aoo.add({});
    }).toThrow('The name is compulsary and should be of type string');
});
