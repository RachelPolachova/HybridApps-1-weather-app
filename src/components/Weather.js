import React from 'react';

class Weather extends React.Component {
	render() {
	let temps;
	let dates;
		if (this.props.temperatures && this.props.temperatures.length) {
			temps = this.props.temperatures.map(temp => {
				return <p>{temp}</p>
			})

		} else {
			console.log("empy temps.")
		}

		if (this.props.dates && this.props.dates.length) {
			dates = this.props.dates.map(date => {
				return <p>{date}</p>
			})
		}

		return (
			<div>
				{dates}: {temps}
			</div>
		);
	}
}

export default Weather;
