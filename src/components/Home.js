import React from 'react';
import {NavLink} from "react-router-dom";
import AutoComplete from 'material-ui/AutoComplete';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import data from './data';


class Home extends React.Component {


	state = {
		city: null,
		shouldOpenList: false,
		cities: data.cities
	}

	updateCity = (value) => {
		this.setState({
			city: value
		});
		console.log(value)
	};

	handleClick = (e) => {
		e.preventDefault;
		this.props.showCurrentCity(true)
		this.props.getCurrentCity(this.state.city)
	}


	render() {
		return(
			<MuiThemeProvider>
				<div>
					<h3>Insert city</h3>
					<div className="container">
						<div className="item">
							<AutoComplete
								floatingLabelText="City"
								filter={AutoComplete.fuzzyFilter}
								dataSource={this.state.cities}
								maxSearchResults={5}
								onUpdateInput={this.updateCity}
							/>
						</div>
						<div className="item">
							<button onClick={this.handleClick}>Search</button>
						</div>
					</div>

				</div>
			</MuiThemeProvider>
		)
	}
};

export default Home;
