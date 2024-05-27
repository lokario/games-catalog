import { HStack, Image, Text } from "@chakra-ui/react";
import { Genre } from "../../hooks/useGenres";

function GenreItem({ genre }: { genre: Genre }) {
	return (
		<HStack>
			<Image
				boxSize="32px"
				borderRadius="6px"
				src={genre.image_background}></Image>
			<Text
				fontSize="lg"
				noOfLines={1}>
				{genre.name}
			</Text>
		</HStack>
	);
}

export default GenreItem;
