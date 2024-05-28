import { HStack, Text, Button } from "@chakra-ui/react";
import { PiSquaresFourLight, PiSquareSplitVerticalLight } from "react-icons/pi";

export enum DisplayOption {
	Grid,
	Column,
}

interface DisplayOptionsProps {
	displayOption: DisplayOption;
	setDisplayOption: (displayOption: DisplayOption) => void;
}

function DisplayOptions({ displayOption, setDisplayOption }: DisplayOptionsProps) {
	return (
		<HStack>
			<Text color="gray.500">Display options:</Text>
			<Button
				p={0}
				width="48px"
				height="48px"
				aria-label="Display grid"
				isActive={displayOption == DisplayOption.Grid}
				onClick={() => setDisplayOption(DisplayOption.Grid)}>
				<PiSquaresFourLight size="36px" />
			</Button>
			<Button
				p={0}
				width="48px"
				height="48px"
				aria-label="Display column"
				isActive={displayOption == DisplayOption.Column}
				onClick={() => setDisplayOption(DisplayOption.Column)}>
				<PiSquareSplitVerticalLight size="36px" />
			</Button>
		</HStack>
	);
}

export default DisplayOptions;
