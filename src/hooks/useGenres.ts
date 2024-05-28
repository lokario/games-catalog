import genres from "../data/genres";

export interface Genre {
	id: number;
	name: string;
	games_count: number;
	image_background: string;
}

function useGenres() {
	return { data: genres };
}

export default useGenres;
