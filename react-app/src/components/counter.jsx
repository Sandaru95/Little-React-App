import React, { Component } from "react";

class Counter extends React.Component {
    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }
    render() {
        console.log(this.props.counter.children);
        return (
            <React.Fragment>
                <h4>Counter #{this.props.counter.id}</h4>
                <span style={{ fontSize: 14 }} className={this.formatClasses()}>
                    {this.formatValue()}
                </span>
                <button
                    onClick={() => this.props.onIncrement(this.props.counter)}
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>
                <button
                    className="btn btn-danger btn-sm m-2"
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                >
                    Delete
                </button>
                <br />
            </React.Fragment>
        );
    }
    formatValue() {
        return this.props.counter.value === 0
            ? "Zero"
            : this.props.counter.value;
    }
    formatClasses() {
        let normalClassText = "badge m-1 badge-";
        return (normalClassText +=
            this.props.counter.value === 0 ? "warning" : "success");
    }
}

export default Counter;
