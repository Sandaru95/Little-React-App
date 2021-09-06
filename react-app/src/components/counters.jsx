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
    render() {
        return (
            <div>
                {this.state.counters.map((counter) => (
                    <Counter
                        key={counter.id}
                        value={counter.value}
                        selected={true}
                    >
                        <h4>Hello</h4>
                    </Counter>
                ))}
            </div>
        );
    }
}

export default Counters;
