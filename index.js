let storage = [];
let allTasksCompletedState = false;

let newTaskInput = document.querySelector(".new_task_input");
let tasksList = document.querySelector(".tasks_list");
let statusBtns = document.querySelector(".status_btns");
let taskCount = document.querySelector(".task_count");
let countTask = document.querySelector("#count_task");

let completeAllTasksBtn = document.querySelector(".complete_all_tasks");
let allBtn = document.querySelector(".all_btn");
let activeBtn = document.querySelector(".active_btn");
let completedBtn = document.querySelector(".completed_btn");
let clearCompletedBtn = document.querySelector(".clear_completed_btn");

newTaskInput.addEventListener("keyup", (e) => {
  if (!newTaskInput.value) return;
  if (e.keyCode === 13) AddTask(newTaskInput.value), (newTaskInput.value = "");
});
completeAllTasksBtn.addEventListener("click", () => AllTaskDone());
allBtn.addEventListener("click", () => RerenderTasks(filterAllTasks()));
activeBtn.addEventListener("click", () => RerenderTasks(filterActiveTasks()));
completedBtn.addEventListener("click", () => RerenderTasks(filterCompletedTasks()));
clearCompletedBtn.addEventListener("click", () => DeleteAllTaskDone());

let filterAllTasks = () => storage;
let filterActiveTasks = () => storage.filter((task) => !task.completed);
let filterCompletedTasks = () => storage.filter((task) => task.completed);

const RerenderTasks = (filteredTasks) => {
  tasksList.innerHTML = "";
  if (filteredTasks.length === 0) return;

  filteredTasks.forEach((task) => {
    const taskItem = document.createElement("div");
    const taskInput = document.createElement("input");
    const completeTaskBtn = document.createElement("button");
    completeTaskBtn.classList.add("complete_task_btn");
    const deleteTaskBtn = document.createElement("button");
    deleteTaskBtn.classList.add("delete_task_btn");
    taskInput.value = task.value;
    taskItem.id = task.id;
    taskItem.append(completeTaskBtn, taskInput, deleteTaskBtn);

    if (task.completed) {
      taskInput.classList.toggle("done");
      completeTaskBtn.classList.toggle("complete_task_btn_done");
    }
    if (!document.getElementById(task.id)) {
      deleteTaskBtn.addEventListener("click", () => DelTask(taskItem.id));
      completeTaskBtn.addEventListener("click", () => TaskDone(taskItem.id));
      tasksList.append(taskItem);
    }
  });
};

const AddTask = (inputValue) => {
  const uniqueId = Math.random().toString(36).substr(2, 9);
  storage.push({ id: uniqueId, value: inputValue, completed: false });
  ChangeCountTasks();
  RerenderTasks(filterAllTasks());
};

const DelTask = (id) => {
  const index = storage.findIndex((obj) => obj.id === id);
  if (index !== -1) {
    storage.splice(index, 1);
    const taskItem = document.getElementById(id);
    taskItem && taskItem.remove();
  }
  ChangeCountTasks();
};

const TaskDone = (id) => {
  const task = storage.find((task) => task.id === id);
  task.completed = !task.completed;
  RerenderTasks(filterAllTasks());
  ChangeCountTasks();
};

const AllTaskDone = () => {
  storage.map((task) => {
    task.completed = !allTasksCompletedState ? true : false;
  });
  completeAllTasksBtn.classList.toggle("active_all_tasks");
  allTasksCompletedState = !allTasksCompletedState;
  RerenderTasks(filterAllTasks());
  ChangeCountTasks();
};

const DeleteAllTaskDone = () => {
  storage = storage.filter((task) => !task.completed);
  RerenderTasks(filterAllTasks());
  ChangeCountTasks();
};

const ChangeCountTasks = () => {
  countTask.innerText = `${filterActiveTasks().length} items left`;
  console.log(storage.length);
  BlocksVisibility();
};

const BlocksVisibility = () => {
  statusBtns.style.visibility = tasksList.style.visibility = completeAllTasksBtn.style.visibility = storage.length === 0 ? "hidden" : "visible";
  completeAllTasksBtn.classList.toggle("complete_all_tasks", storage.length !== 0);
  clearCompletedBtn.style.visibility = filterCompletedTasks().length === 0 ? "hidden" : "visible";
};

window.addEventListener("load", () => {
  RerenderTasks(filterAllTasks());
  ChangeCountTasks();
});
