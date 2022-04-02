import "./index.css";
import Card from "./components/Card";
import menu_icon from "./resources/menu icon.svg";
import profile_pic from "./resources/profile-pic.webp";
function App() {
	return (
		<div className="App">
			<header>
				<div className="menu">
					<button id="menu-var">
						<img src={menu_icon}></img>
					</button>
				</div>
				<div className="profile-pic">
					<button>
						<img src={profile_pic}></img>
					</button>
				</div>
			</header>
			<body>
				<header>
					<h1>
						SUBSCRIPTION <br />
						MANAGMENT
					</h1>
				</header>
				<main>
					<Card></Card>
				</main>
			</body>
			<footer>
				<button id="converor"></button>
				<button id="home"></button>
				<button id="stats"></button>
			</footer>
		</div>
	);
}

export default App;
