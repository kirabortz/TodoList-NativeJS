import { ActiveCounter } from "./ActiveCounter.js";
import { AddNewTask } from "./AddNewTask.js";
import { FilterTask } from "./FilterTask.js";
import { TaskBlock } from "./TaskBlock.js";
import { Visibility } from "./Visibility.js";
import { SelectTab } from "./selectTab.js";

export function RenderTasks(tasks, activeTab) {
  SelectTab(tasks);

  let filteredTasks = FilterTask(tasks, activeTab);

  Visibility(tasks);

  AddNewTask(tasks, activeTab);

  TaskBlock(tasks, filteredTasks, activeTab);

  ActiveCounter(tasks);
}
