/*G L O B A L E Variablen                         */
/*------------------------------------------------*/

/* festlegen der unterschiedlichen Audio-Dateien  */
var sound0: HTMLAudioElement = new Audio("assets/A.mp3");
var sound1: HTMLAudioElement = new Audio("assets/C.mp3");
var sound2: HTMLAudioElement = new Audio("assets/F.mp3");
var sound3: HTMLAudioElement = new Audio("assets/G.mp3");
var sound4: HTMLAudioElement = new Audio("assets/hihat.mp3");
var sound5: HTMLAudioElement = new Audio("assets/kick.mp3");
var sound6: HTMLAudioElement = new Audio("assets/laugh-1.mp3");
var sound7: HTMLAudioElement = new Audio("assets/laugh-2.mp3");
var sound8: HTMLAudioElement = new Audio("assets/snare.mp3");
var sounds:   HTMLAudioElement[] = [sound0, sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8];

var beat:     HTMLAudioElement[] = [sound4, sound5, sound8];
var aufnahme: boolean;
var index:    number;
var myVar:    number;

function playSample( idFeld: HTMLAudioElement) {
/*-------------------------------------------- */    
    idFeld.play();

/* Bei Aufnahme wird das Element hinzugefügt*/    
    if ( aufnahme == true) {
        console.log("aufnahme: " + aufnahme);
        beat.push(idFeld);
    }
}


/* Beat mit play-Taste abspielen */
function playBeat() {
/*--------------------------------- */  
    var Play = document.getElementsByClassName ("fas fa-play");
    var Stop = document.getElementsByClassName ("fas fa-stop");

/* Toggeln - Play wird zu Stop <==> Stop wird zu Play */
    if (Play.length == 1) {
       document.getElementById("Icon1").className = "fas fa-stop"; 
       myVar = setInterval(myTimer, 50);
    }   
    else  if (Stop.length == 1) {
        clearInterval(myVar);
        document.getElementById("Icon1").className = "fas fa-play"; 
        }
}


function myTimer(){
/*------------------ */    
    for (index = 0; index < beat.length; index++) {
     playSample(beat[index]);
    }
}


function record(){
/*------------------- */    
var recAn  = document.getElementsByClassName ("fas fa-microphone"); 
var recAus = document.getElementsByClassName ("fas fa-microphone-slash"); 

/* Toggeln - Aufnahme wird zu Stop Aufnahme und umgekehrt */

if (recAn.length == 1) {
    aufnahme = true;
    loesch(); /* alter Inhalt wird gelöscht*/
    document.getElementById("Icon2").className = "fas fa-microphone-slash"; }

 else  if (recAus.length == 1) {
     aufnahme = false;
     document.getElementById("Icon2").className = "fas fa-microphone"; }
}   


function loesch(){
/*------------------ */    
    /* Array wird geleert*/
    for (index = beat.length; index > 0; index--) {
        beat.pop();
        console.log("loeschen");
    }
}

function remix() {
/*---------------- */
    loesch();
    var min: number;
    var max: number;
    var i:   number;
    var sound: HTMLAudioElement;

    min = 0;
    max = 8;

    for (i = 0; i < 3; i++) {
        index = Math.round(Math.random() * (max - min)) + min; 
        sound = sounds[index];
        console.log ("remix " + sound + " " + index)
        beat.push(sound);
    }  
}

/* abwarten bis Browser alle DOM-Elemente geparst hat */
window.addEventListener("load", function () {
    document.querySelector("#sound0").addEventListener("click", function() { playSample(sound0)});  
    document.querySelector("#sound1").addEventListener("click", function() { playSample(sound1)}); 
    document.querySelector("#sound2").addEventListener("click", function() { playSample(sound2)}); 
    document.querySelector("#sound3").addEventListener("click", function() { playSample(sound3)}); 
    document.querySelector("#sound4").addEventListener("click", function() { playSample(sound4)});  
    document.querySelector("#sound5").addEventListener("click", function() { playSample(sound5)});  
    document.querySelector("#sound6").addEventListener("click", function() { playSample(sound6)});  
    document.querySelector("#sound7").addEventListener("click", function() { playSample(sound7)});  
    document.querySelector("#sound8").addEventListener("click", function() { playSample(sound8)});  
    document.querySelector("#Icon1").addEventListener("click", playBeat);   
    document.querySelector("#Icon2").addEventListener("click", record);
    document.querySelector("#Icon3").addEventListener("click", loesch);
    document.querySelector("#Icon4").addEventListener("click", remix);
});
