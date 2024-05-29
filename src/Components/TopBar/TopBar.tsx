import { Box, HStack, Show, useColorModeValue } from "@chakra-ui/react";
import SearchBar from "../SearchBar";
import ThemeSwitch from "../ThemeSwitch";
import Logo from "../Logo";

function TopBar({ setGameSearch }: { setGameSearch: (search: string) => void }) {
	const logoColor = useColorModeValue("black", "white");

	return (
		<HStack
			width={{ base: "calc(100% - 40px)", lg: "calc(100% - 0px)" }}
			as="header"
			gap={"30px"}>
			<Box>
				<Logo fillColor={logoColor} />
			</Box>
			<SearchBar onSearch={setGameSearch} />
			<Show above="md">
				<ThemeSwitch />
			</Show>
		</HStack>
	);
}

export default TopBar;
