const Val = require("../dist/ValidatorCjs");
const val = new Val();
// console.log(val);

test('isNumber-01', () => {
const b = val.isNumber(4);
expect(b).toBeTruthy(); 
});
test('isNumber-02', () => {
const b = val.isNumber("4");
expect(b).toBeFalsy(); 
});
test('isNumber-02-B', () => {
const b = val.isNumber(true);
expect(b).toBeFalsy(); 
});
test('isNumber-02-C', () => {
const b = val.isNumber({});
expect(b).toBeFalsy(); 
});

test('isNumber-03', () => {
    expect(() => {
      val.isNumber("4",true);
    }).toThrow('This is not a Number');
});
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
test('isInteger-01', () => {
const b = val.isInteger(4);
expect(b).toBeTruthy(); 
});
test('isInteger-02', () => {
const b = val.isInteger(4.55);
expect(b).toBeFalsy(); 
});
test('isInteger-02-B', () => {
const b = val.isInteger(true);
expect(b).toBeFalsy(); 
});
test('isInteger-02-C', () => {
const b = val.isInteger(0.1);
expect(b).toBeFalsy(); 
});
test('isInteger-02-D', () => {
const b = val.isInteger(7.00);//7.00 = 7
expect(b).toBeTruthy(); 
});

test('isInteger-03', () => {
    expect(() => {
      val.isInteger(5.420,true);
    }).toThrow('This is not an Integer');
});
///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////
test('isSmaller-01', () => {
    expect(() => {
      val.isSmaller(5,2,true);
    }).toThrow('First Number is not smaller than the second number');
});
test('isSmaller-02', () => {
  const b = val.isSmaller(2,5,true);//7.00 = 7
  expect(b).toBeTruthy(); 
  });
  
    
