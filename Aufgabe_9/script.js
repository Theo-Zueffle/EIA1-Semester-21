var neueAufgabe;
var neuerText;
var total = 0;
/* Eingabe einer neuen Task mit Enter  */
function FEingabe(key) {
    /*--------------------------------- */
    var x1;
    var x2;
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
        x1 = document.createElement("input");
        x1.className = "Haken";
        x1.setAttribute("type", "checkbox");
        zeile.appendChild(x1);
        /* p hinzufügen  */
        x2 = document.createElement("p");
        neuerText = neueAufgabe.AufText;
        t = document.createTextNode(neuerText);
        x2.appendChild(t);
        zeile.appendChild(x2);
        /* Mülleimer hinzufügen */
        // tslint:disable-next-line: typedef
        var x3 = document.createElement("div");
        x3.className = "fas fa-trash-alt";
        zeile.appendChild(x3);
        /* total errechnen */
        total++;
        document.querySelector("h2").innerHTML = total + " in total";
        /*Eingabe leeren */
        document.querySelector("#idEingabe").setAttribute("value", "");
        /*var x4: HTMLElement = document.getElementById("idEingabe");
        x4.setAttribute("value", " ");*/
    }
    x3.addEventListener("click", function () { FMuell(x3); });
}
function FMuell(x3) {
    /*-----------------------*/
    console.log("Muell");
    var parent = x3.parentElement;
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