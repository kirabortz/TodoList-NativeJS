export const StorageParse = () => JSON.parse(localStorage.getItem("tasks")) || [];

export const StorageSet = (tasks) => localStorage.setItem("tasks", JSON.stringify(tasks));

export const StorageTabParse = () => {
  const selectedTab = JSON.parse(localStorage.getItem("selectedTab")) || "all";
  return document.querySelector(`[data-tab="${selectedTab}"]`);
};
export const StorageTabSet = (selectedTab) => {
  localStorage.setItem("selectedTab", JSON.stringify(selectedTab.dataset.tab));
};
