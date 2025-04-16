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

function createProjectFunction(title, description) {
  return {
    title: title,
    description: description,
  };
}

function createTaskFunction(title, dueDate, priority, notes) {
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

function addTask() {
  const homePageAddTaskButton = document.querySelector(
    ".homepage-add-task-button"
  );
  let taskNameInput = document.querySelector(".name-input");
  let taskDateInput = document.querySelector(".task-input");
  let taskPriorityInput = document.querySelector(".priority-input");
  let taskNotesInput = document.querySelector(".note-input");
  homePageAddTaskButton.addEventListener("click", () => {
    let newTask = createTaskFunction(
      taskNameInput,
      taskDateInput,
      taskPriorityInput,
      taskNotesInput
    );
    taskNameInput.value = "";
    taskNotesInput.value = "";
    allTask.push(newTask);
    showAllTask();
    console.log("this worked ");
  });
}

export {
  createProjectFunction,
  createTaskFunction,
  allProjects,
  showAllTask,
  addTask,
};
