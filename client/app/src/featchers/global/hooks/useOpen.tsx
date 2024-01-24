import { useState } from "react";

const useOpen = (initialState = false) => {
  const [open, setOpen] = useState(initialState);

  const handleReset = () => setOpen(initialState);

  const handleOpen = () => setOpen((prevState) => !prevState);

  return {
    on: open,
    set: setOpen,
    reset: handleReset,
    toggle: handleOpen,
  };
};

export default useOpen;
