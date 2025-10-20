export interface cardProps {
    id: string;
    title: string;
    imageUrl: string;
    videoUrl: string;
    country: string;
}

export interface favContextProps {
    favs: string[];
    onToggleClick: (id: string) => void;
}

export interface mealDetailProps {
    idMeal: string;
    strMeal: string;
    strCategory: string;
    strArea: string;
    strInstructions: string;
    strMealThumb: string;
    strYoutube: string;
}