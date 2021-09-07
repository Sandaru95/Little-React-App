import React, { Component } from "react";

const Navbar = ({ totalCounters }) => {
    return (
        <React.Fragment>
            <nav className="nav-bar nav-bar-light bg-light">
                <a href="" className="navbar-brand">
                    Navbar
                </a>
                <span className="badge badge-pill badge-success">
                    {totalCounters}
                </span>
            </nav>
        </React.Fragment>
    );
};

export default Navbar;
