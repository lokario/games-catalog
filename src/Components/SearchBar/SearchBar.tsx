import { Box, CloseButton, Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react";
import { useRef, useState } from "react";
import { LuSearch } from "react-icons/lu";

function SearchBar({ onSearch }: { onSearch: (search: string) => void }) {
	const formRef = useRef<HTMLFormElement>(null);
	const inputRef = useRef<HTMLInputElement>(null);

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (inputRef.current) onSearch(inputRef.current.value);
	};

	const onSearchClear = () => {
		onSearch("");
		formRef.current?.reset();
	};

	return (
		<Box
			as="form"
			width="100%"
			ref={formRef}
			onSubmit={onSubmit}>
			<InputGroup>
				<InputLeftElement
					color="gray.300"
					pointerEvents="none"
					_groupHover={{ color: "gray.700" }}>
					<LuSearch role="search" />
				</InputLeftElement>
				<Input
					ref={inputRef}
					_groupHover={{ background: "white", color: "gray.700" }}
					borderRadius={24}
					variant="filled"
					placeholder="Search games..."
					color={"gray.300"}
					_placeholder={{ color: "gray.500" }}
				/>
				{inputRef.current?.value && (
					<InputRightElement>
						<CloseButton
							role="group"
							mr={2}
							size="sm"
							borderRadius="full"
							_groupHover={{ color: "gray.700" }}
							onClick={onSearchClear}
						/>
					</InputRightElement>
				)}
			</InputGroup>
		</Box>
	);
}

export default SearchBar;
