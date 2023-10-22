/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
function area(l1, l2) {
      return l1 * l2;
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
function boundary(n) {
      if ((n >= 20 && n <= 100) || n == 400) {
            return true;
      } else {
            return "non e compreso ";
      }
}
boundary();

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function epify(String) {
      if (String.startsWith("epicode")) {
            return String;
      } else {
            return "epicode" + String;
      }
}
console.log("epicoder");
console.log("ciao");

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/ const check3and7 = function (n) {
      if ((n = 0 && (n % 3 === 0 || n % 7 === 0))) {
            console.log(true);
      } else {
            console.log(false);
      }
};

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/ function reverseString(stringa) {
      let fi = stringa.split("");
      let ti = fi.reverse();
      let fina = ti.join();
      return fina;
}
console.log(reverseString("sara"));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
/*const upperFirstPhrase = function (str) {
      let words = str.split(" ");
      let finalString = [];

      for (w = 0; w < words.lenght; w++) {
            let titi = words[w].charAt(0);
            let miao = titi.toUpperCase();
            let bube = words[w].slice(1);
            let finale = miao + bube;
            finalString.push(finale);
      }
      console.log(finalString.join(" "));
};*/ const upperFirstPhrase = function (str) {
      let words = str.split(" ");
      let finalString = [];
      for (let i = 0; i < words.length; i++) {
            let firstChar = words[i].charAt(0);
            let uppercaseChar = firstChar.toUpperCase();
            let cutString = words[i].slice(1);
            let finalWord = uppercaseChar + cutString;
            finalString.push(finalWord);
      }
      console.log(finalString.join(" "));
};

upperFirstPhrase("hello world");
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/ const cutString = function (string) {
      return string.slice(1, string.length - 1);
};

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
const giveMeRandom = (nu) => {
      const arreyyy = [];
      for (r = 0; r < nu; r++) {
            arreyyy.push(Math.floor(Math.random() * 10));
      }
      return arreyyy;
};
/* SCRIVI QUI LA TUA RISPOSTA */
