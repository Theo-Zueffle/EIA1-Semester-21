/*G L O B A L E Variablen                         */
/*------------------------------------------------*/

interface Aufgabe {
    AufText:     string;
    AufErledigt: boolean;
}

let liste: Aufgabe[]; 
let neuerText: string;


/* Eingabe einer neuen Task mit Enter  */
function FEingabe(key: string): void {
/*--------------------------------- */ 
let neueAufgabe: Aufgabe;
console.log(key);

if (key == "Enter")  { 
    neuerText = document.querySelector("#Eingabe").value;
    console.log(neuerText);
    console.log("hier");
    /*liste.push(Aufgabe);*/
    }
}  
  
/*for(let index: number = 0; index < liste.length; index++){
   ausgabe 
})
*/

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
    document.querySelector("body").addEventListener ("keydown", function (event) {FEingabe(event.key)}); 
});
