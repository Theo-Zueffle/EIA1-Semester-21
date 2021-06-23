//var schwerDOMElement: HTMLInputElement;
var domSpielfeld:     HTMLElement; 
var absatz:           HTMLElement;
var domElement:       HTMLElement;
var compSpielt:       boolean;

var punkteMensch:     number = 0;
var punkteComp:       number = 0;
var anzahlCol:        number;
var anzahlRow:        number;
var indexFeld:        number;
var runden:           number;
var zaehlRunden:      number = 0;

var gewonnenMensch:   boolean;
var gewonnenComputer: boolean;
var unentschieden:    boolean;
var rGewonnen:        boolean = false;

interface Feld {
    column:   number;
    row:      number;
    Mensch:   boolean;
    Computer: boolean;
}
var elementFeld: Feld[];
var feld: Feld[] = [];
/*
 * Welcher Schwierigkeitsgrad wird gewählt, Übergabe von Anzahl Runden (falls mal 
   unterschiedlich zu Spalten) und Anzahl Spalten
 */
window.addEventListener("load", function(): void {
//-----------------------------------------------//    
    let schwerDOMElement: HTMLInputElement;

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
//------------------------------//
    let zaehlerBr:      number = 0;
    let domFeld:        HTMLElement;
    let footer:         HTMLElement;
    let domElementSF:   HTMLElement;
    let domElementI:    HTMLElement;
    let indexDS:        number;

    // Elemente initialisieren
    domFeld = document.getElementById("hinweis");
    domFeld.innerHTML = "";
    domFeld = document.getElementById("PunkteM");
    domFeld.innerHTML = "";
    domFeld = document.getElementById("PunkteC");
    domFeld.innerHTML = "";
    domFeld = document.getElementById("weiter");
    domFeld.innerHTML = "";
    domSpielfeld = document.getElementById("Spielfeld");

    domSpielfeld.innerHTML = "";

    // ein Absatz ausgeben
    absatz = document.createElement("br");
    domSpielfeld.appendChild(absatz);

    // jedes Array-Feld wird als button angelegt
    for (indexDS = 0; indexDS < feld.length; indexDS++) {
        let indFeld:        string = indexDS.toString();

        domElementSF = document.createElement("button"); 
        domElementSF.setAttribute("class" , "Feld");
        domElementSF.setAttribute("id" , indFeld);

        if (feld[indexDS].Computer == true) { 
            domElementSF.setAttribute("disabled" , "true"); 
            domSpielfeld.appendChild(domElementSF);

            domElementI = document.createElement("i");
            domElementI.setAttribute("class" , "fas fa-times");
            domElementI.setAttribute("id" , indFeld);
            domElementSF.appendChild(domElementI);
            
        } else if (feld[indexDS].Mensch  == true) { 
            domElementSF.setAttribute("disabled" , "true");
            domSpielfeld.appendChild(domElementSF);

            domElementI = document.createElement("i");
            domElementI.setAttribute("class" , "fas fa-circle"); 
            domElementI.setAttribute("id" , indFeld);
            domElementSF.appendChild(domElementI);
           
        }   else { 
            domSpielfeld.appendChild(domElementSF);
            domElementI = document.createElement("i");
            domElementI.setAttribute("class" , "fas square"); 
            domElementI.setAttribute("id" , indFeld);
            domElementSF.appendChild(domElementI);
        }

        domElementSF.addEventListener("click", function (event: MouseEvent): void { 
            let feldId: string = (event.target as HTMLElement).id;
            console.log ("Event: " + parseInt(feldId));
           
            menschSpielt(parseInt(feldId));
        }); 
        //nach jeder Zeile ein br
        zaehlerBr++;
        if (zaehlerBr == anzahlCol) {
            absatz = document.createElement("br");
            domSpielfeld.appendChild(absatz);
            zaehlerBr = 0;
        }
    }
    //Ausgabe des Footers
    domSpielfeld = document.getElementById("Spielfeld");
    footer = document.createElement("footer");
    footer.innerHTML = "Theo Züffle, MatrikelNr: 268027";
    domSpielfeld.appendChild(footer);
}

function wie_schwer (runden: number, colRow: number): void {
//----------------------------------------------------------//  
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
/*-------------------------------*/  
    console.log ("Computer spielt");
    compSpielt = true;
    let indexF: number;

    // es wird ein Array-Index gesucht - random
    let min: number = 0;
    let max: number = (anzahlCol * anzahlRow) - 1;
    indexF = Math.floor(Math.random() * (max - min + 1)) + min;
   
    //Index des neuen Feldes wird gesucht und geprüft, ob es noch frei ist

    console.log ("Index vor Suche: " + indexF);

    sucheFeld (indexF);

    let showFeld: Feld = feld [indexF];
    console.log ("Feld:" + showFeld);

    // Feld-Ausprägung Computer wird auf true gesetzt
    feld[indexF].Computer = true;
    drawSpielfeld();
    //gewonnen();
}

function sucheFeld(indexFeld: number): void {
/*-------------------------------------------*/ 
    console.log ("sucheFeld Index " + indexFeld);

    if (feld[indexFeld].Computer == false && feld[indexFeld].Mensch == false) {
        console.log (" GEFUNDEN sucheFeld index " + indexFeld);
       } 
       // wird kein passendes Array gefunden, werden neue Zahlen gesucht
       else { computerSpielt(); }   
}

function menschSpielt(indexFeld: number): void {
/*--------------------------------------------- */    
    console.log("Mensch spielt Index " + indexFeld);
    compSpielt = false;
    // Feld-Ausprägung Mensch wird auf true gesetzt
    feld[indexFeld].Mensch = true;
    //drawSpielfeld();
    //gewonnen();
    if (rGewonnen == false) {
        computerSpielt();
    }
}

function gewonnen(): void {
/*-------------------------- */    
    console.log ("Function GEWONNEN");
    
    gewonnenMensch   = true;
    gewonnenComputer = true;
    rGewonnen = false;

    // für jede Spalte wird geschaut, ob es nur Mensch, oder nur Computer gibt,
    // falls nicht - nicht gewonnen
    for (let indexCol: number = 1; indexCol <= anzahlCol; indexCol++) {
        for (indexFeld = 0; indexFeld < feld.length; indexFeld++) {
        
            if (feld[indexFeld].column == indexCol) {
                if (feld[indexFeld].Mensch == true) {
                    gewonnenComputer = false;
                }
                if (feld[indexFeld].Computer == true) {
                    gewonnenMensch = false;
                }
                if (feld[indexFeld].Mensch == false && feld[indexFeld].Computer == false) {
                    gewonnenComputer = false;
                    gewonnenMensch   = false;
                }
            }
        }
    // in der  Spalte hat keiner gewonnen, nächste Spalte
        if (gewonnenComputer == false && gewonnenMensch == false) {
            gewonnenComputer = true;
            gewonnenMensch   = true;
        } else {rGewonnen = true;
                break; }    
    }
     // für jede Zeile wird geschaut, ob es nur Mensch, oder nur Computer gibt,
    // falls nicht - nicht gewonnen
    if (rGewonnen == false) {
        for (let indexRow: number = 1; indexRow <= anzahlRow; indexRow++) {
            for (indexFeld = 0; indexFeld < feld.length; indexFeld++) {
        
                if (feld[indexFeld].row == indexRow) {
                    if (feld[indexFeld].Mensch == true) {
                        gewonnenComputer = false;
                    }
                    if (feld[indexFeld].Computer == true) {
                        gewonnenMensch = false;
                    }
                    if (feld[indexFeld].Mensch == false && feld[indexFeld].Computer == false) {
                        gewonnenComputer = false;
                        gewonnenMensch   = false;
                    }
                }
            }
            if (gewonnenComputer == false && gewonnenMensch == false) {
                gewonnenComputer = true;
                gewonnenMensch   = true;
            } else {rGewonnen = true; }  
        }              
    }   
/*     
    
    if (gewonnen == false) {
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
            if (gewonnenComputer == false && gewonnenMensch == false) {
                gewonnenComputer = true;
                gewonnenMensch   = true;
            } else {gewonnen = true; }  
        }
    }    

    // in der  Zeile hat keiner gewonnen, deshalb in der Diagonalen suchen (anzahlrow-- // anzahlcolumn ++)
    if (gewonnen == false) {
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
            }
            if (gewonnenComputer == false && gewonnenMensch == false) {
                gewonnenComputer = true;
                gewonnenMensch   = true;
            } else {gewonnen = true; }  
            zaehlerCol--;
            zaehlerRow++;
        }
    }  
    if (gewonnen == true) {
        ausgabeGewonnen();
    }  */
} 

function ausgabeGewonnen(): void {
/*--------------------------------- */    
    console.log ("Ausgabe gewonnen");
    if (gewonnenComputer == true) {
        punkteComp++;    
        console.log("Punkte Computer" + punkteComp); 
      /* Hinweis geben */
        domElement = document.getElementById ("hinweis");
        domElement.innerHTML = "Computer hat diese Runde gewonnen!";

        domElement = document.getElementById ("PunkteC");
        domElement.innerHTML = "Punkte Computer: " + punkteComp; 

        domElement = document.getElementById("weiter");
        domElement.setAttribute("class" , "");
        domElement.addEventListener("click" , function(): void {nextRound(); }); 
        domElement.setAttribute("class" , "weiter");
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

        domElement = document.getElementById ("PunkteM");
        domElement.innerHTML = "Punkte Mensch: " + punkteMensch; 

        runden++;
        if (runden > zaehlRunden) {
            domElement = document.getElementById ("Sieger");
            domElement.innerHTML = "Du bist der Sieger!"; 

            domElement = document.getElementById("weiter");
            domElement.setAttribute("class" , "");
            domElement.addEventListener("click" , function(): void {nextRound(); }); 
        } else {
            domElement = document.getElementById("weiter");
            domElement.setAttribute("class" , "weiter");
            domElement.innerHTML = "nächste Runde"; }
    }    
}

function nextRound(): void {
/*------------------------- */    
    console.log("nächste Runde");
}
