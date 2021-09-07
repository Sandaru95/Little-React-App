import React, { Component } from 'react';
import './App.css';
import Counters from './components/counters';
import Navbar from './components/navbar';

class App extends React.Component {
	state = {
		counters: [
			{ id: 1, value: 0 },
			{ id: 2, value: 0 },
			{ id: 3, value: 2 },
			{ id: 4, value: 0 },
			{ id: 5, value: 3 },
		],
	};
	handleIncrement = (counter) => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index].value++;

		this.setState({ counters: counters });
	};
	handleDelete = (counterId) => {
		this.setState({
			counters: this.state.counters.filter((e) => e.id != counterId),
		});
	};
	handleReset = () => {
		const newCounters = this.state.counters.map((e) => {
			e.value = 0;
			return e;
		});
		console.log(newCounters);
		this.setState({
			counters: newCounters,
		});
	};
	render() {
		return <React.Fragment>
			<Navbar totalCounters={this.state.counters.filter(counter => counter.value > 0).length} />
			<div className="container">
				<Counters onReset={this.handleReset} onIncrement={this.handleIncrement} onDelete={this.handleDelete} counters={this.state.counters} />
			</div>
		</React.Fragment>;
	}
}

export default App;