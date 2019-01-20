import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import WeatherBackground from './components/WeatherBackground';

const API_KEY = "321e4787765c65bde09141efd2385274";

class App extends React.Component {

	state = {
		temperature: undefined,
		city: undefined,
		country: undefined,
		humidity: undefined,
		description: undefined,
		error: undefined
	}

//just declaring function
	getWeather = async (e) => {
		e.preventDefault();
		const city = e.target.elements.namedItem("city").value;
		const api_call = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+ city +'&appid=' + API_KEY + '&units=metric');
		const data = await api_call.json();
		if (city) {
			this.setState({
				temperature: data.main.temp,
				city: data.name,
				country: data.sys.country,
				humidity: data.main.humidity,
				description: data.weather[0].description,
				error: ""
			})
		} else {
			this.setState({
				temperature: undefined,
				city: undefined,
				country: undefined,
				humidity: undefined,
				description: undefined,
				error: "Please add the value."
			})
		}
}

	render() {
		return(
			<div>
				<Titles/>
				<Form getWeather={this.getWeather}/>
				<WeatherBackground
					temperature={this.state.temperature}
					city={this.state.city}
					country={this.state.country}
					humidity={this.state.humidity}
					description={this.state.description}
					error={this.state.error}
				/>
			</div>
		);
	}
}

export default App;
