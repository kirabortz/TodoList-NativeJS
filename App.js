import { AllTasksDone } from "./scripts/components/AllTasksDone.js";
import { DelDonedTasks } from "./scripts/components/DelDonedTasks.js";
import { TabState } from "./scripts/components/TabState.js";
import { RenderTasks } from "./scripts/components/RenderTasks.js";
import { SelectTab } from "./scripts/components/SelectTab.js";

export function App() {
  let activeTab = "all";
  SelectTab();

  AllTasksDone(TabState(activeTab));

  DelDonedTasks(TabState(activeTab));

  RenderTasks(TabState(activeTab));
}
App();
