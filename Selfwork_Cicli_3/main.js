
let scelta;

do {

    scelta = false;
    let selezione = prompt('Seleziona un numero per scegliere la bevanda: \n 1 - Acqua \n 2 - Coca cola \n 3 - Birra');

    switch (selezione) {

        case '1':
            console.log('E’ stata selezionata l’acqua');

            break;
        case '2':
            console.log('E’ stata selezionata coca cola');

            break;
        case '3':
            console.log('E’ stata selezionata birra');

            break;

        default:
            scelta = true;

    }

} while (scelta);


