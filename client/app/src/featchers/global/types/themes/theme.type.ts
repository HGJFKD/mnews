import { Dispatch, SetStateAction } from "react";

type themeModeType = string | string

export type ContextValue = {
    mode: themeModeType;
    setMode: Dispatch<SetStateAction<themeModeType>>;
    toggleTheme: () => void;
  };

  