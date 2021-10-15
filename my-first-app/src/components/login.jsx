import React, { Component } from 'react';
import Joi from "joi-browser";

class Login extends Component {


    state = {
        userName : "",
        password : "",
        errors : {}
    };

    //Schema That will be used in validation
    schema = {
        userName : Joi.string().required(),
        password : Joi.string().required()
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const errors = this.validate();
        //If Errors Exact => Return Errors
        if (!errors){
            console.log("Submit");
        }
    };

    //Validation Function
    validate = () => {
        const errors = {};
        const state = {...this.state};
        
        delete state.errors;

        const res = Joi.validate(state, this.schema, {abortEarly: false});

        if (res.error === null){
            this.setState({errors: {}});
            return null;
        }

        for(const error of res.error.details){
            errors[error.path] = error.message;
        }

        this.setState({errors});

        console.log(res);
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
        return (
            <React.Fragment>
                <form className="my-5" onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">User Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.userName}
                            id="name"
                            name="userName"
                            onChange={this.handleInputsChange}
                            />
                        {this.state.errors.userName && (
                            <div className="alert alert-danger">
                                {this.state.errors.userName}
                            </div>
                        )}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <div className="input-group has-validation">
                            <input
                                type="password"
                                className="form-control"
                                value={this.state.password}
                                id="exampleInputPassword1"
                                name="password"
                                onChange={this.handleInputsChange}
                                />
                            {this.state.errors.password && (
                                <div className="alert alert-danger">
                                    {this.state.errors.password}
                                </div>
                            )}
                        </div>
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