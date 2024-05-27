import { Game } from "../../hooks/useGames";
import { Card, CardBody, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import getCroppedImageUrl from "../../services/image-url";
import PlatformsList from "../PlatformsList";
import Rating from "../Rating";
import CriticScore from "../CriticScore/CriticScore";

function GameCard({ game }: { game: Game }) {
	return (
		<Card
			overflow="hidden"
			borderRadius={12}
			shadow="md">
			<Image src={getCroppedImageUrl(game.background_image)} />
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
						cursor="pointer"
						fontSize="2xl">
						<Text
							mr="8px"
							display="inline">
							{game.name}
						</Text>
						<Rating rating={game.rating_top} />
					</Heading>
				</VStack>
			</CardBody>
		</Card>
	);
}

export default GameCard;
