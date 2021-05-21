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
console.log("FEingabe" + liste.length);

let input: HTMLInputElement = document.querySelector("#Eingabe");
neuerText = input.value;
console.log ("neuerText " + neuerText );

if (key == "Enter")  {
    let neueAufgabe: Aufgabe = {
        AufText: neuerText,
        AufErledigt: false
    };
    liste.unshift(neueAufgabe);
    }

FAusgabe();

}  

/*Ausgabe aller Array-Einträge  */ 
function FAusgabe(): void {
/*------------------------------*/    
let iAufgabe: Aufgabe;
console.log("FAusgabe" + liste.length);
let x: HTMLElement;
let t: ;

for (let index: number = 0; index < liste.length; index++) {
    iAufgabe = liste[index];
    x = document.createElement("p");
    neuerText = iAufgabe.AufText;
    t = document.createTextNode(neuerText);
    x.appendChild(t);

    document.getElementById("tabRow").appendChild(x);

    }
document.querySelector("h2").innerHTML = liste.length + " in total";
} 

function FLoeschen(): void {
/*-------------------------- */    
    let index: number;

    liste.splice(0, index);
}

function FHaken(): void {
/*-----------------------*/ 
let iAufgabe: Aufgabe;

if (document.getElementsByClassName ("fas fa-check").length == 1) {
    document.getElementById("Haken").className = ""; 
    iAufgabe.AufErledigt = false;
    }
else {
    document.getElementsByClassName ("fas fa-check");
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
    document.querySelector("#Haken").addEventListener("input", function() {FHaken()});
    document.querySelector("body").addEventListener ("keydown", function (event) {FEingabe(event.key)}); 
});
