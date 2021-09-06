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
    handleDelete = (counterId) => {
        this.setState({
            counters: this.state.counters.filter((e) => e.id != counterId),
        });
    };
    render() {
        return (
            <div>
                {this.state.counters.map((counter) => (
                    <Counter
                        key={counter.id}
                        onDelete={this.handleDelete}
                        counter={counter}
                    ></Counter>
                ))}
            </div>
        );
    }
}

export default Counters;
