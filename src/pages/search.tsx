import { useEffect, useState } from "react";
import Card from "../components/card";
import { createMealsByTitle } from "../calls/createmeal";
import { createMealsByLetters } from "../calls/createmeal";
import type { cardProps } from "../interfaces/interfaces";
import { useSearchParams } from "react-router-dom";
import type { mealDetailProps } from "../interfaces/interfaces";


function Search() {
    const [searchParams] = useSearchParams();
    const query = searchParams.get('q');
    const [meals, setMeals] = useState<cardProps[]>([]);
    const [loading, setLoading] = useState(true);
        console.log("Query param:", query);
        useEffect(() => {
        const fetchMeals = async () => {
            const mealPromises = [];
            setLoading(true);
            if(query){
                if(query.length===1){
                    mealPromises.push( createMealsByLetters(query));
                }else
                mealPromises.push(createMealsByTitle(query));
            }else {
                setMeals([]);
                setLoading(false);
                return;
            }
            try {

                const mealsResults = await Promise.all(mealPromises);
                const apiresponse = mealsResults[0];
                const rawMeals = apiresponse?.meals || [];
                const newMeals: cardProps[] = rawMeals
                .filter((meal: mealDetailProps) => meal && meal.idMeal)
                .map((meal: mealDetailProps) => ({
                    id: meal.idMeal,
                    title: meal.strMeal,
                    imageUrl: meal.strMealThumb,
                    country: meal.strArea,
                    videoUrl: meal.strYoutube
                }));
                setMeals(newMeals);
            } catch (error) {
                console.error("Error fetching meals:", error);
            }
            finally {
                setLoading(false);
            }
        }
        fetchMeals();
        }, [query]);
    if(loading){
        return <div className="justify-center items-center flex flex-wrap gap-4 p-4"><p className="animate-jump animate-iteration-count-infinite pt-2">Searching meals...</p></div>
    }
    if(meals.length===0 && !loading)
        {
            return <div className="justify-center items-center flex flex-wrap gap-4 p-4">
            <p className="pt-2">{query? `No meals found for "${query}"`: "please put a valid meal" }</p></div>
        }
    return <>
    <div className="justify-center items-center flex flex-wrap gap-4 p-4">
        {meals.map((meal) => (
            <Card 
                key={meal.id}
                id={meal.id}
                title={meal.title}
                imageUrl={meal.imageUrl}
                country={meal.country}
                videoUrl={meal.videoUrl}
            />
        ))}
    </div>
    
    </>
}
export default Search;