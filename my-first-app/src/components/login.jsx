import React, { Component } from 'react';


class Login extends Component {


    state = {
        userName : "",
        password : ""
    };


    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit");
    };

    handleInputsChange = (e) => {
        //Clone
        let state = {...this.state};
        //Edit
        state[e.currentTarget.name] = e.currentTarget.value;
        //Set state
        this.setState(state);
    };


    render() {

        console.log()

        return (
            <React.Fragment>
                <form className="my-5" onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">User Name</label>
                        <input
                            ref={this.userName}
                            type="text"
                            className="form-control"
                            value={this.state.userName}
                            id="name"
                            name="userName"
                            onChange={this.handleInputsChange}
                            />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            value={this.state.password}
                            id="exampleInputPassword1"
                            name="password"
                            onChange={this.handleInputsChange}
                            />
                    </div>
                    <div className="mb-3 form-check">
                        <input
                        type="checkbox"className="form-check-input" id="exampleCheck1" />
                        <label className ="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        );
    }
}

export default Login;