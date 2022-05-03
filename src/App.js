import "./index.css";
import CardList from "./components/card-list";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CardPlus from "./components/CardPlus";
import CardForm from "./components/CardForm";
import { useAuth0 } from "@auth0/auth0-react";
function App() {
	const { isAuthenticated } = useAuth0();
	return (
		<div className="bgc-primary">
			<Header />

			<body className="bgc-primary mb-0">
				<CardForm />
			</body>
			<Footer />
		</div>
	);
}

export default App;
