import { ActiveCounter } from "./ActiveCounter.js";
import { AddNewTask } from "./AddNewTask.js";
import { AllTasksDone } from "./AllTasksDone.js";
import { DelDonedTasks } from "./DelDonedTasks.js";
import { FilterTask } from "./FilterTask.js";
import { StorageParse } from "./Storage.js";
import { TaskBlock } from "./TaskBlock.js";
import { Visibility } from "./Visibility.js";

export function RenderTasks() {
  let tasks = StorageParse();
  let newTaskInput = document.querySelector(".new_task_input");
  let statusBtns = document.querySelector(".status_btns");
  let clearCompletedBtn = document.querySelector(".clear_completed_btn");
  let completeAllTasksBtn = document.querySelector(".complete_all_tasks_btn");

  Visibility(completeAllTasksBtn, statusBtns, tasks, clearCompletedBtn);

  let filteredTasks = FilterTask(tasks);

  AllTasksDone(completeAllTasksBtn, tasks);
  AddNewTask(newTaskInput, tasks);
  TaskBlock(filteredTasks);
  ActiveCounter(tasks);
  DelDonedTasks(tasks, clearCompletedBtn);
}
