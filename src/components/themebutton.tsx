import Sunicon from '../assets/brightness-high-fill.svg?react';
import Moonicon from '../assets/moon-fill.svg?react';
import { useEffect, useState } from 'react';

function ThemeButton() {
    const [isDarkMode, setIsDarkMode] = useState<'light' | 'dark'>(localStorage.getItem('theme') === 'dark' ? 'dark' : 'light');
        useEffect(() => {
        if (isDarkMode === 'dark') {
            document.documentElement.classList.remove('dark', 'light');
            localStorage.setItem('theme', 'dark');
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark', 'light');
            document.documentElement.classList.add('light');
            localStorage.setItem('theme', 'light');

        }
        }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(prevMode => (prevMode === 'dark' ? 'light' : 'dark'));
    }
    return (
        <button onClick={toggleTheme} className="focus:outline-none">
            {isDarkMode === 'dark' ? <Sunicon className='h-5 w-5' /> : <Moonicon className='w-5 h-5' />}
        </button>
    );
}
export default ThemeButton;