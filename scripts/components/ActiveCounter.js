export function ActiveCounter(tasks) {
  let countTask = document.querySelector(".count_task");
  countTask.innerText = `${tasks.filter((task) => !task.completed).length} items left`;
}
