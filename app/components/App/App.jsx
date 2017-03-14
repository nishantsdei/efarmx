import React from 'react';
import axios from 'axios';
import GameStarter from './game/game_starter';
import GameView from './game/game_view';
import Request from 'react-http-request';

require('./App.css');

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			time: new Date(),
		};
		this.state = {
			id:null,
		};
          
		this.timer = null;
	}

	componentDidMount() {
		/*this.timer = setInterval(() => {
			this.setState({ time: new Date() });
		}, 1000);*/

		console.log("Dawd");
		
		
	}

	componentWillUnmount() {
		//this.timer = clearInterval(this.timer);
	}
	

	render() {
		return (			
				<div className="App">
			
					{/*<div className="App-header">					
						<p>The time is <b>{this.state.time.toString()}</b></p>
	</div>*/}
					<div className="App-container">
						{this.props.children}
					</div>
					{/*<div className="App-footer">
						SmartData Enterprises - Scaling expectations.
	</div>*/}
				</div> 
		);
	}
}

export default App;
