import React, { Component } from 'react';

class Counter extends React.Component {
    state = {
        count: 0,
    };
    styles = {

    }
    render() {
        return (
            <React.Fragment>
                <span className="badge badge-warning m-2">{this.state.count}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
            </React.Fragment>
        );
    };
}

export default Counter;