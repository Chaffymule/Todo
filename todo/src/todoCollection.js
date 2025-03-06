"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoCollection = void 0;
var todoItem_1 = require("./todoItem");
var TodoCollection = /** @class */ (function () {
    function TodoCollection(userName, todoItems) {
        if (todoItems === void 0) { todoItems = []; }
        this.userName = userName;
        this.todoItems = todoItems;
        this.nextId = 1;
        // no statements required
    }
    TodoCollection.prototype.addTodo = function (task) {
        while (this.getTodoById(this.nextId)) {
            this.nextId++;
        }
        this.todoItems.push(new todoItem_1.TodoItem(this.nextId, task));
        return this.nextId;
    };
    TodoCollection.prototype.getTodoById = function (id) {
        return this.todoItems.find(function (item) { return item.id === id; });
    };
    TodoCollection.prototype.markComplete = function (id, complete) {
        var todoItem = this.getTodoById(id);
        if (todoItem) {
            todoItem.complete = complete;
        }
    };
    return TodoCollection;
}());
exports.TodoCollection = TodoCollection;
