export const FilterTask = (tasks, activeTab) => {
  return tasks.filter((task) => {
    if (activeTab.dataset.tab === "all") {
      return true;
    } else if (activeTab.dataset.tab === "active") {
      return !task.completed;
    } else if (activeTab.dataset.tab === "completed") {
      return task.completed;
    }
  });
};
