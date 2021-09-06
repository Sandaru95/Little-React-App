import React, { Component } from "react";
import Counter from "./counter";

class Counters extends React.Component {
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
        return (
            <div>
                <button
                    className="btn btn-sm btn-primary m-2"
                    onClick={this.handleReset}
                >
                    Reset
                </button>
                {this.state.counters.map((counter) => (
                    <Counter
                        key={counter.id}
                        onDelete={this.handleDelete}
                        onIncrement={this.handleIncrement}
                        counter={counter}
                    ></Counter>
                ))}
            </div>
        );
    }
}

export default Counters;
