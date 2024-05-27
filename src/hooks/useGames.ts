import useData from "./useData";

export interface Platform {
	id: number;
	name: string;
	slug: string;
}

export interface Genre {
	id: number;
	name: string;
}

export interface Game {
	id: number;
	name: string;
	genres: Genre[];
	released: string;
	background_image: string;
	rating_top: number;
	metacritic: number;
	parent_platforms: { platform: Platform }[];
}

function useGames() {
	return useData<Game>("/games");
}

export default useGames;
