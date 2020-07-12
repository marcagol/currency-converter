{ 
    const welcome = () => {
        console.log("Przeliczmy parę złotych"); 
    }
    

const formElement = document.querySelector(".js-form");
const amountElement = document.querySelector(".js-amount");
const currencyElement = document.querySelector(".js-currency");
const resultElement = document.querySelector(".js-result");


const gbpRate = 4.99;
const eurRate = 4.46;
const czkRate = 0.17;


formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const amount = +amountElement.value;
    const currency = currencyElement.value;

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
    welcome();
});
}