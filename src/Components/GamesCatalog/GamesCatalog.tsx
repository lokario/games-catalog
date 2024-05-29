import { Text, Grid, GridItem, VStack, Alert, AlertIcon, Box } from "@chakra-ui/react";
import useGames, { GameQuery } from "../../hooks/useGames";
import GameCard, { GameCardSkeleton } from "../GameCard";
import { DisplayOption } from "../DisplayOptions/DisplayOptions";
import useResolution from "../../hooks/useResolution";
import { useLayoutEffect, useRef, useState } from "react";

interface GamesCatalogProps {
	gameQuery: GameQuery;
	displayOption: DisplayOption;
}

function GamesCatalog({ gameQuery, displayOption }: GamesCatalogProps) {
	const skeletons = 12;
	const [gameCardWidth, setgameCardWidth] = useState(0);
	const [isSmall, isMedium, isLarge] = useResolution();
	const { data: games, error, isLoading } = useGames(gameQuery);
	const columns = isSmall || displayOption == DisplayOption.Column ? 1 : isMedium ? 2 : isLarge ? 3 : 4;

	const ref = useRef<HTMLDivElement>(null);
	useLayoutEffect(() => {
		if (ref.current) {
			const { width } = ref.current.getBoundingClientRect();
			setgameCardWidth((width - 24 * columns) / columns);
		}
	}, [games, columns]);

	if (error) {
		return (
			<Alert status="error">
				<AlertIcon />
				{error}
			</Alert>
		);
	}

	if (!games.length)
		return (
			<Text
				textAlign="center"
				fontSize="xl">
				We're sorry, but no games match the criteria you provided.
			</Text>
		);

	return (
		<Grid
			ref={ref}
			templateColumns={`repeat(${columns}, 1fr)`}
			gap="24px">
			{[...Array(columns)].map((_, column) => (
				<GridItem key={column}>
					<VStack gap="24px">
						{isLoading && [...Array(skeletons)].map((_, key) => (key % columns == column ? <GameCardSkeleton key={key} /> : null))}
						{games.map((game, index) => {
							if (index % columns == column)
								return (
									<Box
										key={game.id}
										maxWidth={`${gameCardWidth}px`}>
										<GameCard game={game} />
									</Box>
								);
						})}
					</VStack>
				</GridItem>
			))}
		</Grid>
	);
}

export default GamesCatalog;
