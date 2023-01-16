const sum = (a,b) => {
    return a + b
}


console.log(sum(7,3))


module.exports = { sum };



let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromDollarToYen (dollar)  {
    euro1 = dollar / 1.2 
    return euro1 * 127.9
}
function fromEuroToDollar (euro)  {
    return euro * 1.2
}
function fromYenToPound (yen)  {
    euro2 = yen / 127.9 
    return euro2 * 0.8
}
