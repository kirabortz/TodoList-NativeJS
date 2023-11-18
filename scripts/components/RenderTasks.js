import { ActiveCounter } from "./ActiveCounter.js";
import { AddNewTask } from "./AddNewTask.js";
import { FilterTask } from "./FilterTask.js";
import { TaskBlock } from "./TaskBlock.js";
import { Visibility } from "./Visibility.js";
import { StorageParse } from "./Storage.js";

export const RenderTasks = (activeTab) => {
  const tasks = StorageParse();

  AddNewTask(activeTab);

  const filteredTasks = FilterTask(tasks, activeTab);

  Visibility(tasks);

  TaskBlock(filteredTasks, activeTab);

  ActiveCounter(tasks);
};
