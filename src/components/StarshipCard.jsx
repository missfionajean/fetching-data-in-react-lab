// StarshipCard: A component used within StarshipList that displays information on a single starship.

// single ship object is passed down as prop
const StarshipCard = ({ ship }) => {
	return (
		<div className="shipCard">
			{ship.name}
			{ship.starship_class}
			{ship.manufacturer}
			{ship.model}
		</div>
	);
};
export default StarshipCard;
