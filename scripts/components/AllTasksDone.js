import { RenderTasks } from "./RenderTasks.js";
import { StorageParse, StorageSet } from "./Storage.js";

export function AllTasksDone(activeTab) {
  let completeAllTasksBtn = document.querySelector(".complete_all_tasks_btn");

  let allTasksCompletedState = false;
  completeAllTasksBtn.addEventListener("click", () => {
    let tasks = StorageParse();
    tasks.forEach((task) => (task.completed = !allTasksCompletedState));
    StorageSet(tasks);
    allTasksCompletedState = !allTasksCompletedState;
    completeAllTasksBtn.classList.toggle("active_all_tasks_btn");

    RenderTasks(activeTab);
  });
}
