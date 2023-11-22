import { deleteDoneTasks } from "./scripts/components/DeleteDoneTasks.js";
import { getLocalStorageTabParse } from "./scripts/components/LocalStorage.js";
import { setActiveTab } from "./scripts/components/SetActiveTab.js";
import { toggleAllTasksStatus } from "./scripts/components/ToggleAllTasksStatus.js";
import { updateTaskList } from "./scripts/components/UpdateTaskList.js";

function App() {
  const activeTab = getLocalStorageTabParse();

  setActiveTab(activeTab);

  toggleAllTasksStatus(activeTab);

  deleteDoneTasks(activeTab);

  updateTaskList(activeTab);
}
App();
