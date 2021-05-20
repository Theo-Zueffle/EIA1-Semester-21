/*G L O B A L E Variablen                         */
/*------------------------------------------------*/
var liste;
var neuerText;
/* Eingabe einer neuen Task mit Enter  */
function FEingabe(key) {
    /*--------------------------------- */
    if (key == "Enter") {
        neuerText = document.querySelector("#Eingabe").value;
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
    var td1;
    var td1Text;
    for (var index = 0; index < liste.length; index++) {
        iAufgabe = liste[index];
        td1 = document.createElement("td");
        neuerText = iAufgabe.AufText;
        td1Text = document.createTextNode(neuerText);
        td1.appendChild(td1Text);
        document.getElementById("tabTask").appendChild(td1);
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
    /* document.querySelector("#Eingabe").addEventListener("input", function() {FneueTask(Text);}); */
    document.querySelector("body").addEventListener("keydown", function (event) { FEingabe(event.key); });
});
//# sourceMappingURL=script.js.map