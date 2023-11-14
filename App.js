import { StorageParse } from "./scripts/components/Storage.js";
import { AllTasksDone } from "./scripts/components/AllTasksDone.js";
import { DelDonedTasks } from "./scripts/components/DelDonedTasks.js";
import { TabState } from "./scripts/components/TabState.js";
import { RenderTasks } from "./scripts/components/RenderTasks.js";

export function App() {
  let tasks = StorageParse();
  let activeTab = "all";

  AllTasksDone(tasks, TabState(activeTab));

  DelDonedTasks(tasks, TabState(activeTab));

  RenderTasks(tasks, TabState(activeTab));
}
App();
