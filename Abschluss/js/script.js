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
var feld = [];
/*
 * Sobald der DOM geladen wurde können grundlegende DOM-Interaktionen
 * initialisiert werden
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
});
function wie_schwer(runden, colRow) {
    anzahlCol = colRow;
    anzahlRow = colRow;
    feld.length = (colRow * colRow);
    domElement = document.getElementById("fieldset");
    domElement.setAttribute("disabled", "true");
    domElement = document.getElementById("hinweis");
    domElement.innerHTML = "Du bist am Zug";
    domSpielfeld = document.createElement("div");
    domSpielfeld.classList.add("Spielfeld");
    document.body.appendChild(domSpielfeld);
    domElement = document.getElementById("Runde");
    domElement.innerHTML = "Runde 1 von " + runden;
    for (var indexCol = 1; indexCol <= colRow; indexCol++) {
        absatz = document.createElement("br");
        domSpielfeld.appendChild(absatz);
        console.log(absatz);
        for (var indexRow = 1; indexRow <= colRow; indexRow++) {
            var idFeld = void 0;
            idFeld = "Feld" + indexCol + indexRow;
            console.log(idFeld);
            domFeld = document.createElement("button");
            domFeld.setAttribute("id", idFeld);
            domFeld.innerHTML = "<i class='fas square'></i>";
            domSpielfeld.appendChild(domFeld);
            console.log(domFeld);
            /* Feld anlegen im Array */
            feld.push({
                column: indexCol,
                row: indexRow,
                Mensch: false,
                Computer: false
            });
        }
    }
    footer = document.createElement("footer");
    footer.innerHTML = "Theo Züffle, MatrikelNr: 268027";
    domElement = document.body;
    domElement.appendChild(footer);
    computerSpielt();
}
function computerSpielt() {
    console.log("computer spielt");
    var min = 1;
    var max = anzahlCol;
    var indCol = Math.floor((Math.random() * max) + min);
    var indRow = Math.floor((Math.random() * max) + min);
    feld = [
        {
            column: indCol,
            row: indRow,
            Mensch: false,
            Computer: true
        }
    ];
    var feldName = "Feld" + indRow + indCol;
    console.log(feldName);
    domElement = document.getElementById("Feld" + indRow + indCol);
    console.log(domElement);
    // domElement.innerHTML = "<i class='fas times'></i>";
}
function drawListToDOM() {
    // alle todos erst einmal aus dem DOM löschen
    //todosDOMElement.innerHTML = "";
    // das ToDo-Array durchlaufen (iterieren) und Todo für Todo in den DOM schreiben
    //for (let index: number = 0; index < aufgabe.length; index++) {
    //  for (let index: number = (aufgabe.length - 1); index >= 0; index--) {
    /**
     * Neues DIV-Element erstellen (würde auch mit innerHTML = "<div class='todo'></div>" gehen,
     * die Objekt-Instansierung ist aber übersichtlicher)
     */
    //   let todo: HTMLElement = document.createElement("div");
    //   todo.classList.add("todo");
    /**
     * Jedes Todo besteht aus etwas Markup, also aus HTML-Elementen
     * wie der Check-Anzeige, dem ToDo-Text und dem Mülleimer
     *
     * Einfachheitshalber werden hier alle HTML-Elemente für ein ToDo
     * nicht DOM-Objekt-weise (wie oben, mit createElement), sondern als eine lange
     * HTML-Zeichenkette erstellt. An manchen Stellen der Zeichenkette wird
     * ein Wert einer Variablen benötigt (bspw. für die CSS Klasse oder für den ToDo-Text),
     * hier muss die Zeichenkette unterbrochen werden.
     */
    //    todo.innerHTML =  "<span class='check " + aufgabe[index].todosChecked + "'><i class='fas fa-check'></i></span>"
    //                        + aufgabe[index].todosText +
    //                        "<span class='trash fas fa-trash-alt'></span>";
    // Zuweisen der Event-Listener für den Check- und den Trash-Button
    //   todo.querySelector(".check").addEventListener("click", function(): void {
    // hier wird der Index, also die aktuelle Stelle im Array dieses ToDos,
    // übergeben, damit an der entsprechenden Stelle im Array der Wert geändert werden kann.
    //       toggleCheckState(index);
    //   });
    //   todo.querySelector(".trash").addEventListener("click", function(): void {
    // hier wird der Index, also die aktuelle Stelle im Array dieses ToDos,
    // übergeben, damit die entsprechende Stelle im Array gelöscht werden kann.
    //       deleteTodo(index);
    //   });
    // Bis hier hin wurde das neue Todo "zusammengebaut", jetzt wird es in den DOM gerendert.
    //   todosDOMElement.appendChild(todo);
    // }
    //updateCounter();
}
function updateCounter() {
    //   counterDOMElement.innerHTML = aufgabe.length + " in total";
}
/**
 * Ein neues ToDo wird folgendermaßen erstellt:
 */
function addTodo() {
    /**
     * Zunächst wird geprüft, ob das Input-Feld nicht leer ist
     * (ansonsten würde ein leerer ToDo-Text erstellt werden,
     * wenn man, ohne zu Tippen, den Add-Button gedrückt hätte)
     */
    //if (inputDOMElement.value != "") {
    /**
     * Der Eingabe-Wert aus dem Input-Feld (.value) wird
     * als neues Element in das ToDo-Array gepusht.
     * Gleichzeitig wird in ein zweites Array, das den Checked- / Uncheck-
     * Status der ToDos abbildet, für dieses ToDo (weil selbe Stelle im Array)
     * der Status "unchecked", hier false, gepusht.
     */
    //   aufgabe.push({
    //       todosText: inputDOMElement.value,
    //       todosChecked: false
    //   });
    /*todosText.push(inputDOMElement.value);
    todosChecked.push(false);*/
    // Jetzt wird der Text aus dem Eingabefeld gelöscht
    //inputDOMElement.value = "";
    /**
     * Die zentrale Funktion, um die Liste des ToDo-Arrays in den DOM zu rendern
     * wird wieder getriggert
     */
    //drawListToDOM();
}
/**
 * Der check- / unchecked Zustand eines ToDo wird wie folgt gesetzt:
 */
function toggleCheckState(index) {
    /**
     * Das Array, , das den Checked- / Uncheck-Status der ToDos abbildet,
     * muss an jener Stelle, an der das entsprechende ToDo steht (nämlich
     * an der übergebenen Index-Stelle) geändert werden.
     * Von checked zu unchecked bzw. von unchecked zu checked
     * Hier wird ein Boolean für den Zustand checked/unchecked genutzt,
     * der Boolean muss also von true zu false bzw. false zu true gestellt werden.
     * Ein toggle (also Welchseln zwischen zwei Zuständen) lässt sich folgendermaßen
     * kurz schreiben: wert = !wert
     * Bedeutet: der Wert soll das Gegenteil von seinem Wert annehmen.
     * Alternativ könnte man hier natürlich auch andere Schreibweisen (wie sie im
     * Kurs behandelt wurden) nutzen.
     */
    //   aufgabe[index].todosChecked = !aufgabe[index].todosChecked;
    /**
     * Die zentrale Funktion, um die Liste des ToDo-Arrays in den DOM zu rendern
     * wird wieder getriggert
     */
    // drawListToDOM();
}
/**
 * Diese Funktion löscht ein ToDo
 */
function deleteTodo(index) {
    /**
     * Durch "index" ist die entsprechende Stelle im Array
     * bekannt, an der das ToDo steht.
     * Jetzt muss diese Stelle beider Arrays gelöscht werden,
     * das ToDo-Text-Array und das Checked/Unchecked-Array
     */
    //    aufgabe.splice(index, 1);
    /* todosText.splice(index, 1);
     todosChecked.splice(index, 1);
     */
    /**
     * Die zentrale Funktion, um die Liste des ToDo-Arrays in den DOM zu rendern
     * wird wieder getriggert
     */
    // drawListToDOM();
}
//# sourceMappingURL=script.js.map