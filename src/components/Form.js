import React from 'react';

class Form extends React.Component {

	render() {
		return(
			<div>
				<form onSubmit={this.props.getWeather}>
					<input type="text" name="city" placeholder="City"/>
					<button name="getWeatherButton">Get weather.</button>
				</form>
			</div>
		)
	}
};

export default Form;
