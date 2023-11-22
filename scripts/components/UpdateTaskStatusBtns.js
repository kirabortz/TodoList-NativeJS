export const updateTaskStatusButtons = (tasks) => {
  const statusBtns = document.querySelector(".status_btns");
  const clearCompletedBtn = document.querySelector(".clear_completed_btn");
  const completeAllTasksBtn = document.querySelector(".complete_all_tasks_btn");

  completeAllTasksBtn.classList.toggle("hidden", tasks.length === 0);
  statusBtns.classList.toggle("hidden", tasks.length === 0);

  const hasCompletedTasks = tasks.some((task) => task.completed);
  clearCompletedBtn.classList.toggle("visible", !hasCompletedTasks);
};
