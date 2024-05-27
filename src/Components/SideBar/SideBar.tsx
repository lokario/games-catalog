import { Heading, VStack } from "@chakra-ui/react";
import useGenres from "../../hooks/useGenres";
import GenreItem from "../GenreItem/GenreItem";

function SideBar() {
	const { data: genres, error, isLoading } = useGenres();

	return (
		<VStack
			as="aside"
			alignItems="left"
			margin="40px">
			<Heading
				as="h4"
				size="lg">
				Genres
			</Heading>
			<VStack alignItems="left">
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
