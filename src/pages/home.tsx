import { useEffect, useState } from "react";
import type { cardProps } from "../interfaces/interfaces";
import Card from "../components/card";
import { createRMeal } from "../calls/createmeal";

function Home() {
    const [cards ,setcards] = useState<cardProps[]>([]);
    useEffect(() => {
        const fetchMeals = async () => {
        for (let i = 0; i < 6; i++) {
            createRMeal().then((meal) => {
                const newCard: cardProps = {
                    id: meal.idMeal,
                    title: meal.strMeal,
                    imageUrl: meal.strMealThumb,
                    country: meal.strArea,
                    videoUrl: meal.strYoutube
                };
                setcards((prevCards) => [...prevCards, newCard]);
            }
        );
        }
    };
        fetchMeals();
    },[]);
    return (
        <div className="justify-center items-center flex flex-wrap gap-4 p-4">
            {cards.map((card) => (
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
export default Home;