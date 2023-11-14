export function FilterTask(tasks, activeTab) {
  return tasks.filter((task) => {
    if (activeTab === "all") {
      return true;
    } else if (activeTab === "active") {
      return !task.completed;
    } else if (activeTab === "completed") {
      return task.completed;
    }
  });
}
