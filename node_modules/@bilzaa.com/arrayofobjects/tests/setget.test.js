const ArrayOfObjects = require('../dist/ArrayOfObjectsCjs');

const aoo = new ArrayOfObjects();

const a = aoo.add("test");

test('setAttribute--Simple', () => {
aoo.setAttr("test",100);    
expect(a.value).toEqual(100); 
});

test('getAttribute-Simple', () => {
const b = aoo.getAttr("test");    
expect(b).toEqual(100); 
});

test('setAttribute-Advanced', () => {
const c = aoo.setAttr("test",500,"newfield");    
expect(c).toEqual(500); 
});

test('getAttribute-Advanced', () => {
const c = aoo.setAttr("test",500,"newfield");    
const d = aoo.getAttr("test","newfield");    
expect(c).toEqual(500); 
});

// test('check name', () => {
// expect(a.name).toBe("test"); 
// });
// test('try to add another test', () => {
//     expect(() => {
//         aoo.add("test");
//     }).toThrow('Please Provide a unique and valid string name for the object');
// });
// test('try sending non string as name', () => {
//     expect(() => {
//         aoo.add({});
//     }).toThrow('The name should be of type string');
// });
