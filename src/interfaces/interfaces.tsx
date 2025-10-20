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