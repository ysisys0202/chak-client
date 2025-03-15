"use client";

import { createContext, useContext, useState } from "react";

const SidemenuContext = createContext<{
  sidemenuActive: boolean;
  toggleSidemenu: () => void;
  closeSidemenu: () => void;
}>({
  sidemenuActive: false,
  toggleSidemenu: () => {},
  closeSidemenu: () => {},
});

const SidemenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleSidemenu = () => {
    setIsActive((prevState) => {
      return !prevState;
    });
  };
  const closeSidemenu = () => {
    setIsActive(false);
  };

  return (
    <SidemenuContext.Provider
      value={{ sidemenuActive: isActive, toggleSidemenu, closeSidemenu }}
    >
      {children}
    </SidemenuContext.Provider>
  );
};

export const useSidemenu = () => {
  const context = useContext(SidemenuContext);
  if (!context) {
    throw new Error("useSidemenu는 SidemenuProvider 안에서 사용해주세요.");
  }
  return context;
};

export default SidemenuProvider;
