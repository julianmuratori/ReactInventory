import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Link } from 'react-router';
import Welcome from './Components/Welcome';
import Supplier from './Components/Supplier';
import Inventory from './Components/Inventory';
import NotFound from './Components/NotFound';

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
			newItems[item].quantity = (newItems[item].quantity + 1);
			this.setState({
				inventoryItems: newItems
			})
		}


	render() {
		return (
		<Supplier storeName="eat shit"
			addItem={this.addItem}
			removeItem={this.removeItem}
			inventoryItems={this.state.inventoryItems}
			addOne = {this.addOne}
			removeOne = {this.removeOne}
		/>

		)
	}
}

ReactDOM.render(
<Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/Supplier" component={Supplier}/>
    <Route path="/Restaurant" component={Supplier} />
		{/* <Miss component={NotFound}/> */}
</Router>, document.getElementById('app'));
