import { BrowserRouter } from 'react-router-dom'
import React from 'react';
import AppRoutes from './routes'
import './App.scss'
import { useState, createContext } from 'react';

export type ThemeContextValue = {
  theme: string;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function App() {

  const [theme, setTheme] = useState('light');

  function toggleTheme() {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <BrowserRouter>
      <div className={`App ${theme === "light" ? "theme-light" : "theme-dark"}`}>
        <AppRoutes/>
      </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  )
}

export default App
