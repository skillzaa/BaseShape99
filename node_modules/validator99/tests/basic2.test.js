const Val = require("../dist/ValidatorCjs");
const val = new Val();
// console.log(val);

test('wholeNumber-01', () => {
const b = val.wholeNumber(4.543222);
expect(typeof b).toMatch('number'); 
});
//.................................
test('wholeNumber-Error', () => {
    expect(() => {
        val.wholeNumber("abc",true);
    }).toThrow('This is not a Number');
});
//....................is boolean....................................
test('isboolean-01', () => {
    const b = val.isBoolean([]);
    expect(b).toBeFalsy(); 
});
test('isboolean-02', () => {
    const b = val.isBoolean(4.543222);
    expect(b).toBeFalsy(); 
});
test('isboolean-03', () => {
    const b = val.isBoolean("string");
    expect(b).toBeFalsy(); 
});
test('isboolean-04', () => {
    const b = val.isBoolean({});
    expect(b).toBeFalsy(); 
});
test('isboolean-05', () => {
    const b = val.isBoolean(true);
    expect(b).toBeTruthy(); 
});
test('isboolean-06', () => {
    const b = val.isBoolean(false);
    expect(b).toBeTruthy(); //false will also return true
});
test('boolean-Error', () => {
    expect(() => {
        val.isBoolean("abc",true);
    }).toThrow('This value is not boolean');
});
//////////////////////////////////////////////////////////////
//....................is string....................................
test('isString-01', () => {
    const b = val.isString([]);
    expect(b).toBeFalsy(); 
});
test('isString-02', () => {
    const b = val.isString(4.543222);
    expect(b).toBeFalsy(); 
});
test('isString-03', () => {
    const b = val.isString(true);
    expect(b).toBeFalsy(); 
});
test('isString-04', () => {
    const b = val.isString({});
    expect(b).toBeFalsy(); 
});
test('isString-05', () => {
    const b = val.isString("abc");
    expect(b).toBeTruthy(); 
});
test('isString-06', () => {
    const b = val.isString("some new text");
    expect(b).toBeTruthy(); //false will also return true
});
test('isString-Error', () => {
    expect(() => {
        val.isString(555,true);
    }).toThrow('This value is not string');
});
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////
//....................is SNB....................................
test('isSNB-01', () => {
    const b = val.isSNB([]);
    expect(b).toBeFalsy(); 
});
test('isSNB-02', () => {
    const b = val.isSNB({});
    expect(b).toBeFalsy(); 
});
test('isSNB-03', () => {
    const b = val.isSNB(true);
    expect(b).toBeTruthy(); 
});
test('isSNB-04', () => {
    const b = val.isSNB(1);
    expect(b).toBeTruthy(); 
});
test('isSNB-05', () => {
    const b = val.isSNB("abc");
    expect(b).toBeTruthy(); 
});
test('isSNB-06', () => {
    const b = val.isSNB(1.05487);
    expect(b).toBeTruthy(); //false will also return true
});
test('isSNB-Error', () => {
    expect(() => {
        val.isSNB({},true);
    }).toThrow('This value is not boolean or string or number');
});
//////////////////////////////////////////////////////////////
