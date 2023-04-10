let oneEuroIs = {
  JPY: 127.9, // japan yen
  USD: 1.2, // us dollar
  GBP: 0.8, // british pound
};

const sum = (a, b) => {
  return a + b;
};

const fromEuroToDollar = (euro) => {
  return Number((euro * oneEuroIs.USD).toFixed(2));
};

const fromDollarToYen = (dollar) => {
  return +((dollar / oneEuroIs.USD) * oneEuroIs.JPY).toFixed(2);
};

const fromYenToPound = (yen) => {
  return Number(((yen / oneEuroIs.JPY) * oneEuroIs.GBP).toFixed(2));
};

console.log(sum(7, 3));

/* TESTS */
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };
