import type { cardProps } from "../interfaces/interfaces";
import HeartIcon from '../assets/heart-fill.svg?react';
import { useFavorites } from "../contexts/favcontext";

function Card ({ id, title, imageUrl,country,videoUrl }: cardProps) {
    const { favs, onToggleClick } = useFavorites();
    const isfav = favs.includes(id);
    return<>
    <div className="animate-fade-in-down border-2 border-gray-300 rounded-lg  shadow-md w-64 h-100 flex flex-col items-center gap-2 font-sans ">
        <img src={imageUrl} alt= {title} loading="lazy" className="rounded-t-sm w-full h-50"/>
        <div className="p-2.5" >
            <h2 className="text-center">{title}</h2>
        </div>
        <div className="justify-content-center">
            <p>{country}</p>
        </div>
        <div className="mt-auto justify-between flex w-full items-center p-2.5">
            {videoUrl=== ""? "" : <a href={videoUrl} target="_blank" className="bg-sky-900 rounded-lg p-1  hover:animate-pulsing hover:animate-iteration-count-infinite font-bold !text-white hover:bg-sky-500"> video </a>}
            <button onClick={()=>onToggleClick(id)} className="hover:animate-scale ml-auto">
                <HeartIcon width={20} height={20} style={{fontSize: '20px', color: isfav? 'red' : 'transparent', stroke: isfav? 'red' : 'grey', transition: 'all 0.5s', overflow: 'visible'}}/>
            </button>
        </div>
        </div>
    </>
}
export default Card;
