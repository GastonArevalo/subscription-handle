import "../styles/card.css";
import defaulty_image from "../resources/AMAZON-LOGO.svg";
import profile_pic from "../resources/user-logout-pic.svg";

function CardForm() {
	return (
		<div className="card1">
			<div className="card-logo">
				<img src={defaulty_image} className="logo" alt="logo default"></img>
			</div>
			<div className="card-title">
				<h3>
					<input type="text" name="title"></input>
				</h3>
			</div>
			<div className="card-date">
				<input type="date" name="date" />
			</div>
		</div>
	);
}

export default CardForm;
