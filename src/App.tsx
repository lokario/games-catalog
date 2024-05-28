import { Grid, GridItem, Show, Box } from "@chakra-ui/react";
import TopBar from "./Components/TopBar";
import GamesCatalog from "./Components/GamesCatalog";
import SideBar from "./Components/SideBar";
import { GameQuery, GamesOrdering } from "./hooks/useGames";
import { useState } from "react";
import GamesControls from "./Components/GamesControls";
import { DisplayOption } from "./Components/DisplayOptions/DisplayOptions";
import GamesHeading from "./Components/GamesHeading";

function App() {
	const [gameQuery, setGameQuery] = useState<GameQuery>({ ordering: "-added" } as GameQuery);
	const [displayOption, setDisplayOption] = useState(DisplayOption.Grid);

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
					pr={10}>
					<Box mb={4}>
						<GamesHeading gameQuery={gameQuery} />
					</Box>
					<Box mb={8}>
						<GamesControls
							setGameOrdering={setGameOrdering}
							setGamePlatform={setGamePlatform}
							setDisplayOption={(displayOption: DisplayOption) => setDisplayOption(displayOption)}
							displayOption={displayOption}
							gameQuery={gameQuery}
						/>
					</Box>
					<GamesCatalog
						gameQuery={gameQuery}
						displayOption={displayOption}
					/>
				</Box>
			</GridItem>
		</Grid>
	);
}

export default App;
