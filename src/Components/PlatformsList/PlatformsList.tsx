import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe, BsNintendoSwitch } from "react-icons/bs";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { Platform } from "../../hooks/useGames";

interface PlatformsListProps {
	platforms: Platform[];
}

function PlatformsList({ platforms = [] }: PlatformsListProps) {
	const iconMap: { [key: string]: IconType } = {
		pc: FaWindows,
		playstation: FaPlaystation,
		xbox: FaXbox,
		nintendo: BsNintendoSwitch,
		mac: FaApple,
		linux: FaLinux,
		android: FaAndroid,
		ios: MdPhoneIphone,
		web: BsGlobe,
	};

	return (
		<HStack marginY={1}>
			{platforms.map(platform => (
				<Icon
					key={platform.id}
					as={iconMap[platform.slug]}
				/>
			))}
		</HStack>
	);
}

export default PlatformsList;
