import { RenderTasks } from "./RenderTasks.js";
import { StorageParse, StorageSet } from "./Storage.js";

export const DeleteTask = (task, taskDeleteBtn, activeTab) => {
  taskDeleteBtn.addEventListener("click", () => {
    const tasks = StorageParse();
    const afterRemoveTasks = tasks.filter((t) => t.id !== task.id);

    StorageSet(afterRemoveTasks);
    RenderTasks(activeTab);
  });
};
