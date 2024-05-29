import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../../hooks/useGames";
import usePlatforms from "../../hooks/usePlatforms";
import useGenres from "../../hooks/useGenres";
import useResolution from "../../hooks/useResolution";

function GamesHeading({ gameQuery }: { gameQuery: GameQuery }) {
	const [isSmall] = useResolution();
	const { data: platforms } = usePlatforms();
	const { data: genres } = useGenres();

	const currentPlatform = platforms.find(p => p.id == gameQuery.parent_platforms);
	const currentGenre = genres.find(g => g.id == gameQuery.genres);

	const getGameHeading = () => {
		let heading = "All Games";

		if (currentGenre) heading = `${currentGenre.name} Games`;

		if (gameQuery.recent) heading = `New Releases`;

		if (gameQuery.discover) heading = `Top Games`;

		if (currentPlatform) heading += ` for ${currentPlatform.name}`;

		if (gameQuery.search) heading = `Results for: ${gameQuery.search}`;

		return heading;
	};

	return (
		<Heading
			as="h1"
			size={isSmall ? "2xl" : "4xl"}
			textAlign={isSmall ? "center" : "left"}
			noOfLines={1}>
			{getGameHeading()}
		</Heading>
	);
}

export default GamesHeading;
