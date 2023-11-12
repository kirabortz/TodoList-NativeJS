import { RenderTasks } from "./RenderTasks.js";
import { StorageSet } from "./Storage.js";

export function DeleteTask(taskDeleteBtn, filteredTasks, task) {
  taskDeleteBtn.addEventListener("click", () => {
    filteredTasks = filteredTasks.filter((t) => t.id !== task.id);
    StorageSet(filteredTasks);
    RenderTasks();
  });
}
