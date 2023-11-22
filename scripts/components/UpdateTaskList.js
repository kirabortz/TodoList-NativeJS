import { updateActiveTasksCounter } from "./UpdateActiveTasksCounter.js";
import { createNewTask } from "./CreateNewTask.js";
import { getFilteredTasks } from "./GetFilteredTasks.js";
import { createTaskBlock } from "./CreateTaskBlock.js";
import { updateTaskStatusButtons } from "./UpdateTaskStatusBtns.js";
import { getLocalStorageParse } from "./LocalStorage.js";

export const updateTaskList = (activeTab) => {
  const tasks = getLocalStorageParse();

  createNewTask(activeTab);

  const filteredTasks = getFilteredTasks(tasks, activeTab.dataset.tab);

  updateTaskStatusButtons(tasks);

  createTaskBlock(filteredTasks, activeTab);

  updateActiveTasksCounter(tasks);
};
