import React from 'react';
import Weather from './components/Weather';
import Navigation from './components/Navigation';
import Home from "./components/Home";

class App extends React.Component {

	state = {
		viewCurrentCity: false,
		city: null,
		favouriteCities: []
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

	addToFavourite = (favouriteCity => {
		var newArr = this.state.favouriteCities
		newArr.push(favouriteCity)
		this.setState({
			favouriteCities: newArr
		})
		console.log( "added favourite city: " + this.state.favouriteCities );
	})

	render() {
		return (
				<div>
					{ this.state.viewCurrentCity ? (
						<div>
							<Navigation showCurrentCity={this.showCurrentCity}/>
							<h1>weather!</h1>
							<Weather city={this.state.city} addToFavourite={this.addToFavourite}/>
						</div>
					) : (
						<div>
							<h1>home</h1>
							<Home showCurrentCity={this.showCurrentCity} getCurrentCity={this.getCurrentCity} favouriteCities={this.state.favouriteCities}/>
						</div>
					) }
				</div>
		);
	}
}

export default App;
