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

const useGames = () => {};

export default useGames;
