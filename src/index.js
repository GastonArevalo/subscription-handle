import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Auth0Provider
			domain="dev-9anc5vaj.us.auth0.com"
			clientId="4yeaDdpqYcLT5jvsvrJcROuIRygz9Az5"
			redirectUri={window.location.origin}
		>
			<App />
		</Auth0Provider>
	</React.StrictMode>
);

reportWebVitals();
