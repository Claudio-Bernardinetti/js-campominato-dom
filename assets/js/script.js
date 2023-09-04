/* Consegna

Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.

In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).

Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

///////////////////////////////////////////////////////

BONUS:
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:

difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;

difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;

difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

///////////////////////////////////////////////////////////////////
Consigli del giorno: :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
pensiamo a queli strumenti ci servono, ad esempio: Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Eventuali validazioni e i controlli possiamo farli anche in un secondo momento. */


////////////////////////////////////////////////////////////////////
// Ogni volta che clicco su un quadrato questo si colora di verde

document.querySelector('.play').addEventListener('click', ()=> {

    const difficultySelect = document.querySelector('.difficulty');
    let limit = Number(difficultySelect.value);

    // Loop while per generare 16 bombs con Math.random.
    const bombs = [];
    while (bombs.length < 16) {
        const bomb = Math.floor(Math.random() * limit) + 1;
        
        if (!bombs.includes(bomb)) {
            bombs.push(bomb);
        }
    }
    console.log(`Nelle caselle ${bombs} c'e' una Bomba`);
    
    function generateField(domElement, limit) {
        
        // Pulisci la griglia esistente.
        domElement.innerHTML = '';

        // Creare in JavaScript una griglia. 
        // genero il campo da gioco 
        for (let i = 0; i < limit; i++) {

            // Cambio disposizione cell.
            const cellElement = document.createElement('div')

            if (limit === 100) {
                cellElement.className = 'cell';
                //caselle per 10 righe

            } else if (limit === 81) {
                cellElement.className = 'cell2';
                //caselle per 9 righe

            } else if (limit === 49) {
                cellElement.className = 'cell3';
                //caselle per 7 righe
            }

            
            cellElement.append(i + 1);
            domElement.append(cellElement);
        

                cellElement.addEventListener('click', function () {
                    if (bombs.includes(i + 1)) {
                    this.classList.add('bg-red');
                    this.textContent = '💣';
                    console.log(`Cella numero ${i + 1} BOMB`);
                    // Casella rossa e bomba

                    } else {
                    this.classList.toggle('bg-blue');
                    console.log(`Cella numero ${i + 1}`);
                    // Casella blu e numero
                    }

                });
                
               
        }

    }
    
    const fieldElement = document.querySelector('.square')
    generateField(fieldElement, limit)
    

    
});

document.querySelector('.reset').addEventListener('click', () => {
    
    const fieldElement = document.querySelector('.square');
    
    // Rimuovi tutte le celle dal cmpo di gioco
    
    while (fieldElement.firstChild) {
        fieldElement.removeChild(fieldElement.firstChild);
    }
    
    // Pulisci la console
    
    console.clear();
    
});




  