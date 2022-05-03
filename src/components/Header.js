import "../styles/header.css";

import menu_icon from "../resources/menu icon.svg";
import profile_pic from "../resources/user-logout-pic.svg";
import { LoginButton } from "./Login";
import { useAuth0 } from "@auth0/auth0-react";
import { LogoutButton } from "./Logout";

function Header() {
	const { user, isAuthenticated, loading } = useAuth0();

	return (
		<div className="bgc-primary">
			<header className="bgc-primary header">
				{isAuthenticated ? (
					<div>
						<div className="header">
							<img className="profile-pic" src={user.picture}></img>
							<LogoutButton />
						</div>
					</div>
				) : (
					<div>
						<div className="header">
							<img className="profile-pic" src={profile_pic}></img>

							<LoginButton />
						</div>
					</div>
				)}
			</header>
		</div>
	);
}

export default Header;
