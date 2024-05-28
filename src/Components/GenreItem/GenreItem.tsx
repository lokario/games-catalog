import { Image, HStack, Link, Text, useColorModeValue } from "@chakra-ui/react";
import { Genre } from "../../hooks/useGenres";
import getCroppedImageUrl from "../../services/image-url";

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
			<Image
				boxSize="32px"
				objectFit="cover"
				borderRadius="6px"
				src={getCroppedImageUrl(genre.image_background)}></Image>
			<Text
				m={2}
				fontSize="lg"
				lineHeight={1}
				whiteSpace="normal"
				_groupHover={{ color: textColorActive }}
				color={isActive ? textColorActive : textColor}
				fontWeight={isActive ? "700" : "500"}>
				{genre.name}
			</Text>
		</HStack>
	);
}

export default GenreItem;
