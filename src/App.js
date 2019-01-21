import React from 'react';
import Weather from './components/Weather';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./components/Home";

class App extends React.Component {

	render() {
		return (
			<BrowserRouter>
				<div>
					<Home/>
					<Switch>
						{/*Default route doesn't work.*/}
						{/*<Route path="/" component={Home}>*/}
						{/*<Route exact path='/index.html' component={Home}/>*/}
						<Route path="/weather/:city" component={Weather}/>
						<Route path="/weather" component={Weather}/>
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
