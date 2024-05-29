import { Heading, VStack } from "@chakra-ui/react";
import useGenres from "../../hooks/useGenres";
import GenreItem from "../GenreItem/GenreItem";
import { GameQuery } from "../../hooks/useGames";

interface SideBarProps {
	gameQuery: GameQuery;
	setAllGames: () => void;
	setTopGames: () => void;
	setNewReleases: () => void;
	setGameGenre: (genre: number) => void;
}

function SideBar({ gameQuery, setAllGames, setTopGames, setNewReleases, setGameGenre }: SideBarProps) {
	const { data: genres } = useGenres();

	return (
		<VStack
			as="aside"
			top="50px"
			marginTop="50px"
			position="sticky"
			alignItems="left">
			<Heading
				as="h4"
				fontSize="1.5rem"
				mb="16px"
				cursor="pointer"
				onClick={() => setAllGames()}>
				All Games
			</Heading>
			<Heading
				as="h4"
				fontSize="1.5rem"
				mb="16px"
				cursor="pointer"
				onClick={() => setTopGames()}>
				Top Games
			</Heading>
			<Heading
				as="h4"
				fontSize="1.5rem"
				mb="16px"
				cursor="pointer"
				onClick={() => setNewReleases()}>
				New Releases
			</Heading>
			<Heading
				as="h4"
				fontSize="1.5rem"
				mb="16px">
				Genres
			</Heading>
			<VStack
				gap={2.5}
				alignItems="left">
				{genres.map(genre => (
					<GenreItem
						key={genre.id}
						genre={genre}
						isActive={gameQuery.genres == genre.id}
						onSelect={setGameGenre}
					/>
				))}
			</VStack>
		</VStack>
	);
}

export default SideBar;
