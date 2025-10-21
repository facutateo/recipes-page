import Sunicon from '../assets/brightness-high-fill.svg?react';
import Moonicon from '../assets/moon-fill.svg?react';
import { useEffect, useState } from 'react';

function ThemeButton() {
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('theme') === 'dark');
        useEffect(() => {
            if (isDarkMode) {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            }
        }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    }
    return (
        <button onClick={toggleTheme} className="focus:outline-none">
            {isDarkMode ? <Sunicon className='h-5 w-5' /> : <Moonicon className='w-5 h-5' />}
        </button>
    );
}
export default ThemeButton;