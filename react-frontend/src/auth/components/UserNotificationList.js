<<<<<<< HEAD
import React, { useContext } from 'react';
import { AuthContext } from "../../context/auth-context";
import UserNotificationItem from "./UserNotificationItem";

import './UserNotificationList.css';

const NotificationList = props => {
	const auth = useContext(AuthContext);

	if (props.items.length === 0) {
		return (<div>No notifications.</div>);
	}

	return (
		<div>
			<ul className="ul-user-table">
				{props.items.map( ( notification, index ) => (
					<UserNotificationItem
						key={notification.id}
						id={notification.id}
						name={notification.name}
						userId={notification.user_id}
						userName={notification.user_name}
						className={ auth.userId === notification.user_id ? 'darker' : 'light'}
					/>
				))}
			</ul>
		</div>
	);
};

=======
import React, { useContext } from 'react';
import { AuthContext } from "../../context/auth-context";
import UserNotificationItem from "./UserNotificationItem";

import './UserNotificationList.css';

const NotificationList = props => {
	const auth = useContext(AuthContext);

	if (props.items.length === 0) {
		return (<div>No notifications.</div>);
	}

	return (
		<div>
			<ul className="ul-user-table">
				{props.items.map( ( notification, index ) => (
					<UserNotificationItem
						key={notification.id}
						id={notification.id}
						name={notification.name}
						userId={notification.user_id}
						userName={notification.user_name}
						className={ auth.userId === notification.user_id ? 'darker' : 'light'}
					/>
				))}
			</ul>
		</div>
	);
};

>>>>>>> e5cc454edf8ece10371a8aa2c2142769c5584654
export default NotificationList;