import { createContext, useContext, useEffect, useState } from "react";

const ModeContext = createContext();

export const useMode = () => useContext(ModeContext);

export const ModeProvider = ({ children }) => {
  const [mode, setMode] = useState(() => {
    const saveMode = localStorage.getItem("mode");
    return saveMode === "true";
  });

  useEffect(() => {
    localStorage.setItem("mode", mode);
  }, [mode]);

  return <ModeContext.Provider value={{ mode, setMode }}>{children}</ModeContext.Provider>;
};
