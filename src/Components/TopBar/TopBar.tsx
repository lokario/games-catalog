import { HStack } from "@chakra-ui/react";
import Logo from "../Logo";
import SearchBar from "../SearchBar";
import ThemeSwitch from "../ThemeSwitch";

function TopBar({ setGameSearch }: { setGameSearch: (search: string) => void }) {
	return (
		<HStack
			width="100%"
			as="header"
			gap={"30px"}
			padding={"30px 40px"}>
			<Logo />
			<SearchBar onSearch={setGameSearch} />
			<ThemeSwitch />
		</HStack>
	);
}

export default TopBar;
