import React from 'react';
import Weather from './components/Weather';
import Navigation from './components/Navigation';
import Home from "./components/Home";

class App extends React.Component {

	state = {
		viewCurrentCity: false,
		city: null
	}

	showCurrentCity = (bool => {
		this.setState({
			viewCurrentCity: bool
		})
	});

	getCurrentCity = (city => {
		this.setState({
			city:city
		})
	})

	render() {
		return (
				<div>
					{ this.state.viewCurrentCity ? (
						<div>
							<Navigation showCurrentCity={this.showCurrentCity}/>
							<h1>weather!</h1>
							<Weather city={this.state.city}/>
						</div>
					) : (
						<div>
							<h1>home</h1>
							<Home showCurrentCity={this.showCurrentCity} getCurrentCity={this.getCurrentCity}/>
						</div>
					) }
				</div>
		);
	}
}

export default App;
