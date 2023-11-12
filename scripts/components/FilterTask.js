import { RenderTasks } from "./RenderTasks.js";

let activeTab = "all";
let tabs = document.querySelectorAll(".tab");
tabs.forEach((tab) => {
  tab.classList.remove("active");
  tab.addEventListener("click", () => {
    activeTab = tab.dataset.tab;
    tab.classList.add("active");
    RenderTasks();
  });
});

export function FilterTask(tasks) {
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
