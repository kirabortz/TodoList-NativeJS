import { RenderTasks } from "./RenderTasks.js";
import { StorageSet } from "./Storage.js";

export function DelDonedTasks(tasks, clearCompletedBtn) {
  clearCompletedBtn.addEventListener("click", () => {
    tasks = tasks.filter((task) => !task.completed);
    StorageSet(tasks);
    RenderTasks();
  });
}
