const sum = (a, b) => {
    return a + b
}

const fromEuroToDollar = (euro) => {
    return Number((euro * 1.206).toFixed(2))
}

const fromDollarToYen = (dollar) => {
    return Number((dollar * 132.98).toFixed(2))
}

const fromYenToPound = (yen) => {
    return Number((yen * 0.0060).toFixed(2))
}

console.log(sum(7, 3));

/* TESTS */
module.exports = { sum, frgitomEuroToDollar, fromDollarToYen, fromYenToPound }