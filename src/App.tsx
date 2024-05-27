import { Grid, GridItem, Show } from "@chakra-ui/react";
import TopBar from "./Components/TopBar";
import GamesCatalog from "./Components/GamesCatalog";
import SideBar from "./Components/SideBar";

function App() {
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
			<GridItem area={"main"}>
				<GamesCatalog />
			</GridItem>
		</Grid>
	);
}

export default App;
