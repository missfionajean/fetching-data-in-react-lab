import { useState } from "react";

const App = () => {
	// state variable for page rendering
	const [page, setPage] = useState();

	// state variable for full ship list
	const [allShips, setAllShips] = useState([]);

	const BASE_URL = `https://swapi.dev/api/starships`;

	// const SEARCH_URL = `https://swapi.dev/api/people/?search=${searchQuery}`;

	const getAllShips = async () => {
		// grabs all ships from API
		let response = await fetch(BASE_URL);
		// converts data to json format
		let JSONdata = await response.json();
		// returns array
		// setAllShips(JSONdata.results)
        console.log(JSONdata.results)
	};

	return (
		<>
			<button onClick={getAllShips}></button>
		</>
	);
};

export default App;
