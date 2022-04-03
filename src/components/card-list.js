import { Fragment } from "react";
import "../styles/card.css";
import Card from "./Card";

const data = [
    {
    id: 0,
    date: '2022-4-2',
    title:'Youtube',
    info:'expire in 3 months',
    img:'https://upload.wikimedia.org/wikipedia/commons/d/dd/YouTube_Premium_logo.svg'
    },
    {
    id: 1,
    date: '2022-4-2',
    title:'hbo',
    info:'expire in 1 month',
    img:'https://upload.wikimedia.org/wikipedia/commons/d/dd/YouTube_Premium_logo.svg'
    },
    {
        id: 2,
        date: '2022-4-2',
        title:'Youtube',
        info:'expire in 3 months',
        img:'https://upload.wikimedia.org/wikipedia/commons/d/dd/YouTube_Premium_logo.svg'
        },
        {
        id: 3,
        date: '2022-4-2',
        title:'hbo',
        info:'expire in 1 month',
        img:'https://upload.wikimedia.org/wikipedia/commons/d/dd/YouTube_Premium_logo.svg'
        }
]
const d = new Date();
let day = d.getDay();

console.log(day, "el dia de hoy shit");
function CardList() {
	return (
		<>
            <div className="container">
                <div className="row center">
                     
                    {
                    data.map((element) => ( <div className="col-md-6 center p-4"><Card id={element.id} data={element} /></div> ))
                    }
                       
                </div>
            </div>
        </>
	);
}

export default CardList;
