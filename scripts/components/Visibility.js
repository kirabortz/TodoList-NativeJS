export const Visibility = (tasks) => {
  const statusBtns = document.querySelector(".status_btns");
  const clearCompletedBtn = document.querySelector(".clear_completed_btn");
  const completeAllTasksBtn = document.querySelector(".complete_all_tasks_btn");

  completeAllTasksBtn.classList.toggle("hidden", tasks.length === 0);
  statusBtns.classList.toggle("hidden", tasks.length === 0);

  if (tasks.some((task) => task.completed)) {
    clearCompletedBtn.classList.remove("visible");
  } else {
    clearCompletedBtn.classList.add("visible");
  }
};
