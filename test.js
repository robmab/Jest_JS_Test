const {
  sum,
  fromEuroToDollar,
  fromDollarToYen,
  fromYenToPound,
} = require("./app.js");

test("adds 14 + 9 to equal 23", () => {
  let total = sum(14, 9);
  expect(total).toBe(23);
});

test("3.5€ es igual a 4.2$", () => {
  expect(fromEuroToDollar(3.5)).toBe(4.20);
});

test("6$ es igual a 639.5 JPY", () => {
  expect(fromDollarToYen(6)).toBe(639.50);
});

test("5 yenes son igual a 0.28 GBP", () => {
  expect(fromYenToPound(45)).toBe(0.28);
});
