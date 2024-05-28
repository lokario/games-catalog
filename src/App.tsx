import { Text, Grid, GridItem, Show, VStack, Box } from "@chakra-ui/react";
import TopBar from "./Components/TopBar";
import GamesCatalog from "./Components/GamesCatalog";
import SideBar from "./Components/SideBar";
import { GameQuery, GamesOrdering } from "./hooks/useGames";
import { useState } from "react";
import GamesControls from "./Components/GamesControls";

function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({ ordering: "-added" } as GameQuery);

	const setGameOrdering = (ordering: string) => {
		setGameQuery({ ...gameQuery, ordering: ordering as keyof typeof GamesOrdering });
	};

	const setGamePlatform = (platform: number) => {
		setGameQuery({ ...gameQuery, parent_platforms: platform });
	};

	return (
		<Grid
			templateAreas={{ base: `"top" "main"`, lg: `"top top" "side main"` }}
			gridTemplateColumns={{ base: "1fr", lg: "250px 1fr" }}>
			<GridItem area={"top"}>
				<TopBar />
			</GridItem>
			<Show above="lg">
				<GridItem area={"side"}>
					<SideBar />
				</GridItem>
			</Show>
			<GridItem
				as="main"
				area={"main"}>
				<Box
					pl={2}
					pt={8}
					pr={10}>
					<Box mb={8}>
						<GamesControls
							setGameOrdering={setGameOrdering}
							setGamePlatform={setGamePlatform}
							gameQuery={gameQuery}
						/>
					</Box>
					<GamesCatalog gameQuery={gameQuery} />
				</Box>
			</GridItem>
		</Grid>
	);
}

export default App;
