import React from "react";
import "../styles/card.css";
import defaulty_image from "../resources/AMAZON-LOGO.svg";
import profile_pic from "../resources/user-logout-pic.svg";
import Card from "./Card";


function CardForm() {
	const [values, setValues] = React.useState({
		title: '',
		date: '',
		service: ''

	  })
	
	
	  const handleSubmit = (e) => {
	e.preventDefault()
	console.log('comooo')
	console.log(values)

	}
	
	
	const handleChange = (event) => {
		console.log(event.target.id)
		if (event.target.value='other'){
			console.log('es otrooooo');
		}
		setValues({ 
			...values, 
			[event.target.id] : event.target.value
			
		})
		

	}
	const { title, date } = values
	console.log(values);
	
	return (
		<div className="card1 container">
			{/* <div className="card-logo">
				<img src={defaulty_image} className="logo" alt="logo default"></img>
			</div> */}
			<form className="row" onSubmit={handleSubmit}>


			<div className="card-title">
				<label for="title">
					title
				</label>
					<input type="text" id="title" className="input" onChange={handleChange}></input>
			</div>
			<div className="card-date">
				<label for="date">
					expire date 
					</label>
				<input type="date" id="date" name="date" onChange={handleChange}/>
			</div>
			<input type="submit" className="btn btn-primary" ></input>
			<label for="service"> Select service</label>
			<select name="services" id="services" onChange={handleChange}>
				<option value='youtube'> Youtube </option>
				<option value='amazon'> AMAZON </option>
				<option value='netflix'> Netflix </option>
				<option value='HBO+'> HBO+ </option>
				<option value='other'> Other </option>
		
		{/* if (e.target.value=other){
			console.log('es otrooooo');
		}		 */}
			</select>
			
			</form>
		</div>
	);
}

export default CardForm;

	// import React from 'react';
	// import { useForm } from 'react-hook-form';

	// export default function App() {
	// const { register, handleSubmit, formState: { errors } } = useForm();
	// const onSubmit = data => console.log(data);
	// console.log(errors);
	
	// return (
	// 	<form onSubmit={handleSubmit(onSubmit)}>
	// 	<label>
	// 	Service
	// 	</label>
	// 	<select {...register("Service", { required: true })}>
	// 		<option value="Youtube  ">Youtube  </option>
	// 		<option value=" Amazon "> Amazon </option>
	// 		<option value=" HBO+ "> HBO+ </option>
	// 		<option value=" Netflix "> Netflix </option>
	// 		<option value=" Other "> Other </option>
	// 	</select>
		
	// 	<label>
	// 	Expire date		  
	// 	</label>
	// 	<input type="date" placeholder="Expire date" {...register("Expire date", {required: true})} />

	// 	<input type="submit" />
	// 	</form>
	// );
	// }