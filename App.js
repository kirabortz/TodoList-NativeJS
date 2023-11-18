import { AllTasksDone } from "./scripts/components/AllTasksDone.js";
import { DelDonedTasks } from "./scripts/components/DelDonedTasks.js";
import { RenderTasks } from "./scripts/components/RenderTasks.js";
import { SelectTab } from "./scripts/components/SelectTab.js";
import { StorageTabParse } from "./scripts/components/Storage.js";

function App() {
  const activeTab = StorageTabParse();

  SelectTab(activeTab);

  AllTasksDone(activeTab);

  DelDonedTasks(activeTab);

  RenderTasks(activeTab);
}
App();
