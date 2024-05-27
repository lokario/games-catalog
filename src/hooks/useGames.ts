import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";

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

export interface GameQuery {
	page: number;
	page_size: number;
	genre: number;
	search: string;
	parent_platforms: number;
	ordering: keyof typeof GamesOrdering;
}

export const GamesOrdering = { name: "Name", "-added": "Popularity", rating: "Average rating", released: "Release date", added: "Date added" } as const;

export function useGames(gameQuery: GameQuery) {
	return useData<Game>("/games", { ...gameQuery }, [gameQuery]);
}

export default useGames;
