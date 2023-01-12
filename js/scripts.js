const ortofrutta = [    // Array ortofrutta
    "Insalata",
    "Pomodorini",
    "Banane",
    "Mele",
    "Patate"
]

const latticini = [     // Array latticini
    "Latte",
    "Yoghurt",
    "Formaggio"
]

const carne = [         // Array carne
    "Petto di pollo",
    "Manzo macinato"
]

const pasta = [         // Array pasta
    "Linguine",
    "Casarecce"
]

const surgelati = [     // Array surgelati 
    "Piselli",
    "Gelato",
    "Minestrone"
]

console.log("ortofrutta", ortofrutta, ortofrutta.length, typeof ortofrutta);
console.log("latticini", latticini, latticini.length, typeof latticini);
console.log("carne", carne, carne.length, typeof carne);
console.log("pasta", ortofrutta, ortofrutta.length, typeof ortofrutta);


// Stampa ortofrutta
let i = 0;
const ortofruttaElement = document.getElementById("ortofrutta");
while (i < ortofrutta.length) {

    console.log(i, ortofrutta[i]);

    const ortofruttaItem = document.createElement('li');
    ortofruttaItem.innerHTML = ortofrutta[i];        
    ortofruttaElement.append(ortofruttaItem);
    i++;
}

// Stampa latticini
const latticiniElement = document.getElementById("latticini");
i = 0;  // AZZERAMENTO i !
while (i < latticini.length) {

    console.log(i, latticini[i]);

    const latticiniItem = document.createElement('li');
    latticiniItem.innerHTML = latticini[i];        
    latticiniElement.append(latticiniItem);
    i++;
}

// Stampa carne
const carneElement = document.getElementById("carne");
i = 0;
while (i < carne.length) {

    console.log(i, carne[i]);

    const carneItem = document.createElement('li');
    carneItem.innerHTML = carne[i];        
    carneElement.append(carneItem);
    i++;
}

// Stampa pasta
const pastaElement = document.getElementById("pasta");
i = 0;
while (i < pasta.length) {

    console.log(i, pasta[i]);

    const pastaItem = document.createElement('li');
    pastaItem.innerHTML = pasta[i];        
    pastaElement.append(pastaItem);
    i++;
}

// Stampa surgelati
const surgelatiElement = document.getElementById("surgelati");
i = 0;
while (i < surgelati.length) {

    console.log(i, surgelati[i]);

    const surgelatiItem = document.createElement('li');
    surgelatiItem.innerHTML = surgelati[i];        
    surgelatiElement.append(surgelatiItem);
    i++;
}