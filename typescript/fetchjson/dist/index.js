"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var url = "http://jsonplaceholder.typicode.com/todos/1";
// Response.data has a property of
// id
// title
//completed
axios_1.default.get(url).then(function (response) {
    var todo = response.data; //we say that response.data has tu have the same structure as the object Todo
    var ID = todo.id;
    var title = todo.title;
    var completed = todo.completed;
    logTodo(ID, title, completed);
});
var logTodo = function (id, title, completed) {
    console.log("\n  The Todo with ID: " + id + "\n  Has a Title of: " + title + "\n  Is it finished? " + completed + "\n  ");
};
//# sourceMappingURL=index.js.map