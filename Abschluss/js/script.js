/* G L O B A L E    V A R I A B L E N */
var schwerDOMElement;
var domSpielfeld;
var domFeld;
var absatz;
var footer;
var domElement;
var punkteMensch;
var punkteComp;
var anzahlCol;
var anzahlRow;
var indexFeld;
var runden;
var zaehlRunden = 0;
var gewonnenMensch;
var gewonnenComputer;
var elementFeld;
var feld = [];
/*
 * Welcher Schwierigkeitsgrad wird gewählt, Übergabe von Anzahl Runden (falls mal unterschiedlich zu Spalten)
 * und Anzahl Spalten
 */
window.addEventListener("load", function () {
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
    var zaehlerBr = 0;
    var domElementSF;
    domSpielfeld = document.getElementById("Spielfeld");
    domSpielfeld.innerHTML = "";
    absatz = document.createElement("br");
    domSpielfeld.appendChild(absatz);
    for (indexFeld = 0; indexFeld < feld.length; indexFeld++) {
        var indFeld = indexFeld.toString();
        domFeld = document.createElement("button");
        domFeld.setAttribute("class", "Feld");
        domFeld.setAttribute("id", indFeld);
        console.log("index: " + indexFeld);
        console.log("Feld Computer: " + feld[indexFeld].Computer);
        console.log("Feld Mensch: " + feld[indexFeld].Mensch);
        console.log("");
        if (feld[indexFeld].Computer == true) {
            domFeld.innerHTML = "<i class='fas fa-times'></i>";
            domFeld.setAttribute("disabled", "true");
        }
        else if (feld[indexFeld].Mensch == true) {
            domFeld.innerHTML = "<i class='fas fa-circle'></i>";
            domFeld.setAttribute("disabled", "true");
        }
        else {
            domFeld.innerHTML = "<i class='fas square'></i>";
        }
        domSpielfeld.appendChild(domFeld);
        // Hilfe hier: Es kommen immer alle Elemente zurück und nicht das eine, dass geclickt wurde
        // Hab es mit button und .Feld ausprobiert
        domElementSF = document.querySelector("button");
        domElementSF.addEventListener("click", function (event) {
            console.log("Event: " + event.target);
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
function ermittleFeldGeclickt(ziel) {
    var value = ziel.button;
    console.log("Target: " + value + "wurde geklickt");
}
function wie_schwer(runden, colRow) {
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
    console.log("Computer spielt");
    // es wird ein Array-Index gesucht
    var min = 0;
    var max = (anzahlCol * anzahlRow) - 1;
    indexFeld = Math.floor((Math.random() * max) + min);
    //Index des neuen Feldes wird gesucht und geprüft, ob es noch frei ist
    sucheFeld(indexFeld);
    // Feld-Ausprägung Computer wird auf true gesetzt
    feld[indexFeld].Computer = true;
    drawSpielfeld();
    //   gewonnen();
}
function sucheFeld(indexFeld) {
    console.log("sucheFeld Index " + indexFeld);
    if (feld[indexFeld].Computer == false && feld[indexFeld].Mensch == false) {
        console.log(" GEFUNDEN sucheFeld index " + indexFeld);
    }
    // wird kein passendes Array gefunden, werden neue Zahlen gesucht
    else
        (computerSpielt());
}
function menschSpielt(indexFeld) {
    console.log("Mensch spielt Index " + indexFeld);
    //Index des neuen Feldes wird gesucht und geprüft, ob es noch frei ist
    sucheFeld(indexFeld);
    // Feld-Ausprägung Computer wird auf true gesetzt
    feld[indexFeld].Mensch = true;
    drawSpielfeld();
    gewonnen();
}
function gewonnen() {
    console.log("Function GEWONNEN");
    gewonnenMensch = true;
    gewonnenComputer = true;
    // für jede Spalte wird geschaut, ob es nur Mensch, oder nur Computer gibt,
    // falls nicht - nicht gewonnen
    for (var indexCol = 1; indexCol <= anzahlCol; indexCol++) {
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
                if (feld[indexFeld].Computer == false && feld[indexFeld].Mensch == false) {
                    gewonnenMensch = false;
                    gewonnenComputer = false;
                }
            }
        }
    }
    // in der  Spalte hat keiner gewonnen, deshalb in der Zeile suchen
    if (gewonnenComputer == false && gewonnenMensch == false) {
        gewonnenComputer = true;
        gewonnenMensch = true;
        // für jede Zeile wird geschaut, ob es nur Mensch, oder nur Computer gibt,
        // falls nicht - nicht gewonnen
        for (var indexRow = 1; indexRow <= anzahlRow; indexRow++) {
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
                    if (feld[indexFeld].Computer == false && feld[indexFeld].Mensch == false) {
                        gewonnenMensch = false;
                        gewonnenComputer = false;
                    }
                }
            }
        }
    }
    else {
        ausgabeGewonnen();
    }
    // in der  Zeile hat keiner gewonnen, deshalb in der Diagonalen suchen (row = column)
    if (gewonnenComputer == false && gewonnenMensch == false) {
        gewonnenComputer = true;
        gewonnenMensch = true;
        for (indexFeld = 0; indexFeld < feld.length - 1; indexFeld++) {
            if (feld[indexFeld].column == feld[indexFeld].row) {
                if (feld[indexFeld].Computer == true) {
                    gewonnenMensch = false;
                }
                if (feld[indexFeld].Mensch == true) {
                    gewonnenComputer = false;
                }
                if (feld[indexFeld].Computer == false && feld[indexFeld].Mensch == false) {
                    gewonnenMensch = false;
                    gewonnenComputer = false;
                }
            }
        }
    }
    else {
        ausgabeGewonnen();
    }
    // in der  Zeile hat keiner gewonnen, deshalb in der Diagonalen suchen (anzahlrow-- // anzahlcolumn ++)
    if (gewonnenComputer == false && gewonnenMensch == false) {
        gewonnenComputer = true;
        gewonnenMensch = true;
        var zaehlerRow = anzahlCol;
        var zaehlerCol = 1;
        for (indexFeld = 0; indexFeld < feld.length - 1; indexFeld++) {
            if (feld[indexFeld].column == anzahlCol) {
                if (feld[indexFeld].Computer == true) {
                    gewonnenMensch = false;
                }
                if (feld[indexFeld].Mensch == true) {
                    gewonnenComputer = false;
                }
                if (feld[indexFeld].Computer == false && feld[indexFeld].Mensch == false) {
                    gewonnenMensch = false;
                    gewonnenComputer = false;
                }
            }
            zaehlerCol--;
            zaehlerRow++;
        }
    }
    else {
        ausgabeGewonnen();
    }
}
function ausgabeGewonnen() {
    if (gewonnenComputer == true) {
        punkteComp++;
        /* Hinweis geben */
        domElement = document.getElementById("hinweis");
        domElement.innerHTML = "Computer hat diese Runde gewonnen!";
        domElement = document.getElementById("weiter");
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
        domElement = document.getElementById("weiter");
        domElement.innerHTML = "nächste Runde";
        runden++;
        if (runden > zaehlRunden) {
            domElement = document.getElementById("Sieger");
            domElement.innerHTML = "Du bist der Sieger!";
        }
    }
}
//# sourceMappingURL=script.js.map