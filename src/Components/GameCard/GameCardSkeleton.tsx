import { Card, CardBody, HStack, Heading, VStack, Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

function GameCardSkeleton() {
	return (
		<Card
			shadow="md"
			width="100%"
			borderRadius="12px">
			<Skeleton
				height="225px"
				sx={{ borderRadius: "12px 12px 0 0" }}
			/>
			<CardBody>
				<VStack>
					<HStack
						width="100%"
						justifyContent="space-between">
						<HStack>
							{[...Array(4)].map((_, key) => (
								<SkeletonCircle
									key={key}
									size="6"
								/>
							))}
						</HStack>
						<Skeleton
							width="35px"
							height="21px"
						/>
					</HStack>
					<Heading
						width="100%"
						mt="16px">
						<SkeletonText
							spacing={4}
							noOfLines={2}
							display="inline"
						/>
					</Heading>
				</VStack>
			</CardBody>
		</Card>
	);
}

export default GameCardSkeleton;
