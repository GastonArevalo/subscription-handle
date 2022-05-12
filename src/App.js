import React from "react";
import "./index.css";
import CardList from "./components/card-list";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CardPlus from "./components/CardPlus";
import CardForm from "./components/CardForm";
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
	const { isAuthenticated } = useAuth0();
	return (
		<Router>
			<div className="bgc-primary">
				{/* <div className="bgc-primary mb-0">
					<CardForm />
				</div> */}
				<Header />

				<Switch>
					<Route path="/form">
						<CardForm />
					</Route>
					<Route path="/">
						<CardList />
					</Route>
				</Switch>
				<Footer className="mt-10" />
				{/* En cardlist agregue un link al cardPlus para que diriga a /form
				lo cual deberia llevarme al formulario, cosa que no hace pero cambia 
				la url del navegador, se queda en home. Seguido de eso si en el navegador escribo
				/form si me lleva al form*/}
			</div>
		</Router>
	);
}

export default App;
