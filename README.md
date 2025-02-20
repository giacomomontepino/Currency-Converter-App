# Currency Converter App
![screen dell'applicazione web]("/assets/img/screen.png")

## Descrizione

Questo progetto è un'applicazione web che permette di convertire valute utilizzando l'API di Frankfurter. Gli utenti possono selezionare una valuta di partenza, una valuta di destinazione e inserire un importo da convertire.

## Tecnologie Utilizzate

1. HTML per la struttura della pagina

2. CSS/SASS per lo stile

3. JavaScript (ES6+) per la logica dell'applicazione

4. API di Frankfurter per ottenere i tassi di cambio in tempo reale

## Funzionalità

✅ Selezione della valuta di partenza e di destinazione

✅ Inserimento dell'importo da convertire

✅ Calcolo automatico della conversione

✅ Interfaccia utente dinamica

✅ Aggiornamento automatico delle opzioni delle valute

## Installazione e Utilizzo

Clona il repository

git clone https://github.com/tuo-username/currency-converter.git

Apri il file index.html nel tuo browser

Seleziona le valute e inserisci un importo

Premi il pulsante di conversione per ottenere il valore convertito

## API Utilizzata

L'applicazione utilizza l'API di Frankfurter per ottenere i tassi di cambio. La richiesta avviene tramite fetch a:

https://api.frankfurter.app/latest?base=EUR

Dove EUR è la valuta base. La risposta è un oggetto JSON contenente i tassi di cambio.

Esempio di Risposta API

{
  "amount": 1,
  "base": "EUR",
  "date": "2025-02-20",
  "rates": {
    "USD": 1.08,
    "GBP": 0.85,
    "JPY": 145.32
  }
}

## Contributi

Se vuoi contribuire al progetto, fai un fork del repository, crea un nuovo branch e apri una pull request con le tue modifiche.

## Autore

👤 Montepino Giacomo

📧 Contattami su montepino.dev@gmail.com

## Licenza

📝 Questo progetto è rilasciato sotto la licenza MIT.

