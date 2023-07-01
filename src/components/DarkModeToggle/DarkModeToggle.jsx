import { useEffect, useState } from 'react';
import { BsMoonStars, BsMoonStarsFill } from 'react-icons/bs';
const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <button
      className="fixed top-4 right-4 p-2 rounded-full bg-slate-300 dark:bg-white z-50"
      onClick={toggleDarkMode}
    >
      {isDarkMode ? (
        <BsMoonStars />
      ) : (
        
        <BsMoonStarsFill />
      )}
    </button>
  );
};

export default DarkModeToggle;
