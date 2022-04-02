import "../styles/card.css";
import logo_yt from "../resources/yt-logo.svg";
function Card() {
	return (
		<div className="card">
			<div className="card-logo">
				<img src={logo_yt} alt="logo youtube"></img>
			</div>
			<div className="card-title">
				<h3>YOUTUBE</h3>
			</div>
			<div className="card-info">
				<h4>3 months to expire</h4>
			</div>
			<div className="card-date">
				<h4>2/04/2022</h4>
			</div>
		</div>
	);
}

export default Card;
