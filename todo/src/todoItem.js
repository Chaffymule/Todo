"use strict";
/*export class TodoItem {
  /*public id: number;
  public task: string;
  public complete: boolean = false;*/
/*public constructor(id: number, task: string, complete: boolean = false) {
    this.id = id;
    this.task = task;
    this.complete = complete;
  }
  public printDetails(): void {
    console.log(
      `${this.id}\t${this.task} ${this.complete ? "\t(complete)" : ""}`
    );
  }
}
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItem = void 0;
var TodoItem = /** @class */ (function () {
    function TodoItem(id, task, complete) {
        if (complete === void 0) { complete = false; }
        this.id = id;
        this.task = task;
        this.complete = complete;
        // no statements required
    }
    TodoItem.prototype.printDetails = function () {
        console.log("".concat(this.id, "\t").concat(this.task, " ").concat(this.complete
            ? "\t(complete)" : ""));
    };
    return TodoItem;
}());
exports.TodoItem = TodoItem;
