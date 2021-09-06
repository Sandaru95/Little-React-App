import React, { Component } from "react";

class Counter extends React.Component {
    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }
    state = {
        value: this.props.value,
        tags: ["tag1", "tag2", "tag3"],
    };
    handleIncrement = (product) => {
        console.log(product);
        this.setState({ value: this.state.value + 1 });
    };
    render() {
        console.log(this.props.children);
        return (
            <React.Fragment>
                <h4>Counter #{this.props.id}</h4>
                <span style={{ fontSize: 14 }} className={this.formatClasses()}>
                    {this.formatValue()}
                </span>
                <button
                    onClick={() => this.handleIncrement({ id: 1 })}
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>
                <button
                    className="btn btn-danger btn-sm m-2"
                    onClick={this.props.onDelete}
                >
                    Delete
                </button>
                <br />
            </React.Fragment>
        );
    }
    formatValue() {
        return this.state.value === 0 ? "Zero" : this.state.value;
    }
    formatClasses() {
        let normalClassText = "badge m-1 badge-";
        return (normalClassText +=
            this.state.value === 0 ? "warning" : "success");
    }
}

export default Counter;
