import { contentContainer } from "./index.js";
let allProjects = [];
let allTask = [
  {
    title: "test",
    dueDate: "01/01/2025",
    priority: "high",
    notes: "notes test",
  },
];

function createProject(title, description) {
  return {
    title: title,
    description: description,
  };
}

function createTask(title, dueDate, priority, notes) {
  return {
    title: title,
    dueDate: dueDate,
    priority: priority,
    notes: notes,
  };
}

function showAllTask() {
  let taskContainer = document.createElement("div");
  taskContainer.className = "task-container";
  for (let i = 0; i < allTask.length; i++) {
    let singleTaskContainer = document.createElement("div");
    singleTaskContainer.className = "single-class-container";
    let taskTitle = document.createElement("p");
    taskTitle.className = "task-title";
    taskTitle.textContent = allTask[i].title;

    let taskDueDate = document.createElement("p");
    taskDueDate.className = "task-due-date";
    taskDueDate.textContent = allTask[i].dueDate;

    let taskPriority = document.createElement("p");
    taskPriority.className = "task-priority";
    taskPriority.textContent = allTask[i].priority;

    let tasknotes = document.createElement("p");
    tasknotes.className = "task-notes";
    tasknotes.textContent = allTask[i].notes;

    singleTaskContainer.append(taskTitle, taskDueDate, taskPriority, tasknotes);
    taskContainer.append(singleTaskContainer);
    contentContainer.append(taskContainer);
  }
}

export { createProject, createTask, allProjects, showAllTask };
