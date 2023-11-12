import { RenderTasks } from "./RenderTasks.js";
import { StorageSet } from "./Storage.js";

export function CompleteTask(taskDoneBtn, filteredTasks, taskLabel, task) {
  if (task.completed) {
    taskLabel.classList.toggle("done");
    taskDoneBtn.classList.toggle("complete_task_btn");
    taskDoneBtn.classList.toggle("complete_task_btn_done");
    StorageSet(filteredTasks);
  }
  taskDoneBtn.addEventListener("click", () => {
    task.completed = !task.completed;
    StorageSet(filteredTasks);
    RenderTasks();
  });
}
