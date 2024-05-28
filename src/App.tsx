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
	const defaultGameQuery = { ordering: "-added", page: 1, page_size: 20 } as GameQuery;
	const [gameQuery, setGameQuery] = useState<GameQuery>(defaultGameQuery);
	const [displayOption, setDisplayOption] = useState(DisplayOption.Grid);

	const setGameSearch = (search: string) => {
		if (gameQuery.search != search) setGameQuery({ ...gameQuery, search: search });
	};

	const setAllGames = () => setGameQuery(defaultGameQuery);

	const setTopGames = () => {
		if (!gameQuery.discover) setGameQuery({ ...defaultGameQuery, discover: true } as GameQuery);
	};

	const setNewReleases = () => {
		if (!gameQuery.recent) setGameQuery({ ...defaultGameQuery, recent: true } as GameQuery);
	};

	const setGameGenre = (genre: number) => {
		if (gameQuery.genres != genre) setGameQuery({ ...gameQuery, genres: genre, recent: false });
	};

	const setGameOrdering = (ordering: string) => {
		if (gameQuery.ordering != ordering) setGameQuery({ ...gameQuery, ordering: ordering as keyof typeof GamesOrdering });
	};

	const setGamePlatform = (platform: number) => {
		if (gameQuery.parent_platforms != platform) setGameQuery({ ...gameQuery, parent_platforms: platform });
	};

	return (
		<Grid
			templateAreas={{ base: `"top" "main"`, lg: `"top top" "side main"` }}
			gridTemplateColumns={{ base: "1fr", lg: "250px 1fr" }}>
			<GridItem area={"top"}>
				<TopBar setGameSearch={setGameSearch} />
			</GridItem>
			<Show above="lg">
				<GridItem area={"side"}>
					<SideBar
						gameQuery={gameQuery}
						setAllGames={setAllGames}
						setTopGames={setTopGames}
						setNewReleases={setNewReleases}
						setGameGenre={setGameGenre}
					/>
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
