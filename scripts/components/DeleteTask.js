import { RenderTasks } from "./RenderTasks.js";
import { StorageParse, StorageSet } from "./Storage.js";

export function DeleteTask(task, taskDeleteBtn, activeTab) {
  taskDeleteBtn.addEventListener("click", () => {
    let tasks = StorageParse();
    tasks = tasks.filter((t) => t.id !== task.id);

    StorageSet(tasks);
    RenderTasks(activeTab);
  });
}
