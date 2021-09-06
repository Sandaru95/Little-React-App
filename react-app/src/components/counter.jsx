import React, { Component } from "react";

class Counter extends React.Component {
    state = {
        count: 1,
        tags: [],
    };
    renderList() {
        if (this.state.tags.length === 0) return <p>No tags to show here</p>;
        return (
            <ul>
                {this.state.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                ))}
            </ul>
        );
    }
    render() {
        return (
            <React.Fragment>
                {this.state.tags.length === 0 && <h2>No tags to show here</h2>}
                {this.renderList()}
            </React.Fragment>
        );
    }
}

export default Counter;
