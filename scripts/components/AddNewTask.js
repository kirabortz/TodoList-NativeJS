import { RenderTasks } from "./RenderTasks.js";
import { StorageParse, StorageSet } from "./Storage.js";

export function AddNewTask(activeTab) {
  let tasks = StorageParse();
  let newTaskInput = document.querySelector(".new_task_input");

  newTaskInput.onblur = newTaskInput.onkeyup = (e) => {
    if (e.key == "Enter" || e.type == "blur") {
      if (newTaskInput.value.trim()) {
        const uniqueId = Math.random().toString(36).substr(2, 9);
        const task = {
          id: uniqueId,
          value: newTaskInput.value.trim(),
          completed: false,
        };
        tasks.unshift(task);

        StorageSet(tasks);
        newTaskInput.value = "";
      }
      RenderTasks(activeTab);
    }
  };
}
