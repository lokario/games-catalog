import { HStack, FormLabel, Switch, useColorMode } from "@chakra-ui/react";

function ThemeSwitch() {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<HStack>
			<Switch
				id="darkModeSwitch"
				colorScheme="teal"
				isChecked={colorMode === "dark"}
				onChange={toggleColorMode}
			/>
			<FormLabel
				mb={0}
				htmlFor="darkModeSwitch"
				whiteSpace="nowrap"
			>
				Dark Mode
			</FormLabel>
		</HStack>
	);
}

export default ThemeSwitch;
