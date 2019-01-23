import React from 'react';
import {NavLink} from "react-router-dom";

const Navigation = (props) => {

	function handleClick (e) {
		e.preventDefault();
		props.showCurrentCity(false);
	}

	return(
		<div>
			<button onClick={handleClick}>back.</button>
		</div>
	);
}

export default Navigation;
