export const getFilteredTasks = (tasks, activeTab) => {
  return tasks.filter((task) => activeTab === "all" || (activeTab === "active" ? !task.completed : task.completed));
};
