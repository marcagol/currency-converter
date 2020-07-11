let formElement = document.querySelector(".js-form");
let plnElement = document.querySelector(".js-plnAmount");
let sellingRateElement = document.querySelector(".js-sellingRate");
let poundElement = document.querySelector(".js-firstOption");
let euroElement = document.querySelector(".js-secondOption");
let korunaElement = document.querySelector(".js-thirdOption");
let yourAmountElement = document.querySelector(".js-yourPlnAmount");
let yourResultElement = document.querySelector(".js-amount");
let yourCurrencyElement = document.querySelector(".js-yourCurrency");
let countElement = document.querySelector(".js-count");
let resetElement = document.querySelector(".js-reset");

formElement.addEventListener("reset", () => {
    console.log('Formularz został zresetowany');
});

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    
    let pln = plnElement.value;
    let sellingRate = sellingRateElement.value;

    let result = pln / sellingRate;

    yourAmountElement.innerText = pln;
    yourResultElement.innerText = result.toFixed(2);

    if (poundElement.selected) {
        yourCurrencyElement.innerText = poundElement.value;
    }
    if (euroElement.selected) {
        yourCurrencyElement.innerText = euroElement.value;
    }
    if (korunaElement.selected) {
        yourCurrencyElement.innerText = korunaElement.value;
    }
    console.log('Formularz został wysłany');
});