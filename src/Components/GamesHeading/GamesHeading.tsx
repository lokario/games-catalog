import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../../hooks/useGames";
import usePlatforms from "../../hooks/usePlatforms";

function GamesHeading({ gameQuery }: { gameQuery: GameQuery }) {
	const { data: platforms, error, isLoading } = usePlatforms();

	const currentPlatform = platforms.find(p => p.id == gameQuery.parent_platforms);

	const getGameHeading = () => {
		if (currentPlatform) {
			return `Games for ${currentPlatform.name}`;
		}

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
