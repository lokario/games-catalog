import { useMediaQuery } from "@chakra-ui/react";

function useResolution() {
	const [isSmall, isMedium, isLarge] = useMediaQuery(["(max-width: 980px)", "(max-width: 1040px)", "(max-width: 1440px)"]);

	return [isSmall, isMedium, isLarge];
}

export default useResolution;
