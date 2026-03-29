import { useEffect, useState } from "react";
import type { cardProps } from "../interfaces/interfaces";
import Card from "../components/card";
import { createRMeal } from "../calls/createmeal";
import Cardloading from "../components/cardloading";


function Carrusel() {
    const [cards ,setcards] = useState<cardProps[]>([]);
    const [totalcards, settotalcards] = useState<cardProps[]>([]);
        const [loadedCards, setLoadedCards] = useState<boolean>(false);
        useEffect(() => {
            const fetchRandomMeals = async () => {
                const mealPromises = [];
                for (let i = 0; i < 10; i++) {
                    mealPromises.push(createRMeal());
                }
                try {
                    const meals = await Promise.all(mealPromises);
                    const newcards: cardProps[] = meals.map((meal) => {
                    return {
                        id: meal.idMeal,
                        title: meal.strMeal,
                        imageUrl: meal.strMealThumb,
                        country: meal.strArea,
                        videoUrl: meal.strYoutube
                    };
                    });
                    setcards(newcards);
                    setLoadedCards(true);
                } catch (error) {
                    console.error("Error fetching random meals:", error);
                }
            };
            {
                if(cards.length===0)
                    {fetchRandomMeals();}
                
            }
            settotalcards([...cards,...cards]);
        },[cards.length, cards]);
    return (
        <div className="flex items-center overflow-hidden justify-end gap-10 carrousel-container h-120">
            {loadedCards ? (
                <div className="flex flex-nowrap gap-3 carrousel">
                    {totalcards.map((card) => (
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
            ) : (
                <div className="flex flex-nowrap gap-3 carrousel">
                    {Array.from({length: 20}).map((_, i)=>(
                        <Cardloading key={i} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Carrusel;