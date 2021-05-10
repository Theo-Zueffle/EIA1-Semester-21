/*G L O B A L E Variablen                         */
/*------------------------------------------------*/

/* festlegen der unterschiedlichen Audio-Dateien  */
var sound0 : HTMLAudioElement = new Audio("assets/A.mp3");
var sound1 : HTMLAudioElement = new Audio("assets/C.mp3");
var sound2 : HTMLAudioElement = new Audio("assets/F.mp3");
var sound3 : HTMLAudioElement = new Audio("assets/G.mp3");
var sound4 : HTMLAudioElement = new Audio("assets/hihat.mp3");
var sound5 : HTMLAudioElement = new Audio("assets/kick.mp3");
var sound6 : HTMLAudioElement = new Audio("assets/laugh-1.mp3");
var sound7 : HTMLAudioElement = new Audio("assets/laugh-2.mp3");
var sound8 : HTMLAudioElement = new Audio("assets/snare.mp3"); 

var sounds: HTMLAudioElement[] = [sound0,sound1,sound2,sound3,sound4,sound5,sound6,sound7,sound8];
var id    : string[] = ["but0","but1","but2","but3","but4","but5","but6","but7","but8"];

var beat  : HTMLAudioElement[] = [sound4,sound5,sound8];
 
/* F U N K T I O N E N     */
function initKey(){
    var keys = document.querySelectorAll("h1");
    keys.forEach(function(key) {
        key.setAttribute("style","color: black");
    })
}

function playSample(idFeld:string){
/*--------------------------------- */    
   initKey(); 

    /*An welcher Stelle steht die Feldid im Array?*/
    var i = id.indexOf(idFeld);
    sounds[i].play();
}
/* Beat mit play-Taste abspielen */
function playBeat(){
/*--------------------------------- */  
    initKey();   

    /*Die Soundintervalle werden mit zeitlichem Versatz gestartet. Ist der erste fertig, startet der */
    /*zweite usw. Wann ein Sound endet und der nächste starten kann, erfährt der EventListener */
    /*durch den einfachen Aufruf mit .play().*/

    /*Sound4 startet */
    setInterval(function() { beat[0].play()}, 2038);
    /*Sound4 ist das erste Mal zu Ende ==> Sound5 startet */
    beat[0].addEventListener("ended",function(){beat[1].play()});
     /*Sound5 ist das erste Mal zu Ende ==> Sound8 startet */
    beat[1].addEventListener("ended",function(){beat[2].play()});
}
    
/* mit Tastatur  */
function useKey(key:string){
/*--------------------------------- */  
    initKey(); 

    switch(key){
        case "a":
        case "A":
            document.querySelector('#KeyA').setAttribute('style','color: white');
            sounds[0].play();
            break;
        case "c":
        case "C":  
            document.querySelector("#KeyC").setAttribute("style","color: white");
            sounds[1].play();
            break;
        case "f":
        case "F":
            document.querySelector("#KeyF").setAttribute("style","color: white");
            sounds[2].play(); 
            break; 
        case "g":
        case "G":
            document.querySelector("#KeyG").setAttribute("style","color: white");
            sounds[3].play();
            break;
        default: 
            break; 
        }
}

/* abwarten bis Browser alle DOM-Elemente geparst hat */
window.addEventListener('load', function(){
    document.querySelector("#but0").addEventListener('click', function() { playSample("but0")});  
    document.querySelector("#but1").addEventListener('click', function() { playSample("but1")}); 
    document.querySelector("#but2").addEventListener('click', function() { playSample("but2")}); 
    document.querySelector("#but3").addEventListener('click', function() { playSample("but3")}); 
    document.querySelector("#but4").addEventListener('click', function() { playSample("but4")});  
    document.querySelector("#but5").addEventListener('click', function() { playSample("but5")});  
    document.querySelector("#but6").addEventListener('click', function() { playSample("but6")});  
    document.querySelector("#but7").addEventListener('click', function() { playSample("but7")});  
    document.querySelector("#but8").addEventListener('click', function() { playSample("but8")});  
    /* Aufgabe 7.2 Play-button*/
    document.querySelector(".play").addEventListener('click', playBeat);   
    /* Early Bird */
    document.querySelector("body").addEventListener ('keydown', function(event) {useKey(event.key)}); 
});
