import { RenderTasks } from "./RenderTasks.js";
import { StorageSet } from "./Storage.js";

export function DelDonedTasks(tasks, activeTab) {
  let clearCompletedBtn = document.querySelector(".clear_completed_btn");

  clearCompletedBtn.addEventListener("click", () => {
    tasks = tasks.filter((task) => !task.completed);

    StorageSet(tasks);
    RenderTasks(tasks, activeTab);
  });
}
