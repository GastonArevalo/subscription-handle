import react from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const Profile = () => {
	const { user, isAuthenticated, loading } = useAuth0();
	if (loading) {
		return <div>Loading...</div>;
	}

	return (
		isAuthenticated && (
			<div>
				<img src={user.picture} alt="Profile pic" />
				<h2>{user.name}</h2>
				<p> email is {user.email}</p>
			</div>
		)
	);
};
