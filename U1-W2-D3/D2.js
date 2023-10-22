/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

function somma(a, b) {
      if (a > b) {
            return a;
      } else if (a < b) {
            return b;
      } else {
            console.log("i numeri sono uguali");
      }
}
somma(12, 8);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/ function nonequo(a) {
      if (a != 5) {
            return a + "not equal";
      } else if (a == 5) {
            return equal;
      }
}
nonequo(4);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/ function divisibile(a) {
      if (a % 5 == 0) {
            return "divisibile per 5";
      } else {
            return "non e divisibile ";
      }
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/ function compara(a, b) {
      if (a == 8 || b == 8 || a + b == 8 || a - b == 8) {
            return "uguale a 8";
      } else {
            return "non e uguale";
      }
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 45;
let ship = 10;
function chek() {
      if (totalShoppingCart > 50) {
            return "consegna gratutita";
      } else {
            return "costo totale " + (totalShoppingCart + ship);
      }
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
function blackFriday() {
      totalShoppingCart = totalShoppingCart * 0.8;
      if (totalShoppingCart > 50) {
            return "spedizione gratuita" + totalShoppingCart;
      } else {
            return "totale da pagare"(totalShoppingCart + ship);
      }
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
function comparare(n1, n2, n3) {
      if (n1 > n2 && n2 > n3) {
            return { n1, n2, n3 };
      } else if (n1 < n2 && n2 < n3) {
            return { n3, n2, n1 };
      }
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/ function controllo(a) {
      console.log(typeof a);
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/ function ciao(n1) {
      if (n1 % 2 == 0) {
            return "pari";
      } else if (n1 % 2 == 1) {
            return "dispari";
      }
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/ let val = 7;
if (val < 5) {
      console.log("meno di 5");
} else if (val >= 10) {
      console.log("uguale a 10 o maggiore");
} else {
      console.log("minore di 10");
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
      name: "John",
      lastName: "Doe",
      skills: ["javascript", "html", "css"],
};
function agg() {
      me.city = "Toronto";
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/ function rimuovi() {
      delete me.lastName;
      return me;
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
function rimuovo() {
      me.skills.pop();
      return me;
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/ let arrayy = [];

function plus() {
      for (let i = 1; i <= 10; i++) {
            arrayy.push(i);
      }
      return arrayy;
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/ plus();
function sost() {
      arrayy.splice(-1, 1, 100);
      return arrayy;
}
/* SCRIVI QUI LA TUA RISPOSTA */
