function generaNumeroRandom() {
    return Math.floor(Math.random() * 5) + 1;
}

function isPari(numero) {
    return numero % 2 === 0;
}

function gioca() {
    let sceltaUtente = document.getElementById("sceltaUtente").value;
    let numeroUtente = parseInt(document.getElementById("numeroUtente").value);

    // Validazione dell'input
    if (isNaN(numeroUtente) || numeroUtente < 1 || numeroUtente > 5) {
        alert("Inserisci un numero valido da 1 a 5.");
        return;
    }

    let numeroComputer = generaNumeroRandom();
    let somma = numeroUtente + numeroComputer;

    alert("Il computer ha scelto: " + numeroComputer);

    if ((isPari(somma) && sceltaUtente === "pari") || (!isPari(somma) && sceltaUtente === "dispari")) {
        alert("Hai vinto!");
    } else {
        alert("Hai perso!");
    }
}
