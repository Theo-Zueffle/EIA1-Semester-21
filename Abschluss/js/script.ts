var domSpielfeld:     HTMLElement; 
var absatz:           HTMLElement;
var domElement:       HTMLElement;

var punkteMensch:     number = 0;
var punkteComp:       number = 0;
var anzahlCol:        number;
var anzahlRow:        number;
var indexFeld:        number;
var runden:           number;
var zaehlRunden:      number = 0;
var feldGefunden:     boolean = false;

var gewonnenMensch:   boolean;
var gewonnenComputer: boolean;
var unentschieden:    boolean;
var rGewonnen:        boolean = false;
var rUnentschieden:   boolean = false;

interface Feld {
    column:   number;
    row:      number;
    Mensch:   boolean;
    Computer: boolean;
}
var elementFeld: Feld[];
var feld: Feld[] = [];
/*
 * Welcher Schwierigkeitsgrad wird gewählt, Übergabe von Anzahl Runden und Anzahl Spalten.
 * Beides ist dieselbe Zahl.
 */
window.addEventListener("load", function(): void {
//-----------------------------------------------//    
    let schwerDOMElement: HTMLInputElement;

    schwerDOMElement = document.querySelector("#leicht");
    schwerDOMElement.addEventListener("click", function(): void {
        wie_schwer (3);
    });

    schwerDOMElement = document.querySelector("#mittel");
    schwerDOMElement.addEventListener("click", function(): void {
        wie_schwer (4);
    });

    schwerDOMElement = document.querySelector("#schwer");
    schwerDOMElement.addEventListener("click", function(): void {
        wie_schwer (5);
    });   
});

function wie_schwer (colRow: number): void {
//----------------------------------------------------------//  
    anzahlCol    = colRow;
    anzahlRow    = colRow;
    runden       = colRow;
    zaehlRunden  = 0;
    
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
    for (let indexRow: number = 1 ; indexRow <= colRow; indexRow++) {
        for (let indexCol: number = 1; indexCol <= colRow; indexCol++) {
            /* Feld anlegen im Array */
            feld.push({
                column:   indexCol,
                row:      indexRow,
                Mensch:   false,
                Computer: false
            });
        }
    } 
    // Spielfeld wird gezeichnet 
    drawSpielfeld();
    // der Computer setzt den ersten Stein
    computerSpielt();
}

function drawSpielfeld(): void {
//------------------------------//
    let zaehlerBr:      number = 0;
    let domFeld:        HTMLElement;
    let domElementSF:   HTMLElement;
    let domElementI:    HTMLElement;
    let indexDS:        number;

    // Elemente initialisieren
    //domFeld = document.getElementById("hinweis");
    //domFeld.innerHTML = "";
    domFeld = document.getElementById("weiter");
    domFeld.innerHTML = "";
    domFeld.setAttribute("class" , "");
    domSpielfeld = document.getElementById("Spielfeld");
    // Spielfeld löschen
    domSpielfeld.innerHTML = "";

    // jedes Array-Feld wird als button angelegt
    for (indexDS = 0; indexDS < feld.length; indexDS++) {
        // number to string
        let indFeld: string = indexDS.toString();

        domElementSF = document.createElement("button"); 
        domElementSF.setAttribute("class" , "Feld");
        domElementSF.setAttribute("id" , "b" + indFeld);
        domSpielfeld.appendChild(domElementSF);

        domElementI = document.createElement("i");
        domElementI.setAttribute("class" , "fas square"); 
        domElementI.setAttribute("id" , indFeld);
        domElementSF.appendChild(domElementI);
        // der EventListener hört auf ein button-Feld
        domElementSF.addEventListener("click", function (event: MouseEvent): void { 
            let feldId: string = (event.target as HTMLElement).id;
            console.log("feldid: " + feldId);
            console.log ("Event: " + parseInt(feldId));
            menschSpielt(parseInt(feldId));
        }); 

    //nach jeder Zeile ein br ausgeben
        zaehlerBr++;
        if (zaehlerBr == anzahlCol) {
            absatz = document.createElement("br");
            domSpielfeld.appendChild(absatz);
            zaehlerBr = 0;
        }
    }    
}

function drawKreuz(indexDS: number): void {
/*---------------------------------------*/
/* X für Computer */
    console.log("drawKreuz " + indexDS);
    let indexSt: string = indexDS.toString();
    //<button>
    domElement = document.getElementById("b" + indexSt);
    domElement.setAttribute("disabled" , "true"); 
    //<i>
    domElement = document.getElementById(indexSt);
    domElement.setAttribute("class" , "fas fa-times");
}

function drawCircle(indexDS: number): void {
/*-----------------------------------------*/
/* Kreis für Mensch */
    console.log("drawCircle " + indexDS);
    let indexSt: string = indexDS.toString();
    //<button>
    domElement = document.getElementById("b" + indexSt);
    domElement.setAttribute("disabled" , "true");
    //<i> 
    domElement = document.getElementById(indexSt);
    domElement.setAttribute("class" , "fas fa-circle");
}

function drawNeutral(indexDS: number): void {
    /*-----------------------------------------*/
    /* Leeres Feld */
        console.log("drawNeutral " + indexDS);
        let indexSt: string = indexDS.toString();
        //<button>
        domElement = document.getElementById("b" + indexSt);
        domElement.removeAttribute("disabled"); 
        //<i> 
        domElement = document.getElementById(indexSt);
        domElement.setAttribute("class" , "fas square"); 
    }
    
function computerSpielt(): void {
/*-------------------------------*/  
    console.log ("Computer spielt");
    feldGefunden = false;

    //Sind bereits alle Felder belegt?
    let alleFelderBelegt:  boolean = true; 
    for (indexFeld = 0; indexFeld < feld.length; indexFeld++) {
        if (feld[indexFeld].Mensch == false && feld[indexFeld].Computer == false) {
            alleFelderBelegt = false;
            break;
        } 
    }
    if (alleFelderBelegt == false) {
        
        let indexF: number;
        // es wird ein Array-Index gesucht - random
        let min: number = 0;
        let max: number = (anzahlCol * anzahlRow) - 1;
        indexF = Math.floor(Math.random() * (max - min + 1)) + min;
   
        //Index des neuen Feldes wird gesucht und geprüft, ob es noch frei ist
        sucheFeld (indexF);
    }   
}

function sucheFeld(indexFeld: number): void {
/*-------------------------------------------*/ 
    console.log ("sucheFeld Index " + indexFeld);
 
    if ((feld[indexFeld].Computer == false) && (feld[indexFeld].Mensch == false)) {
           // Feld-Ausprägung Computer wird auf true gesetzt
        feld[indexFeld].Computer = true;
        feld[indexFeld].Mensch = false;
        drawKreuz(indexFeld);
        gewonnen();    
       } 
       // wird kein passendes Array gefunden, werden neue Zahlen gesucht
       else { computerSpielt(); }   
}

function menschSpielt(indexFeld: number): void {
/*--------------------------------------------- */   
    let indexMS: number = indexFeld;
    // Feld-Ausprägung Mensch wird auf true gesetzt
    feld[indexMS].Mensch = true;
    feld[indexMS].Computer = false;
    drawCircle(indexMS);
    gewonnen();
    if (rGewonnen == false) {
        computerSpielt();
    }
}

function gewonnen(): void {
/*-------------------------- */    
    gewonnenMensch   = true;
    gewonnenComputer = true;
    rGewonnen        = false;
    rUnentschieden   = false;

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
            } else {rGewonnen = true; 
                    break;
                }  
        }            
    }  

 // Diagonale (row und col sind gleich) links oben - rechts unten 
    if (rGewonnen == false) {
        for (indexFeld = 0; indexFeld < feld.length; indexFeld++) {
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
        if (gewonnenComputer == false && gewonnenMensch == false) {
            gewonnenComputer = true;
            gewonnenMensch   = true;
        } else { rGewonnen = true;
                }  
    }    
    
    // Diagonalen suchen (anzahlrow-- // anzahlcolumn ++) (rechts oben - links unten ) 
    if (rGewonnen == false) {
        let zaehlerRow: number = 1;
        let zaehlerCol: number = anzahlCol;
        for (indexFeld = 0; indexFeld < feld.length; indexFeld++) {
            if (feld[indexFeld].column == zaehlerCol && feld[indexFeld].row == zaehlerRow ) {
                if (feld[indexFeld].Computer == true) {
                    gewonnenMensch = false;
                }
                if (feld[indexFeld].Mensch == true) {
                    gewonnenComputer = false;
                }
                if (feld[indexFeld].Mensch == false && feld[indexFeld].Computer == false) {
                    gewonnenComputer = false;
                    gewonnenMensch   = false;
                }
                zaehlerCol--;
                zaehlerRow++;
            }
        }    
        if (gewonnenComputer == true || gewonnenMensch == true) {
            rGewonnen = true; 
        }  
    } 
    // unentschieden
    if (rGewonnen == false) {
        rUnentschieden = true;
        for (indexFeld = 0; indexFeld < feld.length - 1; indexFeld++) {
            if (feld[indexFeld].Computer == false && feld[indexFeld].Mensch == false ) {
                rUnentschieden = false;
                break;
            }    
        }    
    }
    if (rGewonnen == true || rUnentschieden == true) {
        ausgabeGewonnen();
    } 
} 

function ausgabeGewonnen(): void {
/*--------------------------------- */  
    let audio: HTMLAudioElement = new Audio ("successtrumpet.mp3") ;

    if (gewonnenComputer == true) {
        punkteComp++;  
    }
    if (gewonnenMensch == true) {
        punkteMensch++;  
    }      
    /* Hinweis geben */

    domElement = document.getElementById ("hinweis");
    if (gewonnenComputer == true) {
        domElement.innerHTML = "Computer hat diese Runde gewonnen!";
    }    
    if (gewonnenMensch == true) {
        domElement.innerHTML = "Du hast diese Runde gewonnen!";
    } 
    if (rUnentschieden == true) {
        domElement.innerHTML = "Unentschieden";
    } 
    domElement = document.getElementById ("PunkteC");
    domElement.innerHTML = "Punkte Computer: " + punkteComp; 

    domElement = document.getElementById ("PunkteM");
    domElement.innerHTML = "Punkte Mensch: " + punkteMensch; 

    domElement = document.getElementById("weiter");
    domElement.addEventListener("click" , function(): void {nextRound(); }); 
    domElement.setAttribute("class" , "weiter");
    domElement.innerHTML = "nächste Runde";

    zaehlRunden++;
    if (zaehlRunden > runden) {
        if (punkteMensch > punkteComp) {
            domElement = document.getElementById ("Sieger");
            domElement.innerHTML = "Du bist der Sieger!"; 
            
        } else if (punkteComp > punkteMensch) {
                domElement = document.getElementById ("Sieger");
                domElement.innerHTML = "Computer ist Sieger!"; 
            } else {
                domElement = document.getElementById ("Sieger");
                domElement.innerHTML = "Unentschieden!"; 
            }
        // Fanfare    
        audio.play();

        domElement = document.getElementById("weiter");
        domElement.innerHTML = "";
        domElement.setAttribute("class" , ""); 
        // Button neues Spiel
        domElement = document.getElementById("neu");
        domElement.addEventListener("click" , function(): void {neuesSpiel(); }); 
        domElement.setAttribute("class" , "neu");
        domElement.innerHTML = "neues Spiel";
    }
}

function nextRound(): void {
/*------------------------- */    
    console.log("nächste Runde");

    gewonnenMensch   = false;
    gewonnenComputer = false;
    unentschieden    = false;
    rGewonnen        = false;
    rUnentschieden   = false;

  /* alle Arrays bekommen Computer = false und Mensch = false */
    for (indexFeld = 0; indexFeld < feld.length; indexFeld++) {
        feld[indexFeld].Computer = false;
        feld[indexFeld].Mensch   = false;
        drawNeutral (indexFeld);
    }    
    domElement = document.getElementById ("hinweis");
    domElement.innerHTML = "";

    domElement = document.getElementById("Runde");
    domElement.innerHTML = ("Runde " + zaehlRunden + " von " + runden);
    computerSpielt();
}
function neuesSpiel(): void {
    console.log ("neues Spiel");
    location.reload();
}
