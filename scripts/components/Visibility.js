export function Visibility(completeAllTasksBtn, statusBtns, tasks, clearCompletedBtn) {
  completeAllTasksBtn.classList.toggle("hidden", tasks.length === 0);
  statusBtns.classList.toggle("hidden", tasks.length === 0);

  if (tasks.some((task) => task.completed)) {
    clearCompletedBtn.classList.remove("visible");
  } else {
    clearCompletedBtn.classList.add("visible");
  }
}
