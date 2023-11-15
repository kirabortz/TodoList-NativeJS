import { RenderTasks } from "./RenderTasks.js";
import { StorageParse, StorageSet } from "./Storage.js";

export function DelDonedTasks(activeTab) {
  let clearCompletedBtn = document.querySelector(".clear_completed_btn");

  clearCompletedBtn.addEventListener("click", () => {
    let tasks = StorageParse();
    tasks = tasks.filter((task) => !task.completed);

    StorageSet(tasks);
    RenderTasks(activeTab);
  });
}
