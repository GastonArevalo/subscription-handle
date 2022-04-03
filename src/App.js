import "./index.css";
import CardList from "./components/card-list";
import menu_icon from "./resources/menu icon.svg";
import profile_pic from "./resources/profile-pic.webp";
import Footer from "./components/Footer";
import Header from "./components/Header";
function App() {
	return (
		
		
		<div className="bgc-primary">
			
			<Header/>
			<body className="bgc-primary mb-0">

				<div className="main-container">

				<main className="bgc-primary">
					<CardList/>
					</main>
					</div>

			</body>
			<Footer/>
		</div>
	
	);
}

export default App;
