import React from 'react';


class Weather extends React.Component {

	state = {
		temperatures: [],
		dates: [],
		city: this.props.city,
		hasData: false
	};

	getWeather = async () => {
		console.log("get Weather called!");
		const API_KEY = "321e4787765c65bde09141efd2385274";
		const city = this.state.city;
		console.log("city in weather: " + city);
		const api_call = await fetch('https://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid='+API_KEY+'&units=metric');
		const data = await api_call.json()



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

		if (this.state.temperatures && this.state.temperatures.length > 0) {
			this.setState({
				hasData: true
			})
		}

		console.log("temp from tempArray: " + tempArray);
		console.log("temp from state: " + this.state.temperatures);

	}

	componentDidMount() {

		console.log( "state city: " + this.state.city );
		if (this.state.city != null) {
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
					<h3>Weather.</h3>
					<h4>
						{ this.state.city ? (
						<p>City: {this.state.city}</p>
					) : (
						<p>Please, insert city.</p>
					)}
					</h4>
						{ this.state.hasData === true ? (
							<div className="container">
								<div className="item">
									<h3>Date</h3>
									<div>
										{dates}
									</div>
								</div>
								<div className="item">
									<h3>Temperatures</h3>
									<div>
										{temps}
									</div>
								</div>
							</div>

						) : (
							<p>No data.</p>
						) }
				</div>
		);
	}
}

export default Weather;
