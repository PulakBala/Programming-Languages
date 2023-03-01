import React, { createContext, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import './App.css'; 
import { route } from './Routes/Route/Route';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme =()=>{
    return setTheme((curr) => (curr === "light"? "dark": "light"));
  }
  const themeInfo = {theme, toggleTheme}

  return (
    <ThemeContext.Provider value={themeInfo}>
      <div className="App" id={theme} style={{height:"auto"}}>
        <RouterProvider router={route}>

        </RouterProvider>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
