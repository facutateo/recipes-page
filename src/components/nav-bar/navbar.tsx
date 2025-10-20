import Logoicon from '../../assets/fork-knife.svg?react';

function NavBar() {
    return (
        <nav className="justify-start flex gap-10 p-4 bg-white shadow-md">
            <Logoicon className="h-8 w-8"/>
            <div className="flex gap-6">
                <a href="/home" className="text-gray-600 hover:text-gray-800">Home</a>
                <a href="/favorites" className="text-gray-600 hover:text-gray-800">Favorites</a>
            </div>
        </nav>
    )
}
export default NavBar;