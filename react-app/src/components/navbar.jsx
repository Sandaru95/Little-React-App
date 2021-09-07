import React, { Component } from "react";

class Navbar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <nav className="nav-bar nav-bar-light bg-light">
                    <a href="" className="navbar-brand">
                        Navbar
                    </a>
                    <span className="badge badge-pill badge-success">
                        {this.props.totalCounters}
                    </span>
                </nav>
            </React.Fragment>
        );
    }
}

export default Navbar;
