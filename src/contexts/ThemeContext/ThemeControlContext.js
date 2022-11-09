import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeControlContext = ({ children }) => {
  const [dark, setDark] = useState(false);

  const changeDarkMood = () => {
    setDark(!dark);
    if (!dark) {
      document.body.style.backgroundColor = '#141E27'
      document.body.style.color = '#F1F1F1'
    } else {
      document.body.style.backgroundColor = '#fff'
      document.body.style.color = '#141E27'
    }
  }

  const themeInfo = { dark, setDark, changeDarkMood }
  return (
    <ThemeContext.Provider value={themeInfo}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeControlContext;