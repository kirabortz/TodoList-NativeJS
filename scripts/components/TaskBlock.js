import { CompleteTask } from "./CompleteTask.js";
import { DeleteTask } from "./DeleteTask.js";
import { EditTask } from "./EditTask.js";

export function TaskBlock(filteredTasks, activeTab) {
  let taskList = document.querySelector(".task_list");
  taskList.innerHTML = "";

  filteredTasks.forEach((task) => {
    let taskBlock = document.createElement("div");
    taskBlock.classList.add("task_block");

    let taskDoneBtn = document.createElement("input");
    taskDoneBtn.classList.add("complete_task_btn");
    taskDoneBtn.setAttribute("type", "button");
    taskDoneBtn.id = `${task.id}`;

    let taskLabel = document.createElement("label");
    taskLabel.classList.add("task_label");
    taskLabel.htmlFor = taskDoneBtn.id;
    taskLabel.textContent = task.value;
    taskLabel.addEventListener("click", (e) => e.preventDefault());

    let taskDeleteBtn = document.createElement("button");
    taskDeleteBtn.classList.add("delete_task_btn");

    CompleteTask(task, taskDoneBtn, filteredTasks, taskLabel, activeTab);

    EditTask(filteredTasks, task, taskDeleteBtn, taskDoneBtn, taskBlock, taskLabel);

    DeleteTask(task, taskDeleteBtn, activeTab);

    taskBlock.append(taskDoneBtn, taskLabel, taskDeleteBtn);
    taskList.appendChild(taskBlock);
  });
}
