import { TodoItem } from "./todoItem.js";
import { JsonTodoCollection } from "./jsonTodoCollection.js";

let todos = [
    new TodoItem(1, "Buy Flowers"),
    new TodoItem(2, "Get Shoes"),
    new TodoItem(3, "Collect Tickets"),
    new TodoItem(4, "Call Joe", true),
];


const collection = new JsonTodoCollection("Usuario", todos);
let showCompleted = true;


// Función para renderizar las tareas en la UI
function renderTasks(): void {
    const list = document.getElementById("todo-list") as HTMLUListElement;
    list.innerHTML = "";
    
    collection.getTodoItems(true).forEach(task => {
        const li = document.createElement("li");
        li.className = "todo-item";
        li.innerHTML = `
            <span class="${task.complete ? 'completed' : ''}" data-id="${task.id}">
                ${task.task}
            </span>
            <button data-id="${task.id}" class="toggle-btn">✔</button>
        `;
        list.appendChild(li);
    });

    // Agregar eventos a los botones después de renderizar
    document.querySelectorAll(".toggle-btn").forEach(button => {
        button.addEventListener("click", (event) => {
            const id = parseInt((event.target as HTMLButtonElement).getAttribute("data-id") || "0");
            toggleComplete(id);
        });
    });

    document.querySelectorAll(".todo-item span").forEach(span => {
        span.addEventListener("click", (event) => {
            const id = parseInt((event.target as HTMLSpanElement).getAttribute("data-id") || "0");
            toggleComplete(id);
        });
    });
}

// Agregar nueva tarea
function addTask(): void {
    const input = document.getElementById("new-task") as HTMLInputElement;
    if (input.value.trim()) {
        collection.addTodo(input.value.trim());
        input.value = "";
        renderTasks();
    }
}

// Marcar tarea como completada
function toggleComplete(id: number): void {
    const task = collection.getTodoById(id);
    if (task) {
        collection.markComplete(id, !task.complete);
        renderTasks();
    }
}

// Eliminar tareas completadas
function clearCompleted(): void {
    collection.removeComplete();
    renderTasks();
}

// Asignar eventos a los botones
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("add-task-btn")?.addEventListener("click", addTask);
    document.getElementById("clear-completed-btn")?.addEventListener("click", clearCompleted);
    renderTasks();
});
