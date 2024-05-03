import React, { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { FiSun } from "react-icons/fi";
import style from './theme-toggle.module.css';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    
  };

  return (
    <span className={style["theme-toggle"]} onClick={toggleTheme}>
      {theme === 'dark' ? <FiSun className={style.icons} /> : <FaMoon className={style.icons} />}
    </span>
  );
};

export default ThemeToggle;