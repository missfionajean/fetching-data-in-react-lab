import { useState } from "react";

// StarshipSearch: Allows users to submit a search form for the name of a starship.
const StarshipSearch = ({ setShips }) => {
	/* API search functionality */

	// setting URL for data fetch
	const SEARCH_URL = `https://swapi.dev/api/starships/?search=`;

	// updating list based on searchQuery
	const getSearchedShips = async (endpoint) => {
		// grabs all ships from API
		let response = await fetch(endpoint);
		// converts data to json format
		let JSONdata = await response.json();
		// returns array, sets to state varaible
		setShips(JSONdata.results);
	};

	/* controlled form functionality */

	// state variable for text input
	const [searchQuery, setSearchQuery] = useState("");

	//
	const handleInputChange = (event) => {
		setSearchQuery(event.target.value);
	};

	//
	const handleSubmit = (event) => {
		event.preventDefault();
		const endpoint = SEARCH_URL + searchQuery;
		getSearchedShips(endpoint);
		setSearchQuery("");
	};

	return (
		<>
			<h2>Search</h2>
			<form onSubmit={handleSubmit}>
				<label htmlFor="searchQuery">Enter Name or Model: </label>
				<input
					type="text"
					name="searchQuery"
					id="searchQuery"
					value={searchQuery}
					onChange={handleInputChange}
				/>
				<button type="submit">Submit</button>
			</form>
		</>
	);
};

export default StarshipSearch;
