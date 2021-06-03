
var inputDOMElement:     HTMLInputElement;
var addButtonDOMElement: HTMLElement;
var todosDOMElement:     HTMLElement;
var counterDOMElement:   HTMLElement;
var openDOMElement:      HTMLElement;
var zaehlerOpen:         number = 0;
var doneDOMElement:      HTMLElement;
var zaehlerDone:         number = 0;

interface Aufgabe {
    todosText: string;
    todosChecked: boolean;
}
var aufgabe: Aufgabe[] = [
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

declare var Artyom: any;

window.addEventListener("load", function(): void {
    var sprachEing: HTMLElement = document.querySelector("#inputTodo"); 
    const artyom: any = new Artyom();
    
    artyom.addCommands({
        indexes: ["erstelle Aufgabe *"],
        smart: true,
        action: function(i: any, wildcard: string): void {
            console.log("Neue Aufgabe wird erstellt: " + wildcard);
         //   sprachEing.setAttribute("value" , wildcard);
            inputDOMElement.value = wildcard;
            addTodo();
            drawListToDOM();
        }
    });
    
    function startContinuousArtyom(): void {
        artyom.fatality();
    
        setTimeout(
            function(): void {
                artyom.initialize({
                    lang: "de-DE",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true
                }).then(function(): void {
                    console.log("Ready!");
                });
            }, 
            250);
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

function drawListToDOM(): void {
  
    todosDOMElement.innerHTML = "";

    for (let index: number = (aufgabe.length - 1); index >= 0; index--) {
      
        let todo: HTMLElement = document.createElement("div");
        todo.classList.add("todo");

        todo.innerHTML =  "<span class='check " + aufgabe[index].todosChecked + "'><i class='fas fa-check'></i></span>"
                            + aufgabe[index].todosText +
                            "<span class='trash fas fa-trash-alt'></span>";

        todo.querySelector(".check").addEventListener("click", function(): void {
          
            toggleCheckState(index);
        });
        todo.querySelector(".trash").addEventListener("click", function(): void {
          
            deleteTodo(index);
        });

        todosDOMElement.appendChild(todo);
    }

    updateCounter();
}

function updateCounter(): void {
    counterDOMElement.innerHTML = aufgabe.length + " in total";
    zaehlerOpen = 0;
    zaehlerDone = 0;
    for (let index: number = 0; index < aufgabe.length; index++) {
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

function addTodo(): void {
  
    if (inputDOMElement.value != "") {
     
        aufgabe.push({
            todosText: inputDOMElement.value,
            todosChecked: false
        });

        inputDOMElement.value = "";

        drawListToDOM();
    }
}

function toggleCheckState(index: number): void {

    aufgabe[index].todosChecked = !aufgabe[index].todosChecked;

    drawListToDOM();
}

function deleteTodo(index: number): void {
  
    aufgabe.splice(index, 1);

    drawListToDOM();
}
