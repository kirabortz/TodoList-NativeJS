import { ActiveCounter } from "./ActiveCounter.js";
import { AddNewTask } from "./AddNewTask.js";
import { FilterTask } from "./FilterTask.js";
import { TaskBlock } from "./TaskBlock.js";
import { Visibility } from "./Visibility.js";
import { StorageParse } from "./Storage.js";

export function RenderTasks(activeTab) {
  let tasks = StorageParse();
  AddNewTask(activeTab);

  let filteredTasks = FilterTask(tasks, activeTab);

  Visibility(tasks);

  TaskBlock(filteredTasks, activeTab);

  ActiveCounter(tasks);
}
