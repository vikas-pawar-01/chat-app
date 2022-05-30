<<<<<<< HEAD
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Logout = (props) => {
	const history = useHistory();

	useEffect(() => {
		localStorage.removeItem('userData');
		props.onLogout();
		history.push( '/users' );
	}, [localStorage]);

	return (
		<p>User logged out!!</p>
	);
};

=======
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Logout = (props) => {
	const history = useHistory();

	useEffect(() => {
		localStorage.removeItem('userData');
		props.onLogout();
		history.push( '/users' );
	}, [localStorage]);

	return (
		<p>User logged out!!</p>
	);
};

>>>>>>> e5cc454edf8ece10371a8aa2c2142769c5584654
export default Logout;