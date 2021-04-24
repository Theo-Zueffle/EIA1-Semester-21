/* Werte werden initialisiert */
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
/* Variablen, die mit den Werten der einzelnen Kontinenten gefüllt werden */
var Kontinent;
var Emission18;
var Emission08;
/* Gesamtsummen für 08 und 18*/
var Gesamt18;
var Gesamt08;
Gesamt18 = EmiAfrica18 + EmiSoAmerica18 + EmiEuropa18 + EmiNoAmerica18 + EmiAsia18 + EmiAustralia18;
Gesamt08 = EmiAfrica08 + EmiSoAmerica08 + EmiEuropa08 + EmiNoAmerica08 + EmiAsia08 + EmiAustralia08;
/* Ausgabe, die errechnet wird*/
var GeProzWelt;
var VergleichProz;
var VergleichKG;
/* Ausgabe für Europa */
/* ------------------ */
Kontinent = "Europa";
Emission18 = EmiEuropa18;
Emission08 = EmiEuropa08;
/* Dieser Bereich wird immer wiederholt pro Kontinent */
GeProzWelt = Emission18 * 100 / Gesamt18;
VergleichProz = (Emission18 - Emission08) * 100 / Emission08;
VergleichKG = Emission18 - Emission08;
console.log('  ' + Kontinent);
console.log('-------------');
console.log('Die Emission von ' + Kontinent + ' ist: ' + Emission18 + ' kg CO2.');
console.log('Relativ zur Gesamtemission der Welt verursacht ' + Kontinent + ' damit ' + GeProzWelt.toFixed(2) + ' %.');
console.log('Für ' + Kontinent + ' hat sich 2018 im Vergleich zu 2008 die Emission um ' + VergleichProz.toFixed(2) + ' % verändert.');
console.log('2018 im Vergleich zu 2008 sind das ' + VergleichKG.toFixed(1) + ' kg CO2.');
console.log(' ');
/* ----------------------------- */
/* Ausgabe für Africa */
/* ------------------ */
Kontinent = "Afrika";
Emission18 = EmiAfrica18;
Emission08 = EmiAfrica08;
/* Dieser Bereich wird immer wiederholt pro Kontinent */
GeProzWelt = Emission18 * 100 / Gesamt18;
VergleichProz = (Emission18 - Emission08) * 100 / Emission08;
VergleichKG = Emission18 - Emission08;
console.log('  ' + Kontinent);
console.log('-------------');
console.log('Die Emission von ' + Kontinent + ' ist: ' + Emission18 + ' kg CO2.');
console.log('Relativ zur Gesamtemission der Welt verursacht ' + Kontinent + ' damit ' + GeProzWelt.toFixed(2) + ' %.');
console.log('Für ' + Kontinent + ' hat sich 2018 im Vergleich zu 2008 die Emission um ' + VergleichProz.toFixed(2) + ' % verändert.');
console.log('2018 im Vergleich zu 2008 sind das ' + VergleichKG.toFixed(1) + ' kg CO2.');
console.log(' ');
/* ----------------------------- */
/* Ausgabe für Asien */
/* ------------------ */
Kontinent = "Asien";
Emission18 = EmiAsia18;
Emission08 = EmiAsia08;
/* Dieser Bereich wird immer wiederholt pro Kontinent */
GeProzWelt = Emission18 * 100 / Gesamt18;
VergleichProz = (Emission18 - Emission08) * 100 / Emission08;
VergleichKG = Emission18 - Emission08;
console.log('  ' + Kontinent);
console.log('-------------');
console.log('Die Emission von ' + Kontinent + ' ist: ' + Emission18 + ' kg CO2.');
console.log('Relativ zur Gesamtemission der Welt verursacht ' + Kontinent + ' damit ' + GeProzWelt.toFixed(2) + ' %.');
console.log('Für ' + Kontinent + ' hat sich 2018 im Vergleich zu 2008 die Emission um ' + VergleichProz.toFixed(2) + ' % verändert.');
console.log('2018 im Vergleich zu 2008 sind das ' + VergleichKG.toFixed(1) + ' kg CO2.');
console.log(' ');
/* ----------------------------- */
/* Ausgabe für Nordamerika */
/* ------------------ */
Kontinent = "Nordamerika";
Emission18 = EmiNoAmerica18;
Emission08 = EmiNoAmerica08;
/* Dieser Bereich wird immer wiederholt pro Kontinent */
GeProzWelt = Emission18 * 100 / Gesamt18;
VergleichProz = (Emission18 - Emission08) * 100 / Emission08;
VergleichKG = Emission18 - Emission08;
console.log('  ' + Kontinent);
console.log('-------------');
console.log('Die Emission von ' + Kontinent + ' ist: ' + Emission18 + ' kg CO2.');
console.log('Relativ zur Gesamtemission der Welt verursacht ' + Kontinent + ' damit ' + GeProzWelt.toFixed(2) + ' %.');
console.log('Für ' + Kontinent + ' hat sich 2018 im Vergleich zu 2008 die Emission um ' + VergleichProz.toFixed(2) + ' % verändert.');
console.log('2018 im Vergleich zu 2008 sind das ' + VergleichKG.toFixed(1) + ' kg CO2.');
console.log(' ');
/* ----------------------------- */
/* Ausgabe für Südamerika */
/* ------------------ */
Kontinent = "Südamerika";
Emission18 = EmiSoAmerica18;
Emission08 = EmiSoAmerica08;
/* Dieser Bereich wird immer wiederholt pro Kontinent */
GeProzWelt = Emission18 * 100 / Gesamt18;
VergleichProz = (Emission18 - Emission08) * 100 / Emission08;
VergleichKG = Emission18 - Emission08;
console.log('  ' + Kontinent);
console.log('-------------');
console.log('Die Emission von ' + Kontinent + ' ist: ' + Emission18 + ' kg CO2.');
console.log('Relativ zur Gesamtemission der Welt verursacht ' + Kontinent + ' damit ' + GeProzWelt.toFixed(2) + ' %.');
console.log('Für ' + Kontinent + ' hat sich 2018 im Vergleich zu 2008 die Emission um ' + VergleichProz.toFixed(2) + ' % verändert.');
console.log('2018 im Vergleich zu 2008 sind das ' + VergleichKG.toFixed(1) + ' kg CO2.');
console.log(' ');
/* ----------------------------- */
/* Ausgabe für Australien */
/* ------------------ */
Kontinent = "Australien";
Emission18 = EmiAustralia18;
Emission08 = EmiAustralia08;
/* Dieser Bereich wird immer wiederholt pro Kontinent */
GeProzWelt = Emission18 * 100 / Gesamt18;
VergleichProz = (Emission18 - Emission08) * 100 / Emission08;
VergleichKG = Emission18 - Emission08;
console.log('  ' + Kontinent);
console.log('-------------');
console.log('Die Emission von ' + Kontinent + ' ist: ' + Emission18 + ' kg CO2.');
console.log('Relativ zur Gesamtemission der Welt verursacht ' + Kontinent + ' damit ' + GeProzWelt.toFixed(2) + ' %.');
console.log('Für ' + Kontinent + ' hat sich 2018 im Vergleich zu 2008 die Emission um ' + VergleichProz.toFixed(2) + ' % verändert.');
console.log('2018 im Vergleich zu 2008 sind das ' + VergleichKG.toFixed(1) + ' kg CO2.');
console.log(' ');
/* ----------------------------- */ 
//# sourceMappingURL=script.js.map