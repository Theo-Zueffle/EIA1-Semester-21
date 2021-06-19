/* G L O B A L E    V A R I A B L E N */
var schwerDOMElement: HTMLInputElement;
var domSpielfeld:     HTMLElement; 
var domFeld:          HTMLElement;
var absatz:           HTMLElement;
var footer:           HTMLElement;
var domElement:       HTMLElement;

var punkteMensch:     number;
var punkteComp:       number;
var anzahlCol:        number;
var anzahlRow:        number;
var indexFeld:        number;
var runden:           number;
var zaehlRunden:      number = 0;

var gewonnenMensch:   boolean;
var gewonnenComputer: boolean;

interface Feld {
    column:   number;
    row:      number;
    Mensch:   boolean;
    Computer: boolean;
}
var elementFeld: Feld[];
var feld: Feld[] = [];
/*
 * Welcher Schwierigkeitsgrad wird gewählt, Übergabe von Anzahl Runden (falls mal unterschiedlich zu Spalten)
 * und Anzahl Spalten
 */
window.addEventListener("load", function(): void {
    schwerDOMElement = document.querySelector("#leicht");
    schwerDOMElement.addEventListener("click", function(): void {
        wie_schwer (3 , 3);
    });

    schwerDOMElement = document.querySelector("#mittel");
    schwerDOMElement.addEventListener("click", function(): void {
        wie_schwer (4 , 4);
    });

    schwerDOMElement = document.querySelector("#schwer");
    schwerDOMElement.addEventListener("click", function(): void {
        wie_schwer (5 , 5);
    });   
    //drawSpielfeld();
});

function drawSpielfeld(): void {
    let zaehlerBr:    number = 0;
    let domElementSF: HTMLElement;

    domSpielfeld = document.getElementById("Spielfeld");
    domSpielfeld.innerHTML = "";
    absatz = document.createElement("br");
    domSpielfeld.appendChild(absatz);


    for (indexFeld = 0; indexFeld < feld.length; indexFeld++) {
        let indFeld: string = indexFeld.toString();

        domFeld = document.createElement("button"); 
        domFeld.setAttribute("class" , "Feld");
        domFeld.setAttribute("id" , indFeld);

        console.log ("index: " + indexFeld);
        console.log ("Feld Computer: " + feld[indexFeld].Computer);
        console.log ("Feld Mensch: " + feld[indexFeld].Mensch);
        console.log ("");

        if (feld[indexFeld].Computer == true) { 
            domFeld.innerHTML = "<i class='fas fa-times'></i>";
            domFeld.setAttribute("disabled" , "true"); 
            
        } else if (feld[indexFeld].Mensch  == true) { 
            domFeld.innerHTML = "<i class='fas fa-circle'></i>"; 
            domFeld.setAttribute("disabled" , "true");

        }   else { domFeld.innerHTML = "<i class='fas square'></i>"; }
        
        domSpielfeld.appendChild(domFeld);
 // Hilfe hier: Es kommen immer alle Elemente zurück und nicht das eine, dass geclickt wurde
 // Hab es mit button und .Feld ausprobiert
        domElementSF = document.querySelector("button");
        domElementSF.addEventListener("click", function (event: Event): void { 
            console.log ("Event: " + event.target);
            //menschSpielt(indexFeld);
        }); 

        zaehlerBr++;
        if (zaehlerBr == anzahlCol) {
            absatz = document.createElement("br");
            domSpielfeld.appendChild(absatz);
            zaehlerBr = 0;
        }
    }
}

function ermittleFeldGeclickt (ziel: MouseEvent): void {
    let value: number = ziel.button;
    console.log ("Target: " + value + "wurde geklickt")
}

function wie_schwer (runden: number, colRow: number): void {
  
    anzahlCol    = colRow;
    anzahlRow    = colRow;

    /* Die Eingabe des Schwierigkeitsgrads wird gesperrt */
    domElement = document.getElementById ("fieldset");
    domElement.setAttribute("disabled" , "true");

    /* Hinweis geben */
    domElement = document.getElementById ("hinweis");
    domElement.innerHTML = "du bist am Zug";

    /* erste Runde anzeigen */
    domElement = document.getElementById ("Runde");
    domElement.innerHTML = "Runde 1 von " + runden;
    zaehlRunden++;
    
    /* Schleifen: es wird für jedes Feld ein Array erzeugt, das
    *  die Koordinaten von Spalte und Zeile enthält */
    for (let indexCol: number = 1 ; indexCol <= colRow; indexCol++) {
        for (let indexRow: number = 1; indexRow <= colRow; indexRow++) {
                /* Feld anlegen im Array */
            feld.push({
                column:   indexCol,
                row:      indexRow,
                Mensch:   false,
                Computer: false
            });
        }
    }  
    computerSpielt();
}

function computerSpielt(): void {
    console.log ("Computer spielt");
    // es wird ein Array-Index gesucht
    let min: number = 0;
    let max: number = (anzahlCol * anzahlRow) - 1;
    indexFeld = Math.floor((Math.random() * max) + min);
   
    //Index des neuen Feldes wird gesucht und geprüft, ob es noch frei ist
    sucheFeld (indexFeld);
    // Feld-Ausprägung Computer wird auf true gesetzt
    feld[indexFeld].Computer = true;
    drawSpielfeld();
 //   gewonnen();
}

function sucheFeld(indexFeld: number): void {
    console.log ("sucheFeld Index " + indexFeld);
    if (feld[indexFeld].Computer == false && feld[indexFeld].Mensch == false) {
        console.log (" GEFUNDEN sucheFeld index " + indexFeld);
       } 
       // wird kein passendes Array gefunden, werden neue Zahlen gesucht
       else(computerSpielt() );     
    }

function menschSpielt(indexFeld: number): void {
    console.log("Mensch spielt Index " + indexFeld);
    
    //Index des neuen Feldes wird gesucht und geprüft, ob es noch frei ist
    sucheFeld (indexFeld);
    // Feld-Ausprägung Computer wird auf true gesetzt
    feld[indexFeld].Mensch = true;
    drawSpielfeld();
    gewonnen();

}

function gewonnen(): void {
    console.log ("Function GEWONNEN");
    
    gewonnenMensch   = true;
    gewonnenComputer = true;

    // für jede Spalte wird geschaut, ob es nur Mensch, oder nur Computer gibt,
    // falls nicht - nicht gewonnen
    for (let indexCol: number = 1; indexCol <= anzahlCol; indexCol++) {
        for (indexFeld = 0; indexFeld < feld.length - 1; indexFeld++) {
        
            if (feld[indexFeld].column == indexCol) {
                if (feld[indexFeld].Mensch == true) {
                    gewonnenComputer = false;
                }
            }
            if (feld[indexFeld].column == indexCol) {
                if (feld[indexFeld].Computer == true) {
                    gewonnenMensch = false;
                }
            }
            if (feld[indexFeld].column == indexCol) {
                if (feld[indexFeld].Computer == false && feld[indexFeld].Mensch == false ) {
                    gewonnenMensch   = false;
                    gewonnenComputer = false;
                }
            }
        }
    }    
    // in der  Spalte hat keiner gewonnen, deshalb in der Zeile suchen
    if (gewonnenComputer == false && gewonnenMensch == false) {
        gewonnenComputer = true;
        gewonnenMensch   = true;
    
     // für jede Zeile wird geschaut, ob es nur Mensch, oder nur Computer gibt,
    // falls nicht - nicht gewonnen
        for (let indexRow: number = 1; indexRow <= anzahlRow; indexRow++) {
            for (indexFeld = 0; indexFeld < feld.length - 1; indexFeld++) {
        
                if (feld[indexFeld].row == indexRow) {
                    if (feld[indexFeld].Mensch == true) {
                        gewonnenComputer = false;
                    }
                }
                if (feld[indexFeld].row == indexRow) {
                    if (feld[indexFeld].Computer == true) {
                        gewonnenMensch = false;
                    }
                }
                if (feld[indexFeld].row == indexRow) {
                    if (feld[indexFeld].Computer == false && feld[indexFeld].Mensch == false ) {
                        gewonnenMensch   = false;
                        gewonnenComputer = false;
                    }
                }
            }    
        }
    }   else { ausgabeGewonnen(); } 

      // in der  Zeile hat keiner gewonnen, deshalb in der Diagonalen suchen (row = column)
    if (gewonnenComputer == false && gewonnenMensch == false) {
        gewonnenComputer = true;
        gewonnenMensch   = true;
        
        for (indexFeld = 0; indexFeld < feld.length - 1; indexFeld++) {
            if (feld[indexFeld].column == feld[indexFeld].row) {
                if (feld[indexFeld].Computer == true) {
                    gewonnenMensch = false;
                }
                if (feld[indexFeld].Mensch == true) {
                    gewonnenComputer = false;
                }
                if (feld[indexFeld].Computer == false && feld[indexFeld].Mensch == false ) {
                    gewonnenMensch   = false;
                    gewonnenComputer = false;
                }
            }
        }
    }   else { ausgabeGewonnen(); } 

    // in der  Zeile hat keiner gewonnen, deshalb in der Diagonalen suchen (anzahlrow-- // anzahlcolumn ++)
    if (gewonnenComputer == false && gewonnenMensch == false) {
        gewonnenComputer = true;
        gewonnenMensch   = true;
    
        let zaehlerRow: number = anzahlCol;
        let zaehlerCol: number = 1;
        for (indexFeld = 0; indexFeld < feld.length - 1; indexFeld++) {
            if (feld[indexFeld].column == anzahlCol) {
                if (feld[indexFeld].Computer == true) {
                    gewonnenMensch = false;
                }
                if (feld[indexFeld].Mensch == true) {
                    gewonnenComputer = false;
                }
                if (feld[indexFeld].Computer == false && feld[indexFeld].Mensch == false ) {
                    gewonnenMensch   = false;
                    gewonnenComputer = false;
                }
            }
            zaehlerCol--;
            zaehlerRow++;
        }
    } else { ausgabeGewonnen(); }
}


function ausgabeGewonnen(): void {
    if (gewonnenComputer == true) {
        punkteComp++;     
      /* Hinweis geben */
        domElement = document.getElementById ("hinweis");
        domElement.innerHTML = "Computer hat diese Runde gewonnen!";
        domElement = document.getElementById("weiter");
        domElement.innerHTML = "nächste Runde";
        runden++;
        if (runden > zaehlRunden) {
            domElement = document.getElementById ("Sieger");
            domElement.innerHTML = "Computer ist Sieger!"; 
        }
    }

    if (gewonnenMensch == true) {
        punkteMensch++;     
      /* Hinweis geben */
        domElement = document.getElementById ("hinweis");
        domElement.innerHTML = "Du hast diese Runde gewonnen!";
        domElement = document.getElementById("weiter");
        domElement.innerHTML = "nächste Runde";
        runden++;
        if (runden > zaehlRunden) {
            domElement = document.getElementById ("Sieger");
            domElement.innerHTML = "Du bist der Sieger!"; 
        }
    }    
}
