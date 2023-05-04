import { useContext, createContext, useState } from "react";
import useLocalStorage from "use-local-storage";

const UIContext = createContext({});

export const useUI = () => {
  return useContext(UIContext);
};

export const UIProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [x, setX] = useLocalStorage('Mode',false);
  const [user, setUser] = useState(null);
  
  const [navMenu, setNavMenu] = useState(false);

  const toggleNavMenu = () => {
    setNavMenu(!navMenu);
  };

  const toggleTheme = () => {
    setX(!x);
    setTheme(theme === "light" ? "dark" : "light");
  };

  const userInfo = () =>{
    setUser({
        name: user.displayName,
        photoUrl: user.photoURL,
      })
  }
  

  const value = {
    x,
    user,
    theme,
    setTheme,
    navMenu,
    userInfo,
    setUser,
    setNavMenu,
    toggleNavMenu,
    toggleTheme,
  };

  return <UIContext.Provider value={value}>{children}</UIContext.Provider>;
};
