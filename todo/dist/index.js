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
function renderTasks() {
    const list = document.getElementById("todo-list");
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
            const id = parseInt(event.target.getAttribute("data-id") || "0");
            toggleComplete(id);
        });
    });
    document.querySelectorAll(".todo-item span").forEach(span => {
        span.addEventListener("click", (event) => {
            const id = parseInt(event.target.getAttribute("data-id") || "0");
            toggleComplete(id);
        });
    });
}
// Agregar nueva tarea
function addTask() {
    const input = document.getElementById("new-task");
    if (input.value.trim()) {
        collection.addTodo(input.value.trim());
        input.value = "";
        renderTasks();
    }
}
// Marcar tarea como completada
function toggleComplete(id) {
    const task = collection.getTodoById(id);
    if (task) {
        collection.markComplete(id, !task.complete);
        renderTasks();
    }
}
// Eliminar tareas completadas
function clearCompleted() {
    collection.removeComplete();
    renderTasks();
}
// Asignar eventos a los botones
document.addEventListener("DOMContentLoaded", () => {
    var _a, _b;
    (_a = document.getElementById("add-task-btn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", addTask);
    (_b = document.getElementById("clear-completed-btn")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", clearCompleted);
    renderTasks();
});
