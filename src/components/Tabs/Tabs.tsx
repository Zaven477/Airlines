import type { TabId, TabsProps } from "./types";

export const Tabs = ({ tab, activeTab, setActiveTab }: TabsProps) => {
  const setTab = (id: TabId) => {
    setActiveTab(activeTab === id ? null : id);
  };

  return (
    <button
      className={`cursor-pointer ${
        tab.id === activeTab ? "border-b-4 border-[green]" : undefined
      }`}
      onClick={() => setTab(tab.id)}
    >
      {tab.label}
    </button>
  );
};
