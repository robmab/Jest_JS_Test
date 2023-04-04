test ("adds 14 + 9 to equal 23",()=>{
    const { sum } = require('./app.js');
    let total = sum(14,9);
    expect(total).toBe(23);
} )

test ("1€ es igual a 1.206$", ()=>{
    const { fromEuroToDollar } = require('./app.js')
    expect(fromEuroToDollar(3.5)).toBe(4.22)
})

test ("1$ es igual a 132,98 JPY", ()=>{
    const { fromDollarToYen  } = require('./app.js')
    expect(fromDollarToYen (6)).toBe(797.88)
})

test ("1 yen es igual a 0,0060 GBP", ()=>{
    const { fromYenToPound } = require('./app.js')
    expect(fromYenToPound(45)).toBe(0.27)
})