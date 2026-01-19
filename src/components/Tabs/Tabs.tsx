import type { TabId, TabsProps } from "./types";

export const Tabs = ({
  tab,
  activeTab,
  setActiveTab,
  className = {},
}: TabsProps) => {
  const setTab = (id: TabId) => {
    setActiveTab(activeTab === id ? null : id);
  };

  return (
    <button
      className={`cursor-pointer ${className.content} ${
        tab.id === activeTab
          ? className.background
            ? `${className.background}`
            : "border-b-4 border-[green]"
          : undefined
      }`}
      onClick={() => setTab(tab.id)}
    >
      {tab.label}
    </button>
  );
};
