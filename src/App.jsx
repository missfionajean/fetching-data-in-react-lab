import { useState } from "react";
import StarshipList from "./components/StarshipList";
import StarshipRacer from "./components/StarshipRacer";

const App = () => {
	// varriables for ship racer (main app)
	const [racers, setRacers] = useState([
		{ name: "None Selected" },
		{ name: "None Selected" },
	]);

	return (
		<>
			<h1>Star Wars Battleship Racer</h1>
			<p>Welcome! Please use the database below to add ships to the </p>
			<div id="app">
				<StarshipList racers={racers} setRacers={setRacers} />
				<StarshipRacer racers={racers} />
			</div>
		</>
	);
};

export default App;
