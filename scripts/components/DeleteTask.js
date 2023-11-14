import { RenderTasks } from "./RenderTasks.js";
import { StorageSet } from "./Storage.js";

export function DeleteTask(tasks, task, taskDeleteBtn, activeTab) {
  taskDeleteBtn.addEventListener("click", () => {
    tasks = tasks.filter((t) => t.id !== task.id);

    StorageSet(tasks);
    RenderTasks(tasks, activeTab);
  });
}
