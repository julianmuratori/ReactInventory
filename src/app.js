import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Link } from 'react-router';
import Welcome from './Components/Welcome';
import Supplier from './Components/Supplier';
import Inventory from './Components/Inventory';
import NotFound from './Components/NotFound';
import Login from './Components/Login';
import base from './base';

class App extends React.Component {
	constructor() {
		super();

		this.addItem = this.addItem.bind(this);
		this.removeItem = this.removeItem.bind(this);
		this.removeOne = this.removeOne.bind(this);
		this.addOne = this.addOne.bind(this);

		// get initial state
		this.state = {
			inventoryItems: {
				item1: {
					name: "apple",
					price: 1,
					priceStyle: "pc",
					quantity: 4,
					notes: "Tastes great"
				}
			},
			order: {}
		};
	}

	// componentWillMount() {
	// 	this.ref = base.syncState
	// }


	// updates state
	  addItem(item) {
	    // makes a copy of state
	   const newItems = this.state.inventoryItems;
	    // add new item
	    const timestamp = Date.now();
	    newItems[`item-${timestamp}`] = item;
	    // // set state
	    this.setState({
				inventoryItems: newItems
			})
	  }

	// removes item from an order
		removeItem(item) {
			const newItems = this.state.inventoryItems;
			delete newItems[item];
			this.setState({
				inventoryItems: newItems
			})
		}

		// Removes a single item from a count
		removeOne(item) {
			const newItems = this.state.inventoryItems;
			// let price = newItems[item].price;
			if (newItems[item].quantity === 0) {
				console.log("can't go negative")
			} else {
				newItems[item].quantity = newItems[item].quantity - 1;
			}
			this.setState({
				inventoryItems: newItems
			})
		}

		addOne(item) {
			const newItems = this.state.inventoryItems;
			// newItems[item] = Number.parseInt(newItems[item])
			newItems[item].quantity = parseInt(newItems[item].quantity);
			newItems[item].quantity = (newItems[item].quantity + 1);
			console.log(newItems[item])
			this.setState({
				inventoryItems: newItems
			})
		}


	render() {
		return (
		<Supplier storeName="buddy, please"
			addItem={this.addItem}
			removeItem={this.removeItem}
			inventoryItems={this.state.inventoryItems}
			addOne = {this.addOne}
			removeOne = {this.removeOne}
		/>
		// <div className="mainSplash">
		// 	<div className="splashOptions">
		// 		<h1>Welcome to YourOrder!</h1>
		// 		<h3>Choose an option to get started</h3>
		//
		// 		<div className="splashButton">
		// 			{/* <a href="/Supplier">Supplier</a> */}
		// 			<Link to="/Supplier">Supplier</Link>
		// 			<a href="/Restaurant">Client</a>
		// 		</div>
		// 	</div>
		// </div>

		)
	}
}

ReactDOM.render(
<Router history={browserHistory}>
    <Route path="/" component={App} />
        <Route path="/Supplier" component={Login} />
        <Route path="/Restaurant" component={Supplier} />
</Router>, document.getElementById('app'))
