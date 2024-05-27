import { Grid, GridItem, VStack, useMediaQuery } from "@chakra-ui/react";
import useGames from "../../hooks/useGames";
import GameCard from "../GameCard";
import GameCardSkeleton from "../GameCard/GameCardSkeleton";

function GamesCatalog() {
	const { data: games, error, isLoading } = useGames();
	const [isSmall, isMedium, isLarge] = useMediaQuery(["(max-width: 980px)", "(max-width: 1040px)", "(max-width: 1440px)"]);

	const skeletons = 12;
	const columns = isSmall ? 1 : isMedium ? 2 : isLarge ? 3 : 4;

	return (
		<Grid
			templateColumns={`repeat(${columns}, 1fr)`}
			gap={6}
			padding={12}>
			{[...Array(columns)].map((_, column) => (
				<GridItem key={column}>
					<VStack gap={6}>
						{isLoading && [...Array(skeletons)].map((_, key) => (key % columns == column ? <GameCardSkeleton key={key} /> : null))}
						{games.map((game, index) => {
							if (index % columns == column)
								return (
									<GameCard
										key={game.id}
										game={game}
									/>
								);
						})}
					</VStack>
				</GridItem>
			))}
		</Grid>
	);
}

export default GamesCatalog;
