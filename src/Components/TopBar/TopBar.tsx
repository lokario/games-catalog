import { Box, HStack, useColorModeValue } from "@chakra-ui/react";
import SearchBar from "../SearchBar";
import ThemeSwitch from "../ThemeSwitch";
import Logo from "../Logo";

function TopBar({ setGameSearch }: { setGameSearch: (search: string) => void }) {
	const logoColor = useColorModeValue("black", "white");

	return (
		<HStack
			width="100%"
			as="header"
			gap={"30px"}
			padding={"20px 40px"}>
			<Box>
				<Logo fillColor={logoColor} />
			</Box>
			<SearchBar onSearch={setGameSearch} />
			<ThemeSwitch />
		</HStack>
	);
}

export default TopBar;
