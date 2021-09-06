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
    handleDelete = () => {
        console.log("Event Handler Called");
    };
    render() {
        return (
            <div>
                {this.state.counters.map((counter) => (
                    <Counter
                        key={counter.id}
                        onDelete={this.handleDelete}
                        value={counter.value}
                        selected={true}
                        id={counter.id}
                    ></Counter>
                ))}
            </div>
        );
    }
}

export default Counters;
