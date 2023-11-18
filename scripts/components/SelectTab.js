import { RenderTasks } from "./RenderTasks.js";
import { StorageTabParse, StorageTabSet } from "./Storage.js";

export const SelectTab = (activeTab) => {
  const tabs = document.querySelectorAll(".tab");

  tabs.forEach((tab) => {
    if (activeTab) {
      tab.classList.remove("active");
      tab.classList.remove("selected");
      activeTab.classList.add("active");
      activeTab.classList.add("selected");
    }
    tab.addEventListener("click", () => {
      CurrentTab(tab);
    });
  });

  const CurrentTab = (selectedTab) => {
    StorageTabSet(selectedTab);
    const activeTab = StorageTabParse();

    tabs.forEach((tab) => {
      tab.classList.remove("active");
      tab.classList.remove("selected");
    });

    activeTab.classList.add("active");
    activeTab.classList.add("selected");
    RenderTasks(activeTab);
  };
};
