import style from "./style.css";

import { listClearContents } from "./to_do_list";
import { createClearContents } from "./create_todo_list";

const homeButton = document.querySelector(".home-button");
const myToDoList = document.querySelector(".my-todo-list-button");
const createToDoList = document.querySelector(".create-todo-list-button");
const content = document.querySelector(".content");

myToDoList.addEventListener("click", () => {
  listClearContents();
});
createToDoList.addEventListener("click", () => {
  createClearContents();
});

export { content };
