import { Game } from "../../hooks/useGames";
import { Card, CardBody, Heading, Image, VStack } from "@chakra-ui/react";
import getCroppedImageUrl from "../../services/image-url";
import PlatformsList from "../PlatformsList";

function GameCard({ game }: { game: Game }) {
	return (
		<Card
			overflow="hidden"
			borderRadius={12}
			shadow="md">
			<Image src={getCroppedImageUrl(game.background_image)} />
			<CardBody>
				<VStack>
					<PlatformsList />
					<Heading
						fontSize="2xl"
						textAlign="left">
						{game.name}
					</Heading>
				</VStack>
			</CardBody>
		</Card>
	);
}

export default GameCard;
