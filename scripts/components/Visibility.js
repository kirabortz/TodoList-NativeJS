export function Visibility(tasks) {
  let statusBtns = document.querySelector(".status_btns");
  let clearCompletedBtn = document.querySelector(".clear_completed_btn");
  let completeAllTasksBtn = document.querySelector(".complete_all_tasks_btn");

  completeAllTasksBtn.classList.toggle("hidden", tasks.length === 0);
  statusBtns.classList.toggle("hidden", tasks.length === 0);

  if (tasks.some((task) => task.completed)) {
    clearCompletedBtn.classList.remove("visible");
  } else {
    clearCompletedBtn.classList.add("visible");
  }
}
