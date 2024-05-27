import { Game } from "../../hooks/useGames";
import { Card, CardBody, Heading, Image, Text, VStack } from "@chakra-ui/react";
import getCroppedImageUrl from "../../services/image-url";
import PlatformsList from "../PlatformsList";
import Rating from "../Rating";

function GameCard({ game }: { game: Game }) {
	return (
		<Card
			overflow="hidden"
			borderRadius={12}
			shadow="md">
			<Image src={getCroppedImageUrl(game.background_image)} />
			<CardBody>
				<VStack>
					<PlatformsList platforms={game.parent_platforms.map(p => p.platform)} />
					<Heading
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
