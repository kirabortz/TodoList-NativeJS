import { RenderTasks } from "./RenderTasks.js";
import { TabState } from "./TabState.js";

export function SelectTab(tasks) {
  let tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => {
    tab.classList.remove("active");
    tab.addEventListener("click", () => {
      tab.classList.add("active");

      RenderTasks(tasks, TabState(tab.dataset.tab));
    });
  });
}
