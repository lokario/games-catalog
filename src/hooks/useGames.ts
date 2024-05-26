import useData from "./useData";

export interface Platform {
	id: number;
	name: string;
}

export interface Game {
	id: number;
	name: string;
	background_image: string;
	rating_top: number;
	metacritic: number;
	platforms: { platform: Platform }[];
}

function useGames() {
	return useData<Game>("/games");
}

export default useGames;
