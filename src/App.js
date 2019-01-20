import React from 'react';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';
const API_KEY = "321e4787765c65bde09141efd2385274";

class App extends React.Component {

	state = {
		temperatures: [],
		dates: [],
		city: undefined,
		country: undefined,
	}

	//doplnit id mesta

//just declaring function
	getWeather = async (e) => {
		e.preventDefault();
		const city = e.target.elements.namedItem("city").value;
		const api_call = await fetch('https://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid='+API_KEY+'&units=metric');
		const data = await api_call.json();
		const tempArray = [data.list[0].main.temp, data.list[8].main.temp, data.list[16].main.temp, data.list[24].main.temp, data.list[32].main.temp];
		const dateArray = [data.list[0].dt_txt, data.list[8].dt_txt, data.list[16].dt_txt, data.list[24].dt_txt, data.list[32].dt_txt, ]
		console.log("temp array: " + tempArray);
		if (city) {
			this.setState({
				temperatures: tempArray,
				dates: dateArray,
				city: "city name",
				country: "country name",
			})
		} else {
			this.setState({
				temperatures: [],
				dateArray: [],
				city: undefined,
				country: undefined,
			})
		}

		console.log('state: ' + this.state.temperatures);
}

	render() {
		return(
			<div>
				<Titles/>
				<Form getWeather={this.getWeather}/>
				<Weather
					temperatures={this.state.temperatures}
					dates={this.state.dates}
					city={this.state.city}
					country={this.state.country}
				/>
			</div>
		);
	}
}

export default App;
