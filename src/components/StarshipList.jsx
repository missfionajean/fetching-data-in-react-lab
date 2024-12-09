// StarshipList: Displays a list of starships held in state

// import useState and useEffect (for data grab on page load)
import { useState, useEffect } from "react";
import StarshipCard from "./StarshipCard";
import StarshipSearch from "./StarshipSearch";

const StarshipList = () => {
	// functionality for displaying all ships
	const [ships, setShips] = useState([]);

	const BASE_URL = `https://swapi.dev/api/starships`;

	useEffect(() => {
		const getAllShips = async () => {
			// grabs all ships from API
			let response = await fetch(BASE_URL);
			// converts data to json format
			let JSONdata = await response.json();
			// returns array, sets to state varaible
			setShips(JSONdata.results);
		};
		getAllShips();
	}, []);

	return (
		<>
			<StarshipSearch setShips={setShips} />
			<h2>Starships</h2>
			<ul>
				{ships.map((ship, index) => (
					<StarshipCard ship={ship} key={index} />
				))}
			</ul>
		</>
	);
};

export default StarshipList;
