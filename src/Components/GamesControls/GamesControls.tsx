import { Text, Button, HStack, Menu, MenuButton, MenuItem, MenuList, Box, MenuDivider, VStack } from "@chakra-ui/react";
import { FaCheck, FaChevronDown } from "react-icons/fa6";
import { GameQuery, GamesOrdering } from "../../hooks/useGames";
import usePlatforms from "../../hooks/usePlatforms";
import DisplayOptions from "../DisplayOptions";
import { DisplayOption } from "../DisplayOptions/DisplayOptions";

interface GamesControlsProps {
	gameQuery: GameQuery;
	displayOption: DisplayOption;
	setGameOrdering: (ordering: string) => void;
	setGamePlatform: (platform: number) => void;
	setDisplayOption: (displayOption: DisplayOption) => void;
}

function GamesControls({ gameQuery, displayOption, setGameOrdering, setGamePlatform, setDisplayOption }: GamesControlsProps) {
	const { data: platforms } = usePlatforms();

	const currentPlatform = platforms.find(p => p.id == gameQuery.parent_platforms);

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
							onClick={() => setGameOrdering(key)}>
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
						{currentPlatform ? currentPlatform.name : "Platforms"}
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
								onClick={() => setGamePlatform()}>
								Clear
							</Button>
						)}
					</Box>
					<MenuDivider />
					{platforms.map(platform => (
						<MenuItem
							key={platform.id}
							justifyContent="space-between"
							onClick={() => setGamePlatform(platform.id)}>
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
			<Box marginLeft="auto">
				<DisplayOptions
					displayOption={displayOption}
					setDisplayOption={setDisplayOption}
				/>
			</Box>
		</HStack>
	);
}

export default GamesControls;
