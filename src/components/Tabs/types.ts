import type { Dispatch, SetStateAction } from "react";

export type TabId = 1 | 2 | 3 | 4;
type Label = "Покупка и управление" | "S7 Priority" | "Информация" | "Бизнесу";

export interface Tab {
  id: TabId;
  label: Label;
}

export interface TabsProps {
  tab: Tab;
  activeTab: TabId | null;
  setActiveTab: Dispatch<SetStateAction<TabId | null>>;
}
