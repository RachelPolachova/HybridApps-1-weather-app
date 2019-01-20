import React from 'react';

class Form extends React.Component {

	callWeatherPage = () => {
		window.location = "../www/weather.html";
	}

	render() {
		return(
			<div>
				<form onSubmit={this.props.getWeather}>
					<input type="text" name="city" placeholder="City"/>
					<button name="getWeatherButton" onClick={this.callWeatherPage}>Get weather.</button>
				</form>
			</div>
		)
	}
};

export default Form;
