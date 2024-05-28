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
		let heading = "All Games";

		if (currentGenre) heading = `${currentGenre.name} Games`;

		if (gameQuery.recent) heading = `New Releases`;

		if (currentPlatform) heading += ` for ${currentPlatform.name}`;

		if (gameQuery.search) heading = `Results for: ${gameQuery.search}`;

		return heading;
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
