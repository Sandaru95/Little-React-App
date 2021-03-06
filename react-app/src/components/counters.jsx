import React, { Component } from "react";
import Counter from "./counter";

class Counters extends React.Component {
    render() {
        const { onReset, counters, onDelete, onIncrement } = this.props;
        return (
            <div>
                <button
                    className="btn btn-sm btn-primary m-2"
                    onClick={onReset}
                >
                    Reset
                </button>
                {counters.map((counter) => (
                    <Counter
                        key={counter.id}
                        onDelete={onDelete}
                        onIncrement={onIncrement}
                        counter={counter}
                    ></Counter>
                ))}
            </div>
        );
    }
}

export default Counters;
