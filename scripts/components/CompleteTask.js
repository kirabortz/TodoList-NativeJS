import { RenderTasks } from "./RenderTasks.js";
import { StorageParse, StorageSet, StorageTabParse } from "./Storage.js";

export const CompleteTask = (task, taskDoneBtn, taskLabel) => {
  taskDoneBtn.addEventListener("click", () => {
    const activeTab = StorageTabParse();
    const tasks = StorageParse();
    tasks.map((t) => {
      if (task.id == t.id) {
        t.completed = !t.completed;
      }
      return t;
    });
    StorageSet(tasks);
    RenderTasks(activeTab);
  });
  if (task.completed) {
    taskLabel.classList.toggle("done");
    taskDoneBtn.classList.toggle("complete_task_btn");
    taskDoneBtn.classList.toggle("complete_task_btn_done");
  }
};
