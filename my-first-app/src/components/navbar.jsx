import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

class Navbar extends Component {

    render() { 
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-md">
                        <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                        <button type="button" className="btn btn-primary">
                            Products <span className="badge bg-secondary">{this.props.productsCount}</span>
                        </button>

                        <div className="" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/home">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/cart">Shopping Cart</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}

export default Navbar;