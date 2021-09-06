import React, { Component } from "react";

class Counter extends React.Component {
    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }
    state = {
        count: this.props.value,
        tags: ["tag1", "tag2", "tag3"],
    };
    handleIncrement = (product) => {
        console.log(product);
        this.setState({ count: this.state.count + 1 });
    };
    render() {
        return (
            <React.Fragment>
                <span style={{ fontSize: 14 }} className={this.formatClasses()}>
                    {this.formatCount()}
                </span>
                <button
                    onClick={() => this.handleIncrement({ id: 1 })}
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>
                <br />
            </React.Fragment>
        );
    }
    formatCount() {
        return this.state.count === 0 ? "Zero" : this.state.count;
    }
    formatClasses() {
        let normalClassText = "badge m-1 badge-";
        return (normalClassText +=
            this.state.count === 0 ? "warning" : "success");
    }
}

export default Counter;
