
/*G L O B A L E Variablen                         */
/*------------------------------------------------*/
interface Aufgabe {
    AufText:     string;
    AufErledigt: boolean;
}
var neueAufgabe: Aufgabe;
var neuerText: string;
var total: number = 0;

/* Eingabe einer neuen Task mit Enter  */
function FEingabe(key: string): void {
/*--------------------------------- */ 
var hakenIcon: HTMLElement;
var textP: HTMLElement;
var trashIcon: HTMLDivElement;

var zeile: HTMLElement;
var t: Text;
var att: Attr;

let input: HTMLInputElement = document.querySelector(".Eingabe");
neuerText = input.value;

if (key == "Enter")  {
    input.value = "";

    neueAufgabe = {
        AufText: neuerText,
        AufErledigt: false
    };
    
    /*eine Zeile <div> mit Klasse ToDoListe anlegen */
    console.log ("div angelegt");
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

    trashIcon.addEventListener("click", function(): void {FMuell(trashIcon); } );
    }

}
 
function FMuell(trashIcon: HTMLDivElement): void {
/*-----------------------*/ 
console.log ("Muell");
let parent: HTMLElement = trashIcon.parentElement;
console.log(parent);
parent.remove();
total--;
document.querySelector("h2").innerHTML = total + " in total";
}

/* abwarten bis Browser alle DOM-Elemente geparst hat */
window.addEventListener("load", function (): void {
   document.querySelector("body").addEventListener ("keydown", function (event: KeyboardEvent): void {FEingabe(event.key); }); 
   });

   