/*-------------------  V A R I A B L E N -- G L O B A L  ----------------------------------------*/

/* Werte werden initialisiert GLOBAL*/
var EmiAfrica18    : number =  1235.5;
var EmiSoAmerica18 : number =  1261.5;
var EmiEuropa18    : number =  4209.3;
var EmiNoAmerica18 : number =  6035.6;
var EmiAsia18      : number = 16274.1;
var EmiAustralia18 : number =  2100.5;

var EmiAfrica08    : number =  1028.0;
var EmiSoAmerica08 : number =  1132.6;
var EmiEuropa08    : number =  4965.7;
var EmiNoAmerica08 : number =  6600.4;
var EmiAsia08      : number = 12954.7;
var EmiAustralia08 : number =  1993.0;

/* Ausgabe, die errechnet wird zur Anzeige pro Kontinent*/
var GeProzWelt    : any;
var VergleichProz : any;
var VergleichKG   : any;

/* Gesamtsummen für 08 und 18 */
var Gesamt18 : number;
var Gesamt08 : number;
Gesamt18 = EmiAfrica18 + EmiSoAmerica18 + EmiEuropa18 +  EmiNoAmerica18 + EmiAsia18 + EmiAustralia18;
Gesamt08 = EmiAfrica08 + EmiSoAmerica08 + EmiEuropa08 +  EmiNoAmerica08 + EmiAsia08 + EmiAustralia08;


/*-------------------  F U N K T I O N E N  -------------------------------------------------*/
/*alle weiße Bilder werden geladen und Balkendiagramm auf Null */
function initFunction(){
    document.querySelector(".asia").setAttribute("src","images/asia.png");
    document.querySelector(".europe").setAttribute("src","images/europe.png");
    document.querySelector(".southamerica").setAttribute("src","images/southamerica.png");
    document.querySelector(".northamerica").setAttribute("src","images/northamerica.png");
    document.querySelector(".africa").setAttribute("src","images/africa.png");
    document.querySelector(".australia").setAttribute("src","images/australia.png");
    /* Balkendiagramm leeren */
    document.querySelector(".australia").setAttribute("src","images/australia.png");
}

/* Allgemeine Funktion zur Berechnung der Werte und Ausgabe*/
function myFunction(Kontinent:string, Emission18:any, Emission08:number, Knoten:string) {
    initFunction();
    GeProzWelt    = Emission18 * 100 / Gesamt18;
    VergleichProz = (Emission18 - Emission08) * 100 / Emission08;
    VergleichKG   = Emission18 - Emission08;
    
    document.querySelector("h1").innerHTML="Carbon Dioxide Emissions in " + Kontinent; 
    document.querySelector("h2").innerHTML=" "; 
    document.querySelector(".Feld1 p").innerHTML= "Emission absolute of " + Kontinent  + " in 2018";
    document.querySelector(".Feld1 h2").innerHTML = Emission18;
    document.querySelector(".Feld2 p").innerHTML= "Relative to total world's emission";
    document.querySelector(".Feld2 h2").innerHTML = GeProzWelt.toFixed(1) + " %";
    document.querySelector(".Feld3 p").innerHTML= "Growth rate between 2008 and 2018 (in %)";
    document.querySelector(".Feld3 h2").innerHTML = VergleichProz.toFixed(1) + " %";
    document.querySelector(".Feld4 p").innerHTML="Growth rate between 2008 and 2018 (absolute)";
    document.querySelector(".Feld4 h2").innerHTML = VergleichKG.toFixed(1);
    document.querySelector(".chartWrapper .chart").setAttribute("style","height:" + GeProzWelt + "%");
    /*Ausgabe des grünen Bildes*/
    document.querySelector("." + Knoten).setAttribute("src","images/"+ Knoten +"_g.png");
}

/* abwarten bis Browser alle DOM-Elemente geparst hat */
window.addEventListener('load', function(){
    document.querySelector(".europe").addEventListener('click', function () { myFunction("Europa",EmiEuropa18,EmiEuropa08,"europe")});
    document.querySelector(".northamerica").addEventListener('click', function () { myFunction("North Amerika",EmiNoAmerica18,EmiNoAmerica08,"northamerica")});
    document.querySelector(".southamerica").addEventListener('click', function () { myFunction("South America",EmiSoAmerica18,EmiSoAmerica08,"southamerica")});
    document.querySelector(".africa").addEventListener('click', function (){ myFunction("Africa",EmiAfrica18,EmiAfrica08,"africa")});
    document.querySelector(".australia").addEventListener('click', function(){ myFunction("Australia",EmiAustralia18,EmiAustralia08,"australia")});
    document.querySelector(".asia").addEventListener('click', function(){ myFunction("Asia",EmiAsia18,EmiAsia08,"asia")});
});