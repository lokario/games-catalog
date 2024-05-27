import { Text, Button, HStack, Menu, MenuButton, MenuItem, MenuList, Box, MenuDivider, VStack } from "@chakra-ui/react";
import { FaCheck, FaChevronDown } from "react-icons/fa6";
import { GameQuery, GamesOrdering } from "../../hooks/useGames";
import usePlatforms from "../../hooks/usePlatforms";

interface GamesControlsProps {
	gameQuery: GameQuery;
	setGameQuery: (gameQuery: GameQuery) => void;
}

function GamesControls({ gameQuery, setGameQuery }: GamesControlsProps) {
	const { data: platforms, error, isLoading } = usePlatforms();

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
			<Menu>
				<MenuButton
					fontWeight="400"
					fontSize={"medium«"}
					as={Button}
					rightIcon={<FaChevronDown />}>
					<Text
						display="inline"
						fontWeight="600">
						Platforms
					</Text>
				</MenuButton>
				<MenuList>
					<Box
						px={3}
						textAlign="center">
						<Text
							color="gray.500"
							fontSize="large">
							Platforms
						</Text>
						{gameQuery.parent_platforms && (
							<Button
								width="100%"
								colorScheme="red"
								variant="ghost"
								onClick={() => setGameQuery({ ...gameQuery, parent_platforms: null })}>
								Clear
							</Button>
						)}
					</Box>
					<MenuDivider />
					{platforms.map(platform => (
						<MenuItem
							key={platform.id}
							justifyContent="space-between"
							onClick={() => setGameQuery({ ...gameQuery, parent_platforms: platform.id })}>
							{platform.name}
							{gameQuery.parent_platforms == platform.id && (
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
