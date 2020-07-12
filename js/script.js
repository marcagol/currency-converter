console.log("Przeliczmy pare złotych");

let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");


let gbpRate = 4.99;
let eurRate = 4.46;
let czkRate = 0.17;


formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let amount = +amountElement.value;
    let currency = currencyElement.value;

    let result;

    switch (currency) {
        case "GBP":
            result = amount / gbpRate;
            break;
        case "EUR":
            result = amount / eurRate;
            break;
        case "CZK":
            result = amount / czkRate;
            break;
    };
    
    resultElement.innerHTML = `Za ${amount.toFixed(2)} PLN kupisz <strong>${result.toFixed(2)}</strong> ${currency}`;   
    
});
