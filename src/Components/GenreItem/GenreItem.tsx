import { Box, HStack, Text } from "@chakra-ui/react";
import { Genre } from "../../hooks/useGenres";

function GenreItem({ genre }: { genre: Genre }) {
	return (
		<HStack>
			<Box
				width="32px"
				height="32px"
				backgroundSize="cover"
				backgroundPosition="center"
				borderRadius="6px"
				backgroundImage={genre.image_background}></Box>
			<Text
				fontSize="lg"
				noOfLines={1}>
				{genre.name}
			</Text>
		</HStack>
	);
}

export default GenreItem;
