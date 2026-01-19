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
import { IoIosClose } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { Menu } from "../Menu/Menu";

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

  const styles = { content: "mt-2 pr-40", background: "none" };

  const [activeTab, setActiveTab] = useState<TabId | null>(null);
  const [isShowInput, setShowInput] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMenu, setOpenMenu] = useState(false);
  const currentRef = useRef<HTMLDivElement>(null);
  const [idTab, setIdTab] = useState<Array<number | string>>([]);

  const showDropdown = <T extends number | string>(id: T) => {
    setIdTab((prev) => {
      if (!prev.includes(id)) {
        return [...prev, id];
      } else {
        return prev.filter((currentId) => currentId !== id);
      }
    });
  };

  const showInput = (event: React.MouseEvent) => {
    event.stopPropagation();
    setShowInput(true);
  };

  const closeMenu = () => {
    setActiveTab(null);
  };

  const openDropdown = () => {
    setIsOpen(true);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const openMenu = () => {
    setOpenMenu((prev) => !prev);
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
        <div className="flex items-center cursor-pointer min-[822px]:hidden">
          <FiMenu size={30} onClick={openMenu} />
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-[green] h-10 w-10 rounded-full flex justify-center items-center text-[white]">
            S7
          </div>
          <p className="font-bold text-[18px]">Airlines</p>
        </div>
        <div className="flex w-full max-[822px]:hidden">
          {!isShowInput ? (
            <>
              <div className="flex gap-8 max-[1040px]:hidden">
                {tabs.map((tab) => (
                  <Tabs
                    tab={tab}
                    key={tab.id}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                  />
                ))}
              </div>
              <div className="flex gap-8 min-[1040px]:hidden">
                {tabs.slice(0, 2).map((tab) => (
                  <Tabs
                    tab={tab}
                    key={tab.id}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                  />
                ))}
                <div className="flex relative">
                  <button className="cursor-pointer" onClick={openDropdown}>
                    {"..."}
                  </button>
                  {isOpen && (
                    <div className="relative">
                      <div className="absolute top-4 right-0 bg-[white] shadow-md pl-4 pr-4 pb-4 z-10 rounded-[15px]">
                        {tabs.slice(2).map((tab) => (
                          <Tabs
                            tab={tab}
                            key={tab.id}
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                            className={styles}
                          />
                        ))}
                      </div>
                      <IoIosClose
                        size={30}
                        color="#808080"
                        className="absolute right-1 z-100 top-6 cursor-pointer"
                        onClick={closeDropdown}
                      />
                    </div>
                  )}
                </div>
              </div>
            </>
          ) : (
            <SearchInput ref={currentRef} />
          )}
        </div>
        {!isShowInput && (
          <div className="flex items-center ml-auto pr-65 max-[822px]:hidden">
            <CiSearch
              size={25}
              className="cursor-pointer"
              onClick={showInput}
            />
          </div>
        )}
      </header>
      {activeTab && (
        <div className="max-[822px]:hidden">
          <Backdrop onClick={closeMenu}>{menuTabs[activeTab]}</Backdrop>
        </div>
      )}
      {isOpenMenu && (
        <div className="min-[822px]:hidden">
          <Menu idTab={idTab} showDropdown={showDropdown} />
        </div>
      )}
    </>
  );
};
