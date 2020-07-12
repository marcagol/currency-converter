{
    const welcome = () => {
        console.log("Przeliczmy parę złotych");
    }

    const countResult = (amount, currency) => {
        const gbpRate = 4.99;
        const eurRate = 4.46;
        const czkRate = 0.17;

        switch (currency) {
            case "GBP":
                return amount / gbpRate;
            case "EUR":
                return amount / eurRate;
            case "CZK":
                return amount / czkRate;
        }
    };
    
    const showResult = (amount, currency, result) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `Za ${amount.toFixed(2)} PLN kupisz <strong>${result.toFixed(2)}</strong> ${currency}`;
    };

    const formSubmit = () => {
        event.preventDefault();
        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");
        
        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = countResult(amount, currency);
      
        welcome();
        showResult(amount, currency, result);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", formSubmit);
    };

    init();
}