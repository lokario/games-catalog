import { Text, Button, HStack, Menu, MenuButton, MenuItem, MenuList, Box } from "@chakra-ui/react";
import { FaCheck, FaChevronDown } from "react-icons/fa";
import { GameQuery, GamesOrdering } from "../../hooks/useGames";

interface GamesControlsProps {
	gameQuery: GameQuery;
	setGameQuery: (gameQuery: GameQuery) => void;
}

function GamesControls({ gameQuery, setGameQuery }: GamesControlsProps) {
	return (
		<HStack width="100%">
			<Menu>
				<MenuButton
					fontWeight="400"
					fontSize={"medium«"}
					as={Button}
					rightIcon={<FaChevronDown />}>
					Order by:{" "}
					<Text
						display="inline"
						fontWeight="600">
						{GamesOrdering[gameQuery.ordering]}
					</Text>
				</MenuButton>
				<MenuList>
					{Object.entries(GamesOrdering).map(([key, name]) => (
						<MenuItem
							key={key}
							justifyContent="space-between"
							onClick={() => setGameQuery({ ...gameQuery, ordering: key as keyof typeof GamesOrdering })}>
							{name}
							{gameQuery.ordering == key && (
								<Box color={"green.400"}>
									<FaCheck />
								</Box>
							)}
						</MenuItem>
					))}
				</MenuList>
			</Menu>
		</HStack>
	);
}

export default GamesControls;
