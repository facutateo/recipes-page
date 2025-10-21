export function createRMeal() {
    return fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then((response) => response.json())
        .then((data) => {
            return data.meals[0];
        });
}
export function createMealById(id: string) {
    return fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then((response) => response.json())
        .then((data) => {
            return data.meals[0];
        });
}

export function createMealsByTitle(title: string) {
    return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${title}`)
        .then((response) => response.json())
        .then((data) => {
            return data;
        });
}

export function createMealsByLetters(letters: string) {
    return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letters}`)
        .then((response) => response.json())
        .then((data) => {
            return data;
        });
}