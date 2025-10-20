import { createContext, useContext, useEffect, useState } from "react";
import type { favContextProps } from "../interfaces/interfaces";

export const FavContext = createContext<favContextProps>({
    favs: [],
    onToggleClick: () => {},
});

export const FavProvider = ({ children }: { children: React.ReactNode }) => {
    const [favs, setFavs] = useState<string[]>(() => {
    try {
        const storedFavs = localStorage.getItem("favs");
        return storedFavs ? JSON.parse(storedFavs) : [];
    }
    catch (error) {
        console.error("Error parsing favs from localStorage:", error);
        return [];
    }
    });
    useEffect(() => {
        try {
            localStorage.setItem("favs", JSON.stringify(favs));
        }
        catch (error) {
            console.error("Error saving favs to localStorage:", error);
        }
    }, [favs]);
    const onToggleClick = (id: string) => {
        setFavs((prevFavs) =>
            prevFavs.includes(id)
                ? prevFavs.filter((favId) => favId !== id)
                : [...prevFavs, id]
        );
    };
    const contextValue: favContextProps = {
        favs,
        onToggleClick,
    };

    return (
        <FavContext.Provider value={contextValue}>
            {children}
        </FavContext.Provider>
    );
}
export const useFavorites = () => {
    return useContext(FavContext);
}


