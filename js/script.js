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
var posizione = 0;
var i =0;
while (i < cognomi.length && posizione ==0) {
  if (nuovoCognome == cognomi[i]) {
    posizione = ++i;
  }
  i++;
}
document.getElementById("position").innerHTML = "Il tuo cognome si trova alla posizione numero:" + " " + posizione;
