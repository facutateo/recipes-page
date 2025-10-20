import type { cardProps } from "../interfaces/interfaces";
import HeartIcon from '../assets/heart-fill.svg?react';
import { useFavorites } from "../contexts/favcontext";

function Card ({ id, title, imageUrl,country,videoUrl }: cardProps) {
    const { favs, onToggleClick } = useFavorites();
    const isfav = favs.includes(id);
    return<>
    <div className="animate-fade-in-down border-2 border-gray-300 rounded-lg  shadow-md w-64 flex flex-col items-center gap-2 font-serif ">
        <img src={imageUrl} alt= "" loading="lazy" className="rounded-t-sm w-full"/>
        <div className="p-2.5" >
            <h2 className="text-center">{title}</h2>
        </div>
        <div className="justify-content-center">
            <p>{country}</p>
        </div>
        <div className="justify-between flex w-full items-center p-2.5">
            <a href={videoUrl} target="_blank" className="bg-sky-300 rounded-lg p-1  hover:animate-pulsing hover:animate-iteration-count-infinite"> video </a>
            <button onClick={()=>onToggleClick(id)} className="hover:animate-scale">
                <HeartIcon width={20} height={20} style={{fontSize: '20px', color: isfav? 'red' : 'white', stroke: isfav? 'red' : '#333', transition: 'all 0.5s', overflow: 'visible'}}/>
            </button>
        </div>
        </div>
    </>
}
export default Card;
