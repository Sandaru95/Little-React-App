import React, { Component } from "react";

class Counter extends React.Component {
    state = {
        count: 1,
        tags: ["tag1", "tag2", "tag3"],
    };
    render() {
        return (
            <React.Fragment>
                <span style={{ fontSize: 14 }} className={this.formatClasses()}>
                    {this.formatCount()}
                </span>
                <button className="btn btn-secondary btn-sm">Increment</button>
                <ul>
                    {this.state.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                    ))}
                </ul>
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
