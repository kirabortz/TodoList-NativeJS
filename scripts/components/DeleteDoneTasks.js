import { updateTaskList } from "./UpdateTaskList.js";
import { getLocalStorageParse, setLocalStorage, getLocalStorageTabParse } from "./LocalStorage.js";

export const deleteDoneTasks = () => {
  const clearCompletedBtn = document.querySelector(".clear_completed_btn");

  clearCompletedBtn.addEventListener("click", () => {
    const activeTab = getLocalStorageTabParse();
    const tasks = getLocalStorageParse();

    const inCompleteTasks = tasks.filter((task) => !task.completed);

    setLocalStorage(inCompleteTasks);
    updateTaskList(activeTab);
  });
};
