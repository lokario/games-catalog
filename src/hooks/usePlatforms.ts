import useData from "./useData";

export interface Platform {
	id: number;
	name: string;
	slug: string;
	games_count: number;
}

function usePlatforms() {
	return useData<Platform>("/platforms/lists/parents");
}

export default usePlatforms;
