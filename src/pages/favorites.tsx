import type { cardProps } from "../interfaces/interfaces";
import { useEffect, useState } from "react";
import Card from "../components/card";
import { useFavorites } from "../contexts/favcontext";
import { createMealById } from "../calls/createmeal";
import Cardloading from "../components/cardloading";


function Favorites() {
    const { favs } = useFavorites();
    const [favorites, setFavorites] = useState<cardProps[]>([]);
    const [loadedCards, setLoadedCards] = useState(true);
    useEffect(() => {
        const fetchFavoriteMeals = async () => {
            try {
                const mealPromises = favs.map(id => createMealById(id));
                    const meals = await Promise.all(mealPromises);
                    const loadedCards: cardProps[] = meals
                .filter(meal => meal && meal.idMeal)
                .map((meal) => ({
                    id: meal.idMeal,
                    title: meal.strMeal,
                    imageUrl: meal.strMealThumb,
                    country: meal.strArea,
                    videoUrl: meal.strYoutube
                }));
                    setFavorites(loadedCards);
                    setLoadedCards(false);
                }
                catch (error) {
                    console.error("Error fetching favorite meals:", error);
                }
            };
            if (favs.length > 0 && favs) {
                fetchFavoriteMeals();
            } else {
                setFavorites([]);
            }
    }, [favs]);
    if (loadedCards && favs.length > 0) {
        return (
            <div className="justify-self-center items-center grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
                {favs.map((id) => (
                    <Cardloading key={id} />
                ))}
            </div>
        )
    } 
    if(favorites.length===0){
        return(
            <div className="flex justify-center items-center h-full text-2xl font-semibold">
                No favorite meals added yet.
            </div>
        )
    }
    return (
        <div className="justify-self-center items-center grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4">
        {favorites.map((card) => (
            <Card
                key={card.id}
                id={card.id}
                title={card.title}
                imageUrl={card.imageUrl}
                country={card.country}
                videoUrl={card.videoUrl}
            />
        ))}
        </div>
    )
}
export default Favorites;