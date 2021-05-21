/*G L O B A L E Variablen                         */
/*------------------------------------------------*/
var liste;
var neuerText;
/* Eingabe einer neuen Task mit Enter  */
function FEingabe(key) {
    /*--------------------------------- */
    console.log("FEingabe" + liste.length);
    var input = document.querySelector("#Eingabe");
    neuerText = input.value;
    console.log("neuerText " + neuerText);
    if (key == "Enter") {
        var neueAufgabe = {
            AufText: neuerText,
            AufErledigt: false
        };
        liste.unshift(neueAufgabe);
    }
    FAusgabe();
}
/*Ausgabe aller Array-Einträge  */
function FAusgabe() {
    /*------------------------------*/
    var iAufgabe;
    console.log("FAusgabe" + liste.length);
    var x;
    var t;
    for (var index = 0; index < liste.length; index++) {
        iAufgabe = liste[index];
        x = document.createElement("p");
        neuerText = iAufgabe.AufText;
        t = document.createTextNode(neuerText);
        x.appendChild(t);
        document.getElementById("tabRow").appendChild(x);
    }
    document.querySelector("h2").innerHTML = liste.length + " in total";
}
function FLoeschen() {
    /*-------------------------- */
    var index;
    liste.splice(0, index);
}
function FHaken() {
    /*-----------------------*/
    var iAufgabe;
    if (document.getElementsByClassName("fas fa-check").length == 1) {
        document.getElementById("Haken").className = "";
        iAufgabe.AufErledigt = false;
    }
    else {
        document.getElementsByClassName("fas fa-check");
        iAufgabe.AufErledigt = true;
    }
}
/* Beat mit play-Taste abspielen */
/* function playBeat(): void {
/*------------------------- */
/*
    var play = document.getElementsByClassName ("fas fa-play");
    var stop = document.getElementsByClassName ("fas fa-stop");

/* Toggeln - Play wird zu Stop <==> Stop wird zu Play */
/*   if (play.length == 1) {
      document.getElementById("Icon1").className = "fas fa-stop";
      myVar = setInterval(myTimer, 50);
   }
   else  if (stop.length == 1) {
       clearInterval(myVar);
       document.getElementById("Icon1").className = "fas fa-play";
       }
} */
/* abwarten bis Browser alle DOM-Elemente geparst hat */
window.addEventListener("load", function () {
    document.querySelector("#Haken").addEventListener("input", function () { FHaken(); });
    document.querySelector("body").addEventListener("keydown", function (event) { FEingabe(event.key); });
});
//# sourceMappingURL=script.js.map