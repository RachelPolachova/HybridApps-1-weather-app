import React from 'react';
import Navigation from './Navigation';

class Weather extends React.Component {

	state = {
		temperatures: [],
		dates: [],
		city: undefined,
	};

	getWeather = async () => {
		console.log("get Weather called!");
		const API_KEY = "321e4787765c65bde09141efd2385274";
		const city = this.props.match.params.city;
		const api_call = await fetch('https://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid='+API_KEY+'&units=metric');
		const data = await api_call.json();

		// nicer way to insert data into array, problably loop?
		const tempArray = [data.list[0].main.temp, data.list[8].main.temp, data.list[16].main.temp, data.list[24].main.temp, data.list[32].main.temp];
		const dateArray = [data.list[0].dt_txt, data.list[8].dt_txt, data.list[16].dt_txt, data.list[24].dt_txt, data.list[32].dt_txt, ]
		if (city) {
			this.setState({
				temperatures: tempArray,
				dates: dateArray,
				city: city,
			})
		} else {
			this.setState({
				temperatures: [],
				dateArray: [],
				city: undefined,
			})
		}
	}

	componentDidMount() {
		const {city} = this.props.match.params;

		if (city != undefined) {
			this.getWeather();
		}
	};


	render() {

		let temps;

		console.log("data: " + this.state.data)
		if (this.state.temperatures) {
			temps = this.state.temperatures.map(temp => {
				return <p>{temp}</p>
			})

		} else {
			console.log("empy temps.")
		}

		let dates;
		if (this.state.dates) {
			dates = this.state.dates.map(date => {
				return <p>{date}</p>
			})
		}


		return (
				<div className="weather">
					<Navigation/>
					<h3>Weather.</h3>
					<h4>
						{ this.state.city ? (
						<p>City: {this.state.city}</p>
					) : (
						<p>Please, insert correct city.</p>
					)}
					</h4>
					<div className="container">
						<div className="item">
							<h3>Date</h3>
							{ this.state.temperatures ? (
								<div>
									{dates}
								</div>
							) : (
								<p>No temp data.</p>
							) }
						</div>
						<div className="item">
							<h3>Temperature</h3>
							{ this.state.dates ? (
								<div>
									{temps}
								</div>
							) : (
								<p>No date data.</p>
							) }
						</div>

					</div>
				</div>
		);
	}
}

export default Weather;
