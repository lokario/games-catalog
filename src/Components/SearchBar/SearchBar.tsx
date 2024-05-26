import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";

function SearchBar() {
	return (
		<>
			<InputGroup role="group">
				<InputLeftElement
					color="gray.300"
					_groupHover={{ color: "gray.700" }}
				>
					<LuSearch role="search" />
				</InputLeftElement>
				<Input
					_hover={{ background: "white", color: "gray.700" }}
					borderRadius={24}
					variant="filled"
					placeholder="Search games..."
					color={"gray.300"}
					_placeholder={{ color: "gray.500" }}
				/>
			</InputGroup>
		</>
	);
}

export default SearchBar;
