import { Grid, GridItem } from "@chakra-ui/react";
import TopBar from "./Components/TopBar";
import GamesCatalog from "./Components/GamesCatalog";

function App() {
	return (
		<Grid
			templateAreas={`"top top" "side main"`}
			gridTemplateColumns={"250px 1fr"}
		>
			<GridItem area={"top"}>
				<TopBar />
			</GridItem>
			<GridItem area={"side"}>SideBar</GridItem>
			<GridItem area={"main"}>
				<GamesCatalog />
			</GridItem>
		</Grid>
	);
}

export default App;
