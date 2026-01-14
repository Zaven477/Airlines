import { useEffect, useRef, useState } from "react";
import { Tabs } from "../Tabs/Tabs";
import type { Tab, TabId } from "../Tabs/types";
import { Management } from "../Management/Management";
import { Backdrop } from "../Backdrop/Backdrop";
import { Priority } from "../Priority/Priority";
import { Information } from "../Information/information";
import { Business } from "../Business/Business";
import { CiSearch } from "react-icons/ci";
import { SearchInput } from "../SearchInput/SearchInput";

export const Header = () => {
  const tabs: Tab[] = [
    {
      id: 1,
      label: "Покупка и управление",
    },
    {
      id: 2,
      label: "S7 Priority",
    },
    {
      id: 3,
      label: "Информация",
    },
    {
      id: 4,
      label: "Бизнесу",
    },
  ];

  const [activeTab, setActiveTab] = useState<TabId | null>(null);
  const [isShowInput, setShowInput] = useState(false);
  const currentRef = useRef<HTMLDivElement>(null);

  const showInput = (event: React.MouseEvent) => {
    event.stopPropagation();
    setShowInput(true);
  };

  const closeMenu = () => {
    setActiveTab(null);
  };

  useEffect(() => {
    const clickAway = (event: MouseEvent) => {
      if (!currentRef.current?.contains(event.target as Node)) {
        setShowInput(false);
      }
    };

    document.addEventListener("click", clickAway);

    return () => removeEventListener("click", clickAway);
  }, []);

  const menuTabs = {
    1: <Management />,
    2: <Priority />,
    3: <Information />,
    4: <Business />,
  };

  return (
    <>
      <header className="border-b border-[#C0C0C0] h-20 flex gap-10 pl-5 bg-[white]">
        <div className="flex items-center gap-2">
          <div className="bg-[green] h-10 w-10 rounded-full flex justify-center items-center text-[white]">
            S7
          </div>
          <p className="font-bold text-[18px]">Airlines</p>
        </div>
        {!isShowInput ? (
          tabs.map((tab) => (
            <Tabs
              tab={tab}
              key={tab.id}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          ))
        ) : (
          <SearchInput ref={currentRef} />
        )}
        {!isShowInput && (
          <div className="flex items-center ml-auto pr-65">
            <CiSearch
              size={25}
              className="cursor-pointer"
              onClick={showInput}
            />
          </div>
        )}
      </header>
      {activeTab && (
        <Backdrop onClick={closeMenu}>{menuTabs[activeTab]}</Backdrop>
      )}
    </>
  );
};
