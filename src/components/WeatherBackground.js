import React from 'react';

class WeatherBackground extends React.Component {
	render() {
		return(
			<div>
				{/*something like if. Show paragraphs only if it has value.*/}
				{ this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p> }
				{ this.props.temperature && <p>Temperature: {this.props.temperature}</p> }
				{ this.props.humidity && <p>Humidity: {this.props.humidity}</p> }
				{ this.props.description && <p>Conditions: {this.props.description}</p> }
				{ this.props.error && <p>{this.props.error}</p> }
			</div>
		)
	}
};

export default WeatherBackground;
