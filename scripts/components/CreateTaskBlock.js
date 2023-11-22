import { toggleTaskStatus } from "./ToggleTaskStatus.js";
import { deleteTask } from "./DeleteTask.js";
import { updateTaskEdit } from "./UpdateTaskEdit.js";

export const createTaskBlock = (filteredTasks, activeTab) => {
  const taskList = document.querySelector(".task_list");
  taskList.innerHTML = "";

  filteredTasks.forEach((task) => {
    const taskBlock = document.createElement("div");
    taskBlock.classList.add("task_block");

    const taskDoneBtn = document.createElement("input");
    taskDoneBtn.classList.add("complete_task_btn");
    taskDoneBtn.setAttribute("type", "button");
    taskDoneBtn.id = `${task.id}`;

    const taskLabel = document.createElement("label");
    taskLabel.classList.add("task_label");
    taskLabel.htmlFor = taskDoneBtn.id;
    taskLabel.textContent = task.value;
    taskLabel.addEventListener("click", (e) => e.preventDefault());

    const taskDeleteBtn = document.createElement("button");
    taskDeleteBtn.classList.add("delete_task_btn");

    toggleTaskStatus(task, taskDoneBtn, taskLabel);

    updateTaskEdit(filteredTasks, task, taskDeleteBtn, taskDoneBtn, taskBlock, taskLabel);

    deleteTask(task, taskDeleteBtn, activeTab);

    taskBlock.append(taskDoneBtn, taskLabel, taskDeleteBtn);
    taskList.appendChild(taskBlock);
  });
};
