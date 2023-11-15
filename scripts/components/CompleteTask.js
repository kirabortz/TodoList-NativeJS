import { RenderTasks } from "./RenderTasks.js";
import { StorageSet } from "./Storage.js";

export function CompleteTask(task, taskDoneBtn, filteredTasks, taskLabel, activeTab) {
  taskDoneBtn.addEventListener("click", () => {
    task.completed = !task.completed;
    StorageSet(filteredTasks);
    RenderTasks(activeTab);
  });
  if (task.completed) {
    taskLabel.classList.toggle("done");
    taskDoneBtn.classList.toggle("complete_task_btn");
    taskDoneBtn.classList.toggle("complete_task_btn_done");
  }
}
