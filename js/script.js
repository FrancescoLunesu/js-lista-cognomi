// Chiedere all’utente il cognome
// inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
// stampa la lista ordinata alfabeticamente
// scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova

// Creo array contente i cognomi
var cognomi = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"];
// Permetto all'utente di inserise il proprio cognome con prompt e lo pusho nell'array
var nuovoCognome = prompt("Inserisci il tuo cognome");
// Imposto UpperCase alla prima lettera del cognome e LowerCase a tutte le altre
var primaLet = nuovoCognome.charAt(0).toUpperCase();
var altreLet = nuovoCognome.slice(1).toLowerCase();
var nuovoCognome = primaLet + altreLet;
cognomi.push(nuovoCognome);
// i cognomi vengono ordinati alfabeticamente e visualizzo contenuto Array
cognomi.sort();
console.log(cognomi);
// PROVA VISUALIZZAZIONE ARRAY
// document.getElementById("listaCognomi").innerHTML = cognomi;

// Controllo la "posizione umana" del cognome inserito all'interno dell'array
// impostando posizione = -1 e nel while posizione == -1 il risultato non cambia (??)
var posizione = -1;
var i =0;
while (i < cognomi.length && posizione == -1) {
  if (nuovoCognome == cognomi[i]) {
    posizione = ++i;
  }
  i++;
}
// Visualizzo su schermo il risultato del ciclo e delle condizioni
document.getElementById("position").innerHTML = "Il tuo cognome si trova alla posizione numero:" + " " + posizione;
