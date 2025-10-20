import { useNavigate } from 'react-router-dom';
import Logoicon from '../assets/fork-knife.svg?react';
import { useState } from 'react';

function NavBar() {
    const [Searchitem, setSearchitem] = useState('');
    const navigate = useNavigate();

    const hadleSearch = (event:React.FormEvent)=>{
        event.preventDefault();
        navigate(`/search?q=${Searchitem}`);
    }
    return (
        
        <nav className="justify-start flex gap-10 p-4 bg-white shadow-md">
            <Logoicon className="h-8 w-8"/>
            <div className="flex gap-6">
                <a href="/home" className="text-gray-600 hover:text-gray-800 mt-2 hover:animate-jiggle">Home</a>
                <a href="/favorites" className="text-gray-600 hover:text-gray-800 mt-2 hover:animate-jiggle">Favorites</a>
            </div>
            <form className="ml-auto flex gap-2 "onSubmit={hadleSearch}>
                <input
                    type="text"
                    placeholder="Search recipes..."
                    value={Searchitem}
                    onChange={(e) => setSearchitem(e.target.value)}
                    className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
                <button type='submit' className='bg-sky-300 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded'>search</button>
            </form>
        </nav>
    )       
}
export default NavBar;