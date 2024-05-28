import { Heading, VStack } from "@chakra-ui/react";
import useGenres from "../../hooks/useGenres";
import GenreItem from "../GenreItem/GenreItem";
import GenreItemSkeleton from "../GenreItem/GenreItemSkeleton";
import { GameQuery } from "../../hooks/useGames";

interface SideBarProps {
	gameQuery: GameQuery;
	setGameGenre: (genre: number) => void;
}

function SideBar({ gameQuery, setGameGenre }: SideBarProps) {
	const { data: genres, error, isLoading } = useGenres();

	const skeletons = 19;

	return (
		<VStack
			as="aside"
			mx={10}
			my={6}
			alignItems="left">
			<Heading
				as="h4"
				size="lg"
				mb="16px"
				cursor="pointer"
				onClick={() => setGameGenre()}>
				Home
			</Heading>
			<Heading
				as="h4"
				size="lg"
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
