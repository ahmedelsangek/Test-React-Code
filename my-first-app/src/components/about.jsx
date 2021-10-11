import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Route} from "react-router";
import Team from './team';
import Company from './company';

class About extends Component {
    render() { 
        return (
            <React.Fragment>
                <div className="row">
                    <h2>About</h2>
                    <div className="col-3">
                        <ul>
                            <li>
                                <Link to="/about/our-team">Our Team</Link>
                            </li>
                            <li>
                                <Link to="/about/our-company">Company</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <Route path="/about/our-team" component={Team} />
                        <Route path="/about/our-company" component={Company} />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default About;