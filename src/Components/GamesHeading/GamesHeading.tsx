import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../../hooks/useGames";
import usePlatforms from "../../hooks/usePlatforms";
import useGenres from "../../hooks/useGenres";

function GamesHeading({ gameQuery }: { gameQuery: GameQuery }) {
	const { data: platforms, platformsError, isPlatformsLoading } = usePlatforms();
	const { data: genres, genresError, isGenresLoading } = useGenres();

	const currentPlatform = platforms.find(p => p.id == gameQuery.parent_platforms);
	const currentGenre = genres.find(g => g.id == gameQuery.genres);

	const getGameHeading = () => {
		if (currentPlatform) return `Games for ${currentPlatform.name}`;

		if (currentGenre) return `${currentGenre.name} Games`;

		return "All Games";
	};

	return (
		<Heading
			as="h1"
			size="4xl"
			noOfLines={1}>
			{getGameHeading()}
		</Heading>
	);
}

export default GamesHeading;
