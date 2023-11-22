import { updateTaskList } from "./updateTaskList.js";
import { getLocalStorageParse, setLocalStorage, getLocalStorageTabParse } from "./LocalStorage.js";

export const toggleTaskStatus = (currentTask, taskDoneBtn, taskLabel) => {
  taskDoneBtn.addEventListener("click", () => {
    const activeTab = getLocalStorageTabParse();
    const tasks = getLocalStorageParse();

    tasks.map((task) => (task.id === currentTask.id ? (task.completed = !task.completed) : task));

    setLocalStorage(tasks);
    updateTaskList(activeTab);
  });

  if (currentTask.completed) {
    taskLabel.classList.toggle("done");
    taskDoneBtn.classList.toggle("complete_task_btn");
    taskDoneBtn.classList.toggle("complete_task_btn_done");
  }
};
