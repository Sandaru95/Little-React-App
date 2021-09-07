import React, { Component } from "react";
import Counter from "./counter";

class Counters extends React.Component {
    render() {
        return (
            <div>
                <button
                    className="btn btn-sm btn-primary m-2"
                    onClick={this.props.onReset}
                >
                    Reset
                </button>
                {this.props.counters.map((counter) => (
                    <Counter
                        key={counter.id}
                        onDelete={this.props.onDelete}
                        onIncrement={this.props.onIncrement}
                        counter={counter}
                    ></Counter>
                ))}
            </div>
        );
    }
}

export default Counters;
