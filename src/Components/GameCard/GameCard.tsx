import { Game } from "../../hooks/useGames";
import { Card, CardBody, Divider, HStack, Heading, Image, Text, VStack, useBoolean } from "@chakra-ui/react";
import getCroppedImageUrl from "../../services/image-url";
import PlatformsList from "../PlatformsList";
import Rating from "../Rating";
import CriticScore from "../CriticScore/CriticScore";

function GameCard({ game }: { game: Game }) {
	const [isHighlighted, setHighlight] = useBoolean();

	const formatDate = (dateStr: string) => {
		const date = new Date(dateStr);
		const options: Intl.DateTimeFormatOptions = { year: "numeric", month: "short", day: "numeric" };
		return date.toLocaleDateString("en-US", options);
	};

	return (
		<Card
			shadow="md"
			cursor="pointer"
			position="relative"
			borderRadius={"12px"}
			transition="all .2s"
			_hover={{ transform: "scale(1.05)", zIndex: 2 }}
			onMouseEnter={setHighlight.on}
			onMouseLeave={setHighlight.off}>
			<Image
				sx={{ borderRadius: "12px 12px 0 0" }}
				src={getCroppedImageUrl(game.background_image)}
			/>
			<CardBody>
				<VStack>
					<HStack
						width="100%"
						justifyContent="space-between">
						<PlatformsList platforms={game.parent_platforms.map(p => p.platform)} />
						<CriticScore score={game.metacritic} />
					</HStack>
					<Heading
						width="100%"
						fontSize="2xl">
						<Text
							mr="8px"
							display="inline">
							{game.name}
						</Text>
						<Rating rating={game.rating_top} />
					</Heading>
				</VStack>
				{isHighlighted && (
					<Card
						width="100%"
						position="absolute"
						left={0}
						top="calc(100% - 12px)"
						padding="20px"
						sx={{ borderRadius: "0 0 12px 12px" }}
						shadow="md">
						<VStack fontSize="sm">
							<HStack
								width="100%"
								justifyContent="space-between">
								<Text color="gray.500">Release date:</Text>
								<Text>{formatDate(game.released)}</Text>
							</HStack>
							<Divider />
							<HStack
								width="100%"
								justifyContent="space-between">
								<Text color="gray.500">Genres:</Text>
								<Text>{game.genres.map(genre => genre.name).join(", ")}</Text>
							</HStack>
						</VStack>
					</Card>
				)}
			</CardBody>
		</Card>
	);
}

export default GameCard;
