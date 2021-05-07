const ArrayOfObjects = require('../dist/ArrayOfObjectsCjs');

const aoo = new ArrayOfObjects();


aoo.add("test");
// console.log(c);

test('Testing Attributes', () => {
    aoo.setAttr('test', 100);
    const c = aoo.getAttr("test");  
    expect(c).toBe(100);
// const d = aoo.getProperty("test","comments");  
    // expect(d).toMatch("100");

aoo.setAttr("test","new comment","comments" );  
    
const f = aoo.getAttr("test","comments");  
    expect(f).toMatch("new comment");
    });
