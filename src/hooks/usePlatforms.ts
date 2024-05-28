import platforms from "../data/platforms";

export interface Platform {
	id: number;
	name: string;
	slug: string;
	games_count: number;
}

function usePlatforms() {
	return { data: platforms };
}

export default usePlatforms;
