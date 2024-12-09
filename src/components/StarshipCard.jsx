// StarshipCard: A component used within StarshipList that displays information on a single starship.

// single ship object is passed down as prop
const StarshipCard = ({ ship, racers, setRacers }) => {
	// functions to assign ship to racer position
	const setRacerA = () => {
		const newRacers = racers.map((racer, index) => {
			if (index === 0) {
				return ship;
			} else {
				return racer;
			}
		});
		setRacers(newRacers);
	};

	const setRacerB = () => {
		const newRacers = racers.map((racer, index) => {
			if (index === 1) {
				return ship;
			} else {
				return racer;
			}
		});
		setRacers(newRacers);
	};

	return (
		<div className="shipCard">
			<h3>{ship.name}</h3>
			<p>Class: {ship.starship_class}</p>
			<p>Manufacturer: {ship.manufacturer}</p>
			<p>Model: {ship.model}</p>
			<p>Atmospheric Speed: {ship.max_atmosphering_speed} (kilometers per hour)</p>
			<p>Vacuum Speed (Sub-Light): {ship.MGLT} MGLT</p>
			<p>Hyperdrive Rating: {ship.hyperdrive_rating}</p>
			<button onClick={setRacerA}>Set Racer A</button>
			<button onClick={setRacerB}>Set Racer B</button>
		</div>
	);
};
export default StarshipCard;
