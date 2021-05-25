var neueAufgabe;
var neuerText;
var total = 0;
/* Eingabe einer neuen Task mit Enter  */
function FEingabe(key) {
    /*--------------------------------- */
    var hakenIcon;
    var textP;
    var trashIcon;
    var zeile;
    var t;
    var att;
    var input = document.querySelector(".Eingabe");
    neuerText = input.value;
    if (key == "Enter") {
        input.value = "";
        neueAufgabe = {
            AufText: neuerText,
            AufErledigt: false
        };
        /*eine Zeile <div> mit Klasse ToDoListe anlegen */
        console.log("div angelegt");
        zeile = document.createElement("div");
        document.body.appendChild(zeile);
        zeile.className = "ToDoListe";
        /* input checkbox hinzufügen */
        hakenIcon = document.createElement("input");
        hakenIcon.className = "Haken";
        hakenIcon.setAttribute("type", "checkbox");
        zeile.appendChild(hakenIcon);
        /* p hinzufügen  */
        textP = document.createElement("p");
        neuerText = neueAufgabe.AufText;
        t = document.createTextNode(neuerText);
        textP.appendChild(t);
        zeile.appendChild(textP);
        /* Mülleimer hinzufügen */
        trashIcon = document.createElement("div");
        trashIcon.className = "fas fa-trash-alt";
        zeile.appendChild(trashIcon);
        /* total errechnen */
        total++;
        document.querySelector("h2").innerHTML = total + " in total";
    }
    trashIcon.addEventListener("click", function () { FMuell(trashIcon); });
}
function FMuell(trashIcon) {
    /*-----------------------*/
    console.log("Muell");
    var parent = trashIcon.parentElement;
    console.log(parent);
    parent.remove();
    total--;
    document.querySelector("h2").innerHTML = total + " in total";
}
/* abwarten bis Browser alle DOM-Elemente geparst hat */
window.addEventListener("load", function () {
    document.querySelector("body").addEventListener("keydown", function (event) { FEingabe(event.key); });
});
//# sourceMappingURL=script.js.map