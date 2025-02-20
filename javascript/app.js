let change = new Change("EUR");
let ui = new UI();

change.getChange().then(data => ui.addOptions(data));

document.querySelector(".btn").addEventListener("click", onclick);

function onclick(data){
    change.getChange().then(data => ui.currencyConverter(data));
}