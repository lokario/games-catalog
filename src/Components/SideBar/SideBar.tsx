import { Heading, VStack } from "@chakra-ui/react";
import useGenres from "../../hooks/useGenres";
import GenreItem from "../GenreItem/GenreItem";
import GenreItemSkeleton from "../GenreItem/GenreItemSkeleton";
import { GameQuery } from "../../hooks/useGames";

interface SideBarProps {
	gameQuery: GameQuery;
	setAllGames: () => void;
	setNewReleases: () => void;
	setGameGenre: (genre: number) => void;
}

function SideBar({ gameQuery, setAllGames, setNewReleases, setGameGenre }: SideBarProps) {
	const { data: genres, isLoading } = useGenres();

	const skeletons = 19;

	return (
		<VStack
			as="aside"
			mx={10}
			my={6}
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
				{isLoading && [...Array(skeletons)].map((_, key) => <GenreItemSkeleton key={key} />)}
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
