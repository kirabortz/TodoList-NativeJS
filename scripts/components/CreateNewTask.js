import { getLocalStorageParse, setLocalStorage } from "./LocalStorage.js";
import { updateTaskList } from "./updateTaskList.js";

export const createNewTask = (activeTab) => {
  const tasks = getLocalStorageParse();
  const newTaskInput = document.querySelector(".new_task_input");

  newTaskInput.onblur = newTaskInput.onkeyup = (e) => {
    if (e.key === "Enter" || e.type === "blur") {
      if (newTaskInput.value.trim()) {
        const uniqueId = Math.random().toString(36).substr(2, 9);

        const task = {
          id: uniqueId,
          value: newTaskInput.value.trim(),
          completed: false,
        };

        tasks.unshift(task);

        setLocalStorage(tasks);
        newTaskInput.value = "";
      }
      updateTaskList(activeTab);
    }
  };
};
