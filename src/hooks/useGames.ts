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
	recent: boolean;
	discover: boolean;
	genres: number;
	search: string;
	parent_platforms: number;
	ordering: keyof typeof GamesOrdering;
}

export const GamesOrdering = { name: "Name", "-added": "Popularity", rating: "Average rating", released: "Release date", added: "Date added" } as const;

function useGames(gameQuery: GameQuery) {
	let endPoint = "/games";

	if (gameQuery.recent) endPoint += "/lists/recent-games-past";
	if (gameQuery.discover) endPoint += "/lists/greatest";

	return useData<Game>(endPoint, { ...gameQuery }, [gameQuery]);
}

export default useGames;
