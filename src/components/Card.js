import "../styles/card.css";
import logo_yt from "../resources/yt-logo.svg";

function Card(props) {
	return (
		<div className="card1">
			<div className="card-logo">
				<img src={props.data.img} className='logo' alt="logo youtube"></img>
			</div>
			<div className="card-title">
				<h3>{props.data.title}</h3>
			</div>
			<div className="card-info">
				<h4>{props.data.info}</h4>
			</div>
			<div className="card-date">
				<h4>{props.data.date}</h4>
			</div>
		</div>
	);
}

export default Card;
