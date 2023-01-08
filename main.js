// FUNCION ONLOAD > Asigna los eventos al cargar el documento y declara las variables que se usarán en el código.

window.onload = init;

function init() {

    // VARIABLES DE ÁMBITO GLOBAL

    botonEnvio = document.querySelector('.btn-add');
    nuevoItem = document.querySelector('[type="text"]');
    listaCompra = document.getElementById("listaCompra");
    empty = document.querySelector(".empty"); 

    console.log("ONLOAD");
    botonEnvio.addEventListener("click", add);
    

    
}

// FUNCION ANADIR > 


function add(evento){

    console.log("Abre funcion add");

    if (nuevoItem.value == "") {
        evento.preventDefault();
    } else {
        const lista = document.createElement("li");
        //lista es el elemento padre
        lista.innerHTML = nuevoItem.value;
        // lista.addEventListener("dblclick", eliminarLi);
        listaCompra.appendChild(lista);
        //Agregamos el botón por cada LI que se crea.
        lista.appendChild(addDeleteButton());
        //Cada vez que demos al botor añadir el input se pondrá en blanco.
        nuevoItem.value = "";

        empty.style.display = "none";
        
        
    }
}

//BOTON ELIMINAR

function addDeleteButton() {
    const deleteButton = document.createElement("button");

    deleteButton.textContent = "X";

    deleteButton.className = "btn-delete";

    deleteButton.addEventListener("click", (e) => {
        // creamos variable item y asignamos el elemento padre del evento.
        const item = e.target.parentElement;
        //Eliminamos desde el elemento padre el elemento hijo
        listaCompra.removeChild(item);

        const items = document.querySelectorAll("li")

        // Si el array de LIs está vacio entonces imprime el párrafo en bloque (o inline si quieres.)
        if (items.length === 0) {
            empty.style.display = "block";
        }
    });

    return deleteButton;
}

// FUNCION ELIMINAR LI > Debemos llamar al elemento padre y desde este eliminar al hijo.

// function eliminarLi() {
//     this.parentNode.removeChild(this);
//     console.log("Elimina elemento");
// }

