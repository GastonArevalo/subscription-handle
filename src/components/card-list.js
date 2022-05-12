import React from "react";
import { Fragment } from "react";
import "../styles/card.css";
import Card from "./Card.js";
import CardPlus from "./CardPlus.js";

const data = [
	{
		id: 0,
		date: "2022-5-2",
		title: "Youtube",
		info: "expire in 3 months",
		img: "https://upload.wikimedia.org/wikipedia/commons/d/dd/YouTube_Premium_logo.svg",
	},
	{
		id: 1,
		date: "3 April",
		title: "hbo",
		info: "expire in 1 month",
		img: "https://upload.wikimedia.org/wikipedia/commons/d/dd/YouTube_Premium_logo.svg",
	},
	{
		id: 2,
		date: "2022-4-2",
		title: "Youtube",
		info: "expire in 3 months",
		img: "https://upload.wikimedia.org/wikipedia/commons/d/dd/YouTube_Premium_logo.svg",
	},
	{
		id: 3,
		date: "2022-04-03",
		title: "hbo",
		info: "expire in 1 month",
		img: "https://upload.wikimedia.org/wikipedia/commons/d/dd/YouTube_Premium_logo.svg",
	},
];

//  const months = ["January","February","March","April","May","June","July","August",
//  "September","October","November","December"];

let today = new Date().toISOString().slice(0, 10);
console.log(today);
console.log(data[3].date, "data de hoy");
today < data[0].date ? console.log("si") : console.log("no");

function CardList() {
	let today = new Date().toISOString().slice(0, 10);

	return (
		<>
			<div className="container">
				<div className="row center">
					{data.map((element) =>
						today < element.date ? (
							<div key={element.id} className="col-md-6 center p-4">
								<Card id={element.id} data={element} />
							</div>
						) : (
							<div className="col-md-6 center p-4">
								<CardPlus />
							</div>
						)
					)}
				</div>
			</div>
		</>
	);
}

export default CardList;
