import { RenderTasks } from "./RenderTasks.js";
import { StorageParse, StorageSet, StorageTabParse } from "./Storage.js";

export const AllTasksDone = () => {
  const completeAllTasksBtn = document.querySelector(".complete_all_tasks_btn");

  let allTasksCompletedState = false;
  completeAllTasksBtn.addEventListener("click", () => {
    const activeTab = StorageTabParse();
    const tasks = StorageParse();
    tasks.forEach((task) => (task.completed = !allTasksCompletedState));
    StorageSet(tasks);
    allTasksCompletedState = !allTasksCompletedState;
    completeAllTasksBtn.classList.toggle("active_all_tasks_btn");

    RenderTasks(activeTab);
  });
};
