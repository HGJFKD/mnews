type SideBarButtons = {
  to: string;
  icon: React.ReactElement;
  title: string;
  subBtn?: string[];
  span?: string;
};

export type SideBarProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleClick: () => void;
};

export default SideBarButtons;
