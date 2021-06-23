//var schwerDOMElement: HTMLInputElement;
var domSpielfeld;
var absatz;
var domElement;
var compSpielt;
var punkteMensch = 0;
var punkteComp = 0;
var anzahlCol;
var anzahlRow;
var indexFeld;
var runden;
var zaehlRunden = 0;
var gewonnenMensch;
var gewonnenComputer;
var unentschieden;
var rGewonnen = false;
var elementFeld;
var feld = [];
/*
 * Welcher Schwierigkeitsgrad wird gewählt, Übergabe von Anzahl Runden (falls mal
   unterschiedlich zu Spalten) und Anzahl Spalten
 */
window.addEventListener("load", function () {
    //-----------------------------------------------//    
    var schwerDOMElement;
    schwerDOMElement = document.querySelector("#leicht");
    schwerDOMElement.addEventListener("click", function () {
        wie_schwer(3, 3);
    });
    schwerDOMElement = document.querySelector("#mittel");
    schwerDOMElement.addEventListener("click", function () {
        wie_schwer(4, 4);
    });
    schwerDOMElement = document.querySelector("#schwer");
    schwerDOMElement.addEventListener("click", function () {
        wie_schwer(5, 5);
    });
    //drawSpielfeld();
});
function drawSpielfeld() {
    //------------------------------//
    var zaehlerBr = 0;
    var domFeld;
    var footer;
    var domElementSF;
    var domElementI;
    var indexDS;
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
        var indFeld = indexDS.toString();
        domElementSF = document.createElement("button");
        domElementSF.setAttribute("class", "Feld");
        domElementSF.setAttribute("id", indFeld);
        if (feld[indexDS].Computer == true) {
            domElementSF.setAttribute("disabled", "true");
            domSpielfeld.appendChild(domElementSF);
            domElementI = document.createElement("i");
            domElementI.setAttribute("class", "fas fa-times");
            domElementI.setAttribute("id", indFeld);
            domElementSF.appendChild(domElementI);
        }
        else if (feld[indexDS].Mensch == true) {
            domElementSF.setAttribute("disabled", "true");
            domSpielfeld.appendChild(domElementSF);
            domElementI = document.createElement("i");
            domElementI.setAttribute("class", "fas fa-circle");
            domElementI.setAttribute("id", indFeld);
            domElementSF.appendChild(domElementI);
        }
        else {
            domSpielfeld.appendChild(domElementSF);
            domElementI = document.createElement("i");
            domElementI.setAttribute("class", "fas square");
            domElementI.setAttribute("id", indFeld);
            domElementSF.appendChild(domElementI);
        }
        domElementSF.addEventListener("click", function (event) {
            var feldId = event.target.id;
            console.log("Event: " + parseInt(feldId));
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
function wie_schwer(runden, colRow) {
    //----------------------------------------------------------//  
    anzahlCol = colRow;
    anzahlRow = colRow;
    /* Die Eingabe des Schwierigkeitsgrads wird gesperrt */
    domElement = document.getElementById("fieldset");
    domElement.setAttribute("disabled", "true");
    /* Hinweis geben */
    domElement = document.getElementById("hinweis");
    domElement.innerHTML = "du bist am Zug";
    /* erste Runde anzeigen */
    domElement = document.getElementById("Runde");
    domElement.innerHTML = "Runde 1 von " + runden;
    zaehlRunden++;
    /* Schleifen: es wird für jedes Feld ein Array erzeugt, das
    *  die Koordinaten von Spalte und Zeile enthält */
    for (var indexCol = 1; indexCol <= colRow; indexCol++) {
        for (var indexRow = 1; indexRow <= colRow; indexRow++) {
            /* Feld anlegen im Array */
            feld.push({
                column: indexCol,
                row: indexRow,
                Mensch: false,
                Computer: false
            });
        }
    }
    computerSpielt();
}
function computerSpielt() {
    /*-------------------------------*/
    console.log("Computer spielt");
    compSpielt = true;
    var indexF;
    // es wird ein Array-Index gesucht - random
    var min = 0;
    var max = (anzahlCol * anzahlRow) - 1;
    indexF = Math.floor(Math.random() * (max - min + 1)) + min;
    //Index des neuen Feldes wird gesucht und geprüft, ob es noch frei ist
    console.log("Index vor Suche: " + indexF);
    sucheFeld(indexF);
    var showFeld = feld[indexF];
    console.log("Feld:" + showFeld);
    // Feld-Ausprägung Computer wird auf true gesetzt
    feld[indexF].Computer = true;
    drawSpielfeld();
    //gewonnen();
}
function sucheFeld(indexFeld) {
    /*-------------------------------------------*/
    console.log("sucheFeld Index " + indexFeld);
    if (feld[indexFeld].Computer == false && feld[indexFeld].Mensch == false) {
        console.log(" GEFUNDEN sucheFeld index " + indexFeld);
    }
    // wird kein passendes Array gefunden, werden neue Zahlen gesucht
    else {
        computerSpielt();
    }
}
function menschSpielt(indexFeld) {
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
function gewonnen() {
    /*-------------------------- */
    console.log("Function GEWONNEN");
    gewonnenMensch = true;
    gewonnenComputer = true;
    rGewonnen = false;
    // für jede Spalte wird geschaut, ob es nur Mensch, oder nur Computer gibt,
    // falls nicht - nicht gewonnen
    for (var indexCol = 1; indexCol <= anzahlCol; indexCol++) {
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
                    gewonnenMensch = false;
                }
            }
        }
        // in der  Spalte hat keiner gewonnen, nächste Spalte
        if (gewonnenComputer == false && gewonnenMensch == false) {
            gewonnenComputer = true;
            gewonnenMensch = true;
        }
        else {
            rGewonnen = true;
            break;
        }
    }
    // für jede Zeile wird geschaut, ob es nur Mensch, oder nur Computer gibt,
    // falls nicht - nicht gewonnen
    if (rGewonnen == false) {
        for (var indexRow = 1; indexRow <= anzahlRow; indexRow++) {
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
                        gewonnenMensch = false;
                    }
                }
            }
            if (gewonnenComputer == false && gewonnenMensch == false) {
                gewonnenComputer = true;
                gewonnenMensch = true;
            }
            else {
                rGewonnen = true;
            }
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
function ausgabeGewonnen() {
    /*--------------------------------- */
    console.log("Ausgabe gewonnen");
    if (gewonnenComputer == true) {
        punkteComp++;
        console.log("Punkte Computer" + punkteComp);
        /* Hinweis geben */
        domElement = document.getElementById("hinweis");
        domElement.innerHTML = "Computer hat diese Runde gewonnen!";
        domElement = document.getElementById("PunkteC");
        domElement.innerHTML = "Punkte Computer: " + punkteComp;
        domElement = document.getElementById("weiter");
        domElement.setAttribute("class", "");
        domElement.addEventListener("click", function () { nextRound(); });
        domElement.setAttribute("class", "weiter");
        domElement.innerHTML = "nächste Runde";
        runden++;
        if (runden > zaehlRunden) {
            domElement = document.getElementById("Sieger");
            domElement.innerHTML = "Computer ist Sieger!";
        }
    }
    if (gewonnenMensch == true) {
        punkteMensch++;
        /* Hinweis geben */
        domElement = document.getElementById("hinweis");
        domElement.innerHTML = "Du hast diese Runde gewonnen!";
        domElement = document.getElementById("PunkteM");
        domElement.innerHTML = "Punkte Mensch: " + punkteMensch;
        runden++;
        if (runden > zaehlRunden) {
            domElement = document.getElementById("Sieger");
            domElement.innerHTML = "Du bist der Sieger!";
            domElement = document.getElementById("weiter");
            domElement.setAttribute("class", "");
            domElement.addEventListener("click", function () { nextRound(); });
        }
        else {
            domElement = document.getElementById("weiter");
            domElement.setAttribute("class", "weiter");
            domElement.innerHTML = "nächste Runde";
        }
    }
}
function nextRound() {
    /*------------------------- */
    console.log("nächste Runde");
}
//# sourceMappingURL=script.js.map