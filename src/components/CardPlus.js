import "../styles/card.css";
import add_icon from "../resources/add-icon.svg";
import CardForm from "./CardForm";

function CardPlus() {
	const newCard = () => {
		return <CardForm></CardForm>;
	};
	return (
		<div className="card1 center">
			<button className="btn" id="botoncito" onClick={newCard}>
				<img src={add_icon} alt="mas logo" className="logo "></img>
			</button>
		</div>
	);
}

export default CardPlus;
