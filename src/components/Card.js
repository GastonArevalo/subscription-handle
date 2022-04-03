import "../styles/card.css";
function Card(props) {
	const fecha = new Date(props.data.date)

	const months = ["January","February","March","April","May","June","July","August",
 "September","October","November","December"];

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
				<h4>{fecha.getDay()} {months[fecha.getMonth()]} {fecha.getFullYear()}</h4>
			</div>
		</div>
	);
}

export default Card;
