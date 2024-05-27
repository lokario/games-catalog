import { Heading, VStack } from "@chakra-ui/react";
import useGenres from "../../hooks/useGenres";
import GenreItem from "../GenreItem/GenreItem";
import GenreItemSkeleton from "../GenreItem/GenreItemSkeleton";

function SideBar() {
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
					/>
				))}
			</VStack>
		</VStack>
	);
}

export default SideBar;
