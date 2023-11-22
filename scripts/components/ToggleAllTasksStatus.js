import { updateTaskList } from "./updateTaskList.js";
import { getLocalStorageParse, setLocalStorage, getLocalStorageTabParse } from "./LocalStorage.js";

export const toggleAllTasksStatus = () => {
  const completeAllTasksBtn = document.querySelector(".complete_all_tasks_btn");

  let allTasksCompletedState = false;

  completeAllTasksBtn.addEventListener("click", () => {
    const activeTab = getLocalStorageTabParse();

    const tasks = getLocalStorageParse();
    tasks.forEach((task) => (task.completed = !allTasksCompletedState));

    setLocalStorage(tasks);

    allTasksCompletedState = !allTasksCompletedState;

    completeAllTasksBtn.classList.toggle("active_all_tasks_btn");

    updateTaskList(activeTab);
  });
};
