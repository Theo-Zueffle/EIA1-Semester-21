/*-------------------  V A R I A B L E N -- G L O B A L  ----------------------------------------*/
/* Werte werden initialisiert GLOBAL*/
var EmiAfrica18 = 1235.5;
var EmiSoAmerica18 = 1261.5;
var EmiEuropa18 = 4209.3;
var EmiNoAmerica18 = 6035.6;
var EmiAsia18 = 16274.1;
var EmiAustralia18 = 2100.5;
var EmiAfrica08 = 1028.0;
var EmiSoAmerica08 = 1132.6;
var EmiEuropa08 = 4965.7;
var EmiNoAmerica08 = 6600.4;
var EmiAsia08 = 12954.7;
var EmiAustralia08 = 1993.0;
/* Übergabe für myFunction  */
var Kontinent;
var Emission08;
var Emission18;
/* Ausgabe, die errechnet wird zur Anzeige pro Kontinent*/
var GeProzWelt;
var VergleichProz;
var VergleichKG;
/* Gesamtsummen für 08 und 18 */
var Gesamt18;
var Gesamt08;
Gesamt18 = EmiAfrica18 + EmiSoAmerica18 + EmiEuropa18 + EmiNoAmerica18 + EmiAsia18 + EmiAustralia18;
Gesamt08 = EmiAfrica08 + EmiSoAmerica08 + EmiEuropa08 + EmiNoAmerica08 + EmiAsia08 + EmiAustralia08;
/*-------------------  F U N K T I O N E N  -------------------------------------------------*/
/*alle weiße Bilder werden geladen und Balkendiagramm auf Null */
function initFunction() {
    document.querySelector(".asia").setAttribute("src", "images/asia.png");
    document.querySelector(".europe").setAttribute("src", "images/europe.png");
    document.querySelector(".southamerica").setAttribute("src", "images/southamerica.png");
    document.querySelector(".northamerica").setAttribute("src", "images/northamerica.png");
    document.querySelector(".africa").setAttribute("src", "images/africa.png");
    document.querySelector(".australia").setAttribute("src", "images/australia.png");
    /* Balkendiagramm leeren */
    document.querySelector(".australia").setAttribute("src", "images/australia.png");
}
/* Allgemeine Funktion zur Berechnung der Werte */
function myFunction(Kontinent, Emission18, Emission08) {
    initFunction();
    GeProzWelt = Emission18 * 100 / Gesamt18;
    VergleichProz = (Emission18 - Emission08) * 100 / Emission08;
    VergleichKG = Emission18 - Emission08;
    document.querySelector("h1").innerHTML = "Carbon Dioxide Emissions in " + Kontinent;
    document.querySelector("h2").innerHTML = " ";
    document.querySelector(".Feld1 p").innerHTML = "Emission absolute of " + Kontinent + " in 2018";
    document.querySelector(".Feld1 h2").innerHTML = Emission18;
    document.querySelector(".Feld2 p").innerHTML = "Relative to total world's emission";
    document.querySelector(".Feld2 h2").innerHTML = GeProzWelt.toFixed(1) + " %";
    document.querySelector(".Feld3 p").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector(".Feld3 h2").innerHTML = VergleichProz.toFixed(1) + " %";
    document.querySelector(".Feld4 p").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
    document.querySelector(".Feld4 h2").innerHTML = VergleichKG.toFixed(1);
    document.querySelector(".chartWrapper .chart").setAttribute("style", "height:" + GeProzWelt + "%");
}
/* Funktion zur Übergabe der Europawerte und Aufruf von myFunction */
function myEuropa() {
    Kontinent = "Europe";
    Emission18 = EmiEuropa18;
    Emission08 = EmiEuropa08;
    myFunction("Europe", EmiEuropa18, EmiEuropa08);
    /* Bild wird dunkelgrün */
    document.querySelector(".europe").setAttribute("src", "images/europe_g.png");
}
/* Funktion zur Übergabe der Südamerika-Werte und Aufruf von myFunction */
function mySoAmerica() {
    Kontinent = "South America";
    Emission18 = EmiSoAmerica18;
    Emission08 = EmiSoAmerica08;
    myFunction("South America", EmiSoAmerica18, EmiSoAmerica08);
    /* Bild wird dunkelgrün */
    document.querySelector(".southamerica").setAttribute("src", "images/southamerica_g.png");
}
/* Funktion zur Übergabe der Nordamerika-Werte und Aufruf von myFunction */
function myNoAmerica() {
    Kontinent = "North America";
    Emission18 = EmiNoAmerica18;
    Emission08 = EmiNoAmerica08;
    myFunction("North America", EmiNoAmerica18, EmiNoAmerica08);
    /* Bild wird dunkelgrün */
    document.querySelector(".northamerica").setAttribute("src", "images/northamerica_g.png");
}
/* Funktion zur Übergabe der Afrika-Werte und Aufruf von myFunction */
function myAfrica() {
    Kontinent = "Africa";
    Emission18 = EmiAfrica18;
    Emission08 = EmiAfrica08;
    myFunction("Africa", EmiAfrica18, EmiAfrica08);
    /* Bild wird dunkelgrün */
    document.querySelector(".africa").setAttribute("src", "images/africa_g.png");
}
/* Funktion zur Übergabe der Australien-Werte und Aufruf von myFunction */
function myAustralia() {
    Kontinent = "Australia";
    Emission18 = EmiAustralia18;
    Emission08 = EmiAustralia08;
    myFunction("Australia", EmiAustralia18, EmiAustralia08);
    /* Bild wird dunkelgrün */
    document.querySelector(".australia").setAttribute("src", "images/australia_g.png");
}
/* Funktion zur Übergabe der Asien-Werte und Aufruf von myFunction */
function myAsia() {
    Kontinent = "Asia";
    Emission18 = EmiAsia18;
    Emission08 = EmiAsia08;
    myFunction("Asia", EmiAsia18, EmiAsia08);
    /* Bild wird dunkelgrün */
    document.querySelector(".asia").setAttribute("src", "images/asia_g.png");
}
/* abwarten bis Browser alle DOM-Elemente geparst hat */
window.addEventListener('load', function () {
    document.querySelector(".europe").addEventListener('click', myEuropa);
    document.querySelector(".northamerica").addEventListener('click', myNoAmerica);
    document.querySelector(".southamerica").addEventListener('click', mySoAmerica);
    document.querySelector(".africa").addEventListener('click', myAfrica);
    document.querySelector(".australia").addEventListener('click', myAustralia);
    document.querySelector(".asia").addEventListener('click', myAsia);
});
//# sourceMappingURL=script.js.map