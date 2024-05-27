import { Grid, GridItem, VStack, useMediaQuery } from "@chakra-ui/react";
import useGames from "../../hooks/useGames";
import GameCard from "../GameCard";

function GamesCatalog() {
	const { data: games, error, isLoading } = useGames();
    const [isSmall, isMedium, isLarge] = useMediaQuery(["(max-width: 980px)", "(max-width: 1040px)", "(max-width: 1440px)"]);

	console.log(games);

	const columns = isSmall ? 1 : isMedium ? 2 : isLarge ? 3 : 4;

	return (
		<Grid
			templateColumns={`repeat(${columns}, 1fr)`}
			gap={6}
			padding={12}>
			{[...Array(columns)].map((_, column) => (
				<GridItem key={column}>
					<VStack gap={6}>
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
