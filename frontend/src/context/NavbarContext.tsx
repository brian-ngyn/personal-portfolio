import { createContext, useContext, useState } from "react";

interface Props {
  children: React.ReactNode | React.ReactNode[];
}

type NavbarContextType = {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const NavbarContext  = createContext<NavbarContextType>({darkMode: false, toggleDarkMode: () => {}});

export function NavBarContextProvider({ children }: Props) {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <NavbarContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </NavbarContext.Provider>
  )
}

export function useNavbarContext() {
  return useContext(NavbarContext);
}