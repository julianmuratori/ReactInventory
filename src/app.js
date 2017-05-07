import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './Components/Welcome';
import Supplier from './Components/Supplier';

class App extends React.Component {
	render() {
		return (
			<div>
				<Welcome />
			</div>

		)
	}
}


ReactDOM.render(<App />, document.getElementById('app'));
