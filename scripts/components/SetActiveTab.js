import { updateTaskList } from "./UpdateTaskList.js";
import { getLocalStorageTabParse, setLocalStorage } from "./LocalStorage.js";

export const setActiveTab = (activeTab) => {
  const tabs = document.querySelectorAll(".tab");

  tabs.forEach((tab) => {
    if (activeTab) {
      tab.classList.remove("active");
      tab.classList.remove("selected");

      activeTab.classList.add("active");
      activeTab.classList.add("selected");
    }
    tab.addEventListener("click", () => {
      setCurrentTab(tab);
    });
  });

  const setCurrentTab = (selectedTab) => {
    setLocalStorage(selectedTab.dataset.tab);

    const activeTab = getLocalStorageTabParse();

    tabs.forEach((tab) => {
      tab.classList.remove("active");
      tab.classList.remove("selected");
    });

    activeTab.classList.add("active");
    activeTab.classList.add("selected");

    updateTaskList(activeTab);
  };
};
