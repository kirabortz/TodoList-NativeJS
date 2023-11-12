export function StorageParse() {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}

export function StorageSet(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
