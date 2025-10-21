import { useNavigate } from 'react-router-dom';
import Logoicon from '../assets/fork-knife.svg?react';
import { useState } from 'react';
import ThemeButton from './themebutton';

function NavBar() {
    const [Searchitem, setSearchitem] = useState('');
    const navigate = useNavigate();

    const hadleSearch = (event:React.FormEvent)=>{
        event.preventDefault();
        if(Searchitem.trim() ){
            navigate(`/search?q=${Searchitem}`);
        }
    }
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchitem(value)
        if(value.trim()){
            navigate(`/search?q=${value}`);
        }else{
            navigate(`/home`);
        }
    }

    return (
        
        <nav className="justify-start flex gap-10 p-4 shadow-md">
            <Logoicon className="h-8 w-8"/>
            <div className="flex gap-6">
                <a href="/home" className="text-gray-600 hover:text-gray-800 mt-2 hover:animate-jiggle">Home</a>
                <a href="/favorites" className="text-gray-600 hover:text-gray-800 mt-2 hover:animate-jiggle">Favorites</a>
                <ThemeButton />
                
            </div>
            <form className="ml-auto flex gap-2 "onSubmit={hadleSearch}>
                <input
                    type="text"
                    placeholder="Search recipes..."
                    value={Searchitem}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-sky-500 placeholder:text-gray-800"
                />
                
            </form>
        </nav>
    )       
}
export default NavBar;