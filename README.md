### Esercizio
Scrivere un programma che chieda all’utente:
- il numero di chilometri da percorrere
- età del passeggero

Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:

- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

### Svolgimento
Codice JS: Lo script partirà al click del bottone invia, pertanto, il codice sarà collocato all'interno dell'event listener.

#### Raccolta dati
1. Prelevare dall'input dell'utente il numero di chilometri da percorrere, convertirlo in un numero intero e verificare sia maggiore di 0;
2. Prelevare dall'input dell'utente l'età del passeggero, convertirla in un numero intero e verificare sia compreso tra 0 e 100;

#### Logica del programma
1. Calcolare il prezzo del biglietto moltiplicando i chilometri in input a 0.21;
2. Verificare l'età del passeggero: SE è compresa tra 18 e 64 lasciare il prezzo del biglietto invariato ALTRIMENTI SE è minore di 18 dividere il prezzo del biglietto per 100 e moltiplicare per 80 ALTRIMENTI SE è maggiore o uguale a 65 dividere il prezzo del biglietto per 100 e moltiplicare per 60;
3. Limitare le cifre decimali del prezzo del biglietto a due;
4. Preparare il messaggio che comunica il prezzo del biglietto;

#### Output
Console log del messaggio comunicante il prezzo del biglietto.