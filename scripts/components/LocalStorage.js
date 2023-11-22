export const getLocalStorageParse = () => JSON.parse(localStorage.getItem("tasks")) || [];

export const getLocalStorageTabParse = () => document.querySelector(`[data-tab="${JSON.parse(localStorage.getItem("selectedTab")) || "all"}"]`);

export const setLocalStorage = (data) => {
  if (typeof data === "string") {
    localStorage.setItem("selectedTab", JSON.stringify(data));
  } else {
    localStorage.setItem("tasks", JSON.stringify(data));
  }
};
