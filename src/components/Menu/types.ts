type Child = {
  id: string;
  name: string;
};

type Children = {
  id: string;
  title?: string;
  name?: string;
  children?: Child[];
};

export type TChildrens = {
  children?: Children[];
  showDropdown: (arg: number | string) => void;
};

export interface MenuProps {
  idTab: (number | string)[];
  showDropdown: (arg: number | string) => void;
}
