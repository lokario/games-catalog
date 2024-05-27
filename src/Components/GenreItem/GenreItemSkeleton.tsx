import { HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

function GenreItemSkeleton() {
	return (
		<HStack display="flex">
			<Skeleton
				width="32px"
				height="32px"
				flexShrink={0}
				borderRadius="6px"
			/>
			<SkeletonText
				width="50%"
				noOfLines={1}
				skeletonHeight="3"
			/>
		</HStack>
	);
}

export default GenreItemSkeleton;
