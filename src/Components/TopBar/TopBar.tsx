import { HStack } from "@chakra-ui/react";
import Logo from "../Logo";
import SearchBar from "../SearchBar";
import ThemeSwitch from "../ThemeSwitch";

function TopBar() {
	return (
		<HStack
			as="header"
			gap={"30px"}
			padding={"30px 40px"}>
			<Logo />
			<SearchBar />
			<ThemeSwitch />
		</HStack>
	);
}

export default TopBar;
