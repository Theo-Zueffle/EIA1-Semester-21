var inputDOMElement;
var addButtonDOMElement;
var todosDOMElement;
var counterDOMElement;
var openDOMElement;
var zaehlerOpen = 0;
var doneDOMElement;
var zaehlerDone = 0;
var aufgabe = [
    {
        todosText: "Lorem",
        todosChecked: true
    },
    {
        todosText: "Ipsum",
        todosChecked: false
    },
    {
        todosText: "Dolor",
        todosChecked: false
    }
];
window.addEventListener("load", function () {
    var sprachEing = document.querySelector("#inputTodo");
    var artyom = new Artyom();
    artyom.addCommands({
        indexes: ["erstelle Aufgabe *"],
        smart: true,
        action: function (i, wildcard) {
            console.log("Neue Aufgabe wird erstellt: " + wildcard);
            //   sprachEing.setAttribute("value" , wildcard);
            inputDOMElement.value = wildcard;
            addTodo();
            drawListToDOM();
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
    //------------------------------------------------------------------//
    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
    openDOMElement = document.querySelector("#open");
    doneDOMElement = document.querySelector("#done");
    addButtonDOMElement.addEventListener("click", addTodo);
    drawListToDOM();
});
function drawListToDOM() {
    todosDOMElement.innerHTML = "";
    var _loop_1 = function (index) {
        var todo = document.createElement("div");
        todo.classList.add("todo");
        todo.innerHTML = "<span class='check " + aufgabe[index].todosChecked + "'><i class='fas fa-check'></i></span>"
            + aufgabe[index].todosText +
            "<span class='trash fas fa-trash-alt'></span>";
        todo.querySelector(".check").addEventListener("click", function () {
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function () {
            deleteTodo(index);
        });
        todosDOMElement.appendChild(todo);
    };
    for (var index = (aufgabe.length - 1); index >= 0; index--) {
        _loop_1(index);
    }
    updateCounter();
}
function updateCounter() {
    counterDOMElement.innerHTML = aufgabe.length + " in total";
    zaehlerOpen = 0;
    zaehlerDone = 0;
    for (var index = 0; index < aufgabe.length; index++) {
        if (aufgabe[index].todosChecked == true) {
            zaehlerDone++;
        }
        else {
            zaehlerOpen++;
        }
    }
    openDOMElement.innerHTML = zaehlerOpen + " open";
    doneDOMElement.innerHTML = zaehlerDone + " done";
}
function addTodo() {
    if (inputDOMElement.value != "") {
        aufgabe.push({
            todosText: inputDOMElement.value,
            todosChecked: false
        });
        inputDOMElement.value = "";
        drawListToDOM();
    }
}
function toggleCheckState(index) {
    aufgabe[index].todosChecked = !aufgabe[index].todosChecked;
    drawListToDOM();
}
function deleteTodo(index) {
    aufgabe.splice(index, 1);
    drawListToDOM();
}
//# sourceMappingURL=script.js.map