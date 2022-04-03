import "../index.css";

import menu_icon from "../resources/menu icon.svg";
import profile_pic from "../resources/profile-pic.webp";

function Header() {
	return (
		
		
		<div className="bgc-primary">
			
			<header className="bgc-primary">
				<div name='profile pic'>
						<img className="profile-pic" src={profile_pic}></img>
					
				</div>
			</header>
			
		</div>
	
	);
}

export default Header;
