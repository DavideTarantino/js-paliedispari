function isParolaInvertita(parola) {
    
    // La parola viene invertita
    let parolaInvertita = parola.split('').reverse().join('');

    // La parola originale viene confrontata con quella invertita
    return parola === parolaInvertita;
}

// Richiesta di inserimento della parola 
let parolaUtente = prompt("Inserisci una parola:");

// Condizione per capire se la parola sia palindroma
if (isParolaInvertita(parolaUtente)) {
    document.getElementById("responso").innerHTML = "La parola inserita è palindroma"
} else {
    document.getElementById("responso").innerHTML = "La parola inserita non è palindroma."
}