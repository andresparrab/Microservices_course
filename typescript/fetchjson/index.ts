import axios from "axios";

const url = "http://jsonplaceholder.typicode.com/todos/1";
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// Response.data has a property of
// id
// title
//completed
axios.get(url).then((response) => {
  const todo = response.data as Todo; //we say that response.data has tu have the same structure as the object Todo
  const ID = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(ID, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
  The Todo with ID: ${id}
  Has a Title of: ${title}
  Is it finished? ${completed}
  `);
};
