import style from "./style.css";

import { showAllTask } from "./task_logic";

import { listClearContents } from "./to_do_list";
import { createClearContents } from "./create_todo_list";

const homeButton = document.querySelector(".home-button");
const myToDoList = document.querySelector(".my-todo-list-button");
const createToDoList = document.querySelector(".create-todo-list-button");
const content = document.querySelector(".content");
const contentContainer = document.querySelector(".content-container");

myToDoList.addEventListener("click", () => {
  listClearContents();
});
createToDoList.addEventListener("click", () => {
  createClearContents();
});

homeButton.addEventListener("click", () => {
  // load all task and home page messag
});

showAllTask();

export { content, contentContainer };
