import bullsEye from "../../assets/bulls-eye.webp";
import thumbsUp from "../../assets/thumbs-up.webp";
import meh from "../../assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
	rating: number;
}

function Rating({ rating }: Props) {
	if (rating < 3) return null;

	const ratingMap: { [key: number]: ImageProps } = {
		3: { src: meh, alt: "meh", boxSize: "22px" },
		4: { src: thumbsUp, alt: "recommended", boxSize: "22px" },
		5: { src: bullsEye, alt: "exceptional", boxSize: "30px" },
	};

	return (
		<Image
			display="inline"
			{...ratingMap[rating]}
		/>
	);
}

export default Rating;
