import { useEffect, useState } from "react";
import type { cardProps } from "../interfaces/interfaces";
import Card from "../components/card";
import { createRMeal } from "../calls/createmeal";
import Cardloading from "../components/cardloading";

function Home() {
    const [cards ,setcards] = useState<cardProps[]>([]);
    const [loadedCards, setLoadedCards] = useState<boolean>(false);
    useEffect(() => {
        const fetchRandomMeals = async () => {
            const mealPromises = [];
            for (let i = 0; i < 12; i++) {
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
    },[cards.length]);
    return (
        <div className="justify-center items-center flex flex-wrap gap-4 p-4">
            {loadedCards ? (
                cards.map((card) => (
                    <Card 
                        key={card.id}
                        id={card.id}
                        title={card.title}
                        imageUrl={card.imageUrl}
                        country={card.country}
                        videoUrl={card.videoUrl}
                    />
                ))
            ) : (
                Array.from({length: 12}).map((_, i)=>(
                    <Cardloading key={i} />
                ))
            )}
        </div>
    )
}
export default Home;