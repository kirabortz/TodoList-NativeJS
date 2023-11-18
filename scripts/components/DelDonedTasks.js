import { RenderTasks } from "./RenderTasks.js";
import { StorageParse, StorageSet, StorageTabParse } from "./Storage.js";

export const DelDonedTasks = () => {
  const clearCompletedBtn = document.querySelector(".clear_completed_btn");

  clearCompletedBtn.addEventListener("click", () => {
    const activeTab = StorageTabParse();
    const tasks = StorageParse();
    const inCompleteTasks = tasks.filter((task) => !task.completed);

    StorageSet(inCompleteTasks);
    RenderTasks(activeTab);
  });
};
