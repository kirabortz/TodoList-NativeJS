import { RenderTasks } from "./RenderTasks.js";
import { StorageSet } from "./Storage.js";

export function AllTasksDone(completeAllTasksBtn, tasks) {
  let allTasksCompletedState = false;
  completeAllTasksBtn.addEventListener("click", () => {
    tasks.forEach((task) => (task.completed = !allTasksCompletedState));

    allTasksCompletedState = !allTasksCompletedState;
    completeAllTasksBtn.classList.toggle("active_all_tasks_btn");
    StorageSet(tasks);
    RenderTasks();
  });
}
