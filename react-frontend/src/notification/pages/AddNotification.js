<<<<<<< HEAD
import { useHistory } from "react-router-dom";
import { useEffect, useRef } from "react";
import './AddNotification.css';

import { io } from "socket.io-client";

const AddNotification = (props) => {
	const history = useHistory();
	const enteredNotification = useRef();

	const socket = useRef();
	useEffect(() => {
		socket.current = io(`${process.env.REACT_APP_NODE_BACKEND_URL}`);
	}, []);

	const userSubmitHandler = async ( event ) => {
		event.preventDefault();

		try {
			const notification = enteredNotification.current.value;

			if(notification.trim().length === 0 ) {
				return false;
			}

			const formData = new FormData();
			formData.append( 'name', notification );
			formData.append( '_method', 'POST' );

			await fetch( `${process.env.REACT_APP_PHP_BACKEND_URL}/notification/`,
				{
					method: "POST",
					body:formData,
					headers: {}
				}
			);

			socket.current.emit('sendNotification', {notification: notification});

			enteredNotification.current.value = '';

			props.onInsertNotification();
		} catch( err ) {
			console.log( err );
		}
	}

	return (
			<div className='notification-form'>
				<textarea id="name" name="name" ref={enteredNotification} />
				<button type="submit" className="button green" onClick={userSubmitHandler}>Submit</button>
			</div>
	);
};

=======
import { useHistory } from "react-router-dom";
import { useEffect, useRef } from "react";
import './AddNotification.css';

import { io } from "socket.io-client";

const AddNotification = (props) => {
	const history = useHistory();
	const enteredNotification = useRef();

	const socket = useRef();
	useEffect(() => {
		socket.current = io(`${process.env.REACT_APP_NODE_BACKEND_URL}`);
	}, []);

	const userSubmitHandler = async ( event ) => {
		event.preventDefault();

		try {
			const notification = enteredNotification.current.value;

			if(notification.trim().length === 0 ) {
				return false;
			}

			const formData = new FormData();
			formData.append( 'name', notification );
			formData.append( '_method', 'POST' );

			await fetch( `${process.env.REACT_APP_PHP_BACKEND_URL}/notification/`,
				{
					method: "POST",
					body:formData,
					headers: {}
				}
			);

			socket.current.emit('sendNotification', {notification: notification});

			enteredNotification.current.value = '';

			props.onInsertNotification();
		} catch( err ) {
			console.log( err );
		}
	}

	return (
			<div className='notification-form'>
				<textarea id="name" name="name" ref={enteredNotification} />
				<button type="submit" className="button green" onClick={userSubmitHandler}>Submit</button>
			</div>
	);
};

>>>>>>> e5cc454edf8ece10371a8aa2c2142769c5584654
export default AddNotification;