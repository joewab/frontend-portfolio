import { createContext, useState, useContext, useEffect, ReactNode } from "react";

// Create Theme Context

interface ThemeContextType {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
  }

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
    children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const storedTheme = localStorage.getItem("theme") || "dark";
  const [theme, setTheme] = useState(storedTheme);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;    
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const Navbar = () => {

    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error("Navbar must be used within a ThemeProvider");
      }
    
    const { theme, setTheme } = context;

    function toggleTheme() {
      setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
    }

    return (
        <nav className={ 'nav' + theme ==='light' ? 'nav-light' : 'nav-dark' } role="navigation">
            <h1 className="mb-2">My Website</h1>
            <button
            className="w-20 rounded-md"
            onClick={toggleTheme}
            >Toggle Theme</button>
        </nav>
    );
};

export default ThemeProvider;