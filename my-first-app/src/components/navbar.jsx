import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {

    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container" style={{flexWrap: 'nowrap'}}>
                        <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                        <div className="navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav" style={{flexDirection:"row"}}>
                                <li className="nav-item">
                                    <NavLink className="nav-link mx-2" aria-current="page" to="/home">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link mx-2" to="/about">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link mx-2" to="/cart">Shopping Cart</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link mx-2" to="/admin">Admin</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link mx-2" to="/login">Login</NavLink>
                                </li>
                            </ul>
                        </div>
                        <button type="button" className="btn btn-primary btn-sm d-flex">
                            Products <span className="badge bg-secondary m-1">{this.props.productsCount}</span>
                        </button>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}

export default Navbar;