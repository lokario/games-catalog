import useGames, { Game } from "../../hooks/useGames";

function GamesCatalog() {
	const { data, error, isLoading } = useGames();

	return (
		<ul>
			{data.map((game: Game) => (
				<li>{game.name}</li>
			))}
		</ul>
	);
}

export default GamesCatalog;
