import { RenderTasks } from "./RenderTasks.js";
import { StorageSet } from "./Storage.js";

export function CompleteTask(tasks, task, taskDoneBtn, filteredTasks, taskLabel, activeTab) {
  if (task.completed) {
    taskLabel.classList.toggle("done");
    taskDoneBtn.classList.toggle("complete_task_btn");
    taskDoneBtn.classList.toggle("complete_task_btn_done");

    StorageSet(filteredTasks);
  }
  taskDoneBtn.addEventListener("click", () => {
    task.completed = !task.completed;

    StorageSet(tasks);

    RenderTasks(tasks, activeTab);
  });
}
