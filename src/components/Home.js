import React from 'react';
import {NavLink} from "react-router-dom";
import AutoComplete from 'material-ui/AutoComplete';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import data from './data';


class Home extends React.Component {


	state = {
		destination: "weather",
		shouldOpenList: false,
		cities: data.cities
	}

	updateCity = (value) => {
		this.setState({
			destination: "/weather/" + value
		});
		console.log(value)
	};

	render() {
		return(
			<MuiThemeProvider>
				<div>
					<h3>Insert city</h3>
					<div>
						<div>
							<AutoComplete
								floatingLabelText="City"
								filter={AutoComplete.fuzzyFilter}
								dataSource={this.state.cities}
								maxSearchResults={5}
								onUpdateInput={this.updateCity}
							/>
						</div>
						<div>
							<NavLink to={this.state.destination.toString()}><div className="get-weather-btn">Get Weather</div></NavLink>
						</div>
					</div>

				</div>
			</MuiThemeProvider>
		)
	}
};

export default Home;
