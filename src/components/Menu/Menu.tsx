import React from "react";
import { Backdrop } from "../Backdrop/Backdrop";
import { SearchInput } from "../SearchInput/SearchInput";
import { tabs } from "./currentTabs";
import type { MenuProps, TChildrens } from "./types";
import { FaAngleDown } from "react-icons/fa";
import { IoIosArrowRoundBack } from "react-icons/io";

export const Menu = ({ idTab, showDropdown }: MenuProps) => {
  const MenuChildrens = ({ children, showDropdown }: TChildrens) => {
    return (
      <div className="flex flex-col pl-4">
        {children?.map((child) => (
          <React.Fragment key={child.id}>
            <button
              className="flex cursor-pointer"
              onClick={() => showDropdown(child.id)}
            >
              <div className="w-full text-left">{child.title}</div>
              <div className="pr-2 text-[#808080]">
                {child.children?.length}
              </div>
            </button>
            <div className="mt-2">{child.name}</div>
            <>
              {child.children && idTab.includes(child.id) && (
                <div className="absolute bg-[white] w-full top-0 left-0 h-full">
                  <IoIosArrowRoundBack
                    size={30}
                    className="cursor-pointer"
                    onClick={() => showDropdown(child.id)}
                  />
                  <h1 className="pl-1 font-bold text-[18px]">{child.title}</h1>
                  <div className="mt-2">
                    <MenuChildrens
                      children={child.children}
                      showDropdown={showDropdown}
                    />
                  </div>
                </div>
              )}
            </>
          </React.Fragment>
        ))}
      </div>
    );
  };

  return (
    <div>
      <Backdrop>
        <div className="shadow-md bg-[white] h-full overflow-auto pl-2 pr-2">
          <div className="mt-2 mb-2">
            <SearchInput />
          </div>
          <div className="relative">
            {tabs.map((tab) => (
              <div key={tab.id}>
                <button
                  className="border w-full text-left pl-4 h-12.5 bg-[#3CB371] text-[white] cursor-pointer flex items-center justify-between pr-1"
                  onClick={
                    tab.children ? () => showDropdown(tab.id) : undefined
                  }
                >
                  {tab.label}
                  {tab.children && (
                    <FaAngleDown
                      size={20}
                      className={`${idTab.includes(tab.id) ? "rotate-180" : undefined}`}
                    />
                  )}
                </button>
                {tab.children && idTab.includes(tab.id) && (
                  <MenuChildrens
                    children={tab.children}
                    showDropdown={showDropdown}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </Backdrop>
    </div>
  );
};
