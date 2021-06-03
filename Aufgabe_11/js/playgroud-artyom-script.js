window.addEventListener("load", function () {
    var artyom = new Artyom();
    artyom.addCommands({
        indexes: ["erstelle Aufgabe *"],
        smart: true,
        action: function (i, wildcard) {
            console.log("Neue Aufgabe wird erstellt: " + wildcard);
            // Start
            //document.getElementById("#inputTodo").setAttribute("placeholder" , " ");
            //sprache = wildcard;
            //document.getElementById("#inputTodo").innerHTML = wildcard;  
            //var x: string;
            //x = document.getElementById("#inputTodo").innerHTML;
            //console.log("x: " + x); 
            // Ende
        }
    });
    function startContinuousArtyom() {
        artyom.fatality();
        setTimeout(function () {
            artyom.initialize({
                lang: "de-DE",
                continuous: true,
                listen: true,
                interimResults: true,
                debug: true
            }).then(function () {
                console.log("Ready!");
            });
        }, 250);
    }
    startContinuousArtyom();
});
//# sourceMappingURL=playgroud-artyom-script.js.map