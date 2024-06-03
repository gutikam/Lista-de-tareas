document.addEventListener("DOMContentLoaded", function(){
    const nuevaTareaInput = document.getElementById("nuevaTarea");
    const agregarTareaBtn = document.getElementById("agregarTarea");
    const listaTareas = document.getElementById("listaTareas");

    cargarTareas();

    agregarTareaBtn.addEventListener("click", function(){
        const tareaTexto = nuevaTareaInput.value.trim();
        if(tareaTexto !== ""){
            agregarTarea(tareaTexto);
            nuevaTareaInput.value = "";
        }
    });

    function agregarTarea(texto){
        const nuevaTarea = document.createElement("li");
        nuevaTarea.textContent = texto;
        nuevaTarea.classList.add("tarea");

        const completarBtn = document.createElement("button");
        completarBtn.textContent = "Completar";
        completarBtn.classList.add("completar");
        completarBtn.addEventListener("click", function(){
            nuevaTarea.classList.toggle("completada");
            guardarTareas();
        });

    const eliminarBtn = document.createElement("button");
    eliminarBtn.textContent = "Eliminar";
    eliminarBtn.classList.add("eliminar");
    eliminarBtn.addEventListener("click", function(){
        nuevaTarea.remove();
        guardarTareas();
    });

    nuevaTarea.appendChild(completarBtn);
    nuevaTarea.appendChild(eliminarBtn);
    listaTareas.appendChild(nuevaTarea);

    guardarTareas();

    };

    function cargarTareas(){
        const tareas = JSON.parse(localStorage.getItem("tareas")) || [];
        tareas.forEach(tarea => {
            agregarTarea(tarea);
        });
    }

    function guardarTareas(){
        const tareas = [];
        document.querySelectorAll(".tarea").forEach(tarea => {
            tareas.push(tarea.textContent);
        });
        localStorage.setItem("tareas", JSON.stringify(tareas));
    }


});







