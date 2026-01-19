import { CiSearch } from "react-icons/ci";
import type { SearchInputProps } from "./types";
import { data } from "./menuDropdown";
import { useState } from "react";
import { FindMatches } from "../FindMatches/FindMatches";
import { IoIosClose } from "react-icons/io";

export const SearchInput = ({ ref }: SearchInputProps) => {
  const [names, setNames] = useState(data);
  const [value, setValue] = useState("");

  const searchMatches = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    setValue(text);

    const filteredData = data.map((item) => {
      const filtered = item.items.filter((item) =>
        item.name.toLowerCase().includes(text.trim().toLowerCase())
      );
      return { ...item, items: filtered };
    });
    const matches = filteredData.filter((item) => item.items.length > 0);
    setNames(matches);
  };

  const closeDropdown = (event: React.MouseEvent) => {
    event.stopPropagation();
    setValue('')
  }

  return (
    <div className="flex items-center w-full">
      <div className="flex items-center relative w-full" ref={ref}>
        <CiSearch className="absolute pl-5" size={40} />
        <input
          className="border border-[#C0C0C0] h-10 w-full max-w-250 rounded-[5px] outline-none pl-12"
          type="text"
          name="search"
          placeholder="Поиск"
          value={value}
          onChange={searchMatches}
        />
        {value.length > 0 && (
          <IoIosClose
            size={25}
            color="#808080"
            className="absolute right-70 cursor-pointer max-[1440px]:right-5"
            onClick={closeDropdown}
          />
        )}
        {value.length > 0 && (
          <div className="shadow-md bg-[white] w-full max-w-250 max-h-160 absolute top-10 z-10 rounded-[5px] overflow-auto">
            {names.length > 0 ? (
              <div className="p-5">
                {names.map((list) => (
                  <div className="mt-7" key={list.id}>
                    <h1 className="font-bold">{list.title}</h1>
                    <ul>
                      {list.items.map((item) => (
                        <li className="mt-3" key={item.id}>
                          <FindMatches name={item.name} value={value} />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <p className="w-37.5 mx-auto pt-2 pb-2">Ничего не найдено</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
