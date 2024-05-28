import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
	initialColorMode: "dark",
	useSystemColorMode: true,
};

const theme = extendTheme({
	config,
	colors: {
		gray: {
			50: "#f9f9f9",
			100: "#ededed",
			200: "#d3d3d3",
			300: "#b3b3b3",
			400: "#a0a0a0",
			500: "#898989",
			600: "#6c6c6c",
			700: "#202020",
			800: "#121212",
			900: "#111",
		},
		green: {
			50: "#dfffe9",
			100: "#b4f9c9",
			200: "#88f4a9",
			300: "#5bef86",
			400: "#2eea65",
			500: "#15d14c",
			600: "#09a23a",
			700: "#037428",
			800: "#004716",
			900: "#001901",
		},
		yellow: {
			50: "#fffcdc",
			100: "#fef5af",
			200: "#feee7f",
			300: "#fde74f",
			400: "#fce020",
			500: "#e3c60a",
			600: "#b09a02",
			700: "#7e6e00",
			800: "#4c4200",
			900: "#1a1600",
		},
		red: {
			50: "#ffe4e1",
			100: "#ffb9b2",
			200: "#ff8d80",
			300: "#fd604e",
			400: "#fc341d",
			500: "#e21a03",
			600: "#b11202",
			700: "#7f0b00",
			800: "#4e0400",
			900: "#200000",
		},
	},
});

export default theme;
