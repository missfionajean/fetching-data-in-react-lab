import { useState } from "react";
import StarshipList from "./components/StarshipList";

const App = () => {
	// state variable for page rendering
	const [page, setPage] = useState("list");

	return (
		<>
			<h1>Star Wars Battleship API</h1>
			{page === "list" ? <StarshipList /> : ""}
		</>
	);
};

export default App;
