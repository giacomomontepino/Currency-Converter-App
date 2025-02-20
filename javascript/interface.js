class UI {
    constructor(){
        this.from = document.getElementById("fromValue");
        this.to = document.getElementById("toValue");
        this.amount = document.getElementById("amountValue");
        this.conversion = document.querySelector(".conversion");
    }

    addOptions(data){
        Object.keys(data.rates).forEach(item => {
            document.getElementById("fromValue").innerHTML += `<option value="${item}">${item}</option>`;
            document.getElementById("toValue").innerHTML += `<option value="${item}">${item}</option>`;
        });
    }

    currencyConverter(data){
        let fromCurrency = this.from.value;
        let toCurrency = this.to.value;
        let amount = parseFloat(this.amount.value);

        if (!fromCurrency || !toCurrency || isNaN(amount) || amount <= 0) {
            this.conversion.textContent = "Inserisci un importo valido.";
            return;
        }

        let fromRate = data.rates[fromCurrency];
        let toRate = data.rates[toCurrency];
        let convertedAmount = (amount * toRate);

        this.conversion.textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
    }
}