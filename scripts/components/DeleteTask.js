import { updateTaskList } from "./updateTaskList.js";
import { getLocalStorageParse, setLocalStorage } from "./LocalStorage.js";

export const deleteTask = (currentTask, taskDeleteBtn, activeTab) => {
  taskDeleteBtn.addEventListener("click", () => {
    const tasks = getLocalStorageParse();

    const afterRemoveTasks = tasks.filter((task) => task.id !== currentTask.id);

    setLocalStorage(afterRemoveTasks);
    updateTaskList(activeTab);
  });
};
