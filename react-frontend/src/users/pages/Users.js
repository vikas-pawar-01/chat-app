<<<<<<< HEAD
import React, { useState, useEffect } from "react";

import UserList from "../components/UserList";

const Users = () => {

	const [loadedUsers, setLoadedUsers] = useState([]);

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const response = await fetch(`${process.env.REACT_APP_PHP_BACKEND_URL}/user/` );

				const responseData = await response.json();

				setLoadedUsers(responseData);
			} catch (err) {
				console.log(err);
			}
		};
		fetchUsers();
	}, []);

	return (
		<UserList items={loadedUsers} />
	);
}

=======
import React, { useState, useEffect } from "react";

import UserList from "../components/UserList";

const Users = () => {

	const [loadedUsers, setLoadedUsers] = useState([]);

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const response = await fetch(`${process.env.REACT_APP_PHP_BACKEND_URL}/user/` );

				const responseData = await response.json();

				setLoadedUsers(responseData);
			} catch (err) {
				console.log(err);
			}
		};
		fetchUsers();
	}, []);

	return (
		<UserList items={loadedUsers} />
	);
}

>>>>>>> e5cc454edf8ece10371a8aa2c2142769c5584654
export default Users;