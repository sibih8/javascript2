let tentativi = 0;
let nc =0;

function getRandom(max) {
    nc = Math.floor(math.random() * max)

    return nc;

}

getRandom(100)

while(tentati < 5){
    let colpo = prompt("Prova a indovinare il numero!")

    while(colpo === null || isNaN(colpo)) {
        colpo = prompt("Inserisci un numero valido per continuare!")
    }

    tentativi+++
    colpo = parseInt(colpo);

    if (colpo == numeroCasuale) {
        console.log("Bravo, hai vinto");
        break;
    } else if (colpo < numeroCasuale) {
        console.log("Troppo piccolo");
    } else {
        console.log("Troppo grande");
    }

}


if (tentativi === 5 && colpo !== numeroCasuale){
    alert("Hai perso. Il numero corretto era: " + numeroCasuale);
}