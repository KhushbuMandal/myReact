import { createContext , useContext } from "react";

export const ThemeContext = createContext({
    themeMode : "light",
    darkTheme : () => {},
    lightTheme : () => {}
})

// Theme Provider ky hai bs ek variable hi to export kr rhe hai n
export const ThemeProvider = ThemeContext.Provider;

// Hum custom Hooks bhi bna sakte hai
export default function useTheme () {
    return useContext(ThemeContext)
}

