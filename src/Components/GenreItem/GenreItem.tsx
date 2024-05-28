import { Box, HStack, Text, useColorModeValue } from "@chakra-ui/react";
import { Genre } from "../../hooks/useGenres";

interface GenreItemProps {
	genre: Genre;
	isActive: boolean;
	onSelect: (genre: number) => void;
}

function GenreItem({ genre, isActive, onSelect }: GenreItemProps) {
	const textColor = useColorModeValue("gray.600", "gray.300");
	const textColorActive = useColorModeValue("black", "white");

	return (
		<HStack
			cursor="pointer"
			role="group"
			onClick={() => onSelect(genre.id)}>
			<Box
				width="32px"
				height="32px"
				backgroundSize="cover"
				backgroundPosition="center"
				borderRadius="6px"
				flexShrink={0}
				backgroundImage={genre.image_background}></Box>
			<Text
				fontSize="lg"
				noOfLines={1}
				_groupHover={{ color: textColorActive }}
				color={isActive ? textColorActive : textColor}
				fontWeight={isActive ? "700" : "500"}>
				{genre.name}
			</Text>
		</HStack>
	);
}

export default GenreItem;
