import axios from 'axios';
import React from 'react';


class CreateProduct extends React.Component {

    state = {
        name : "",
        price : ""
    };

    submitForm = async (e) => {
        e.preventDefault();
        const obj = {...this.state, count: 2};
        await axios.post("http://localhost:3000/products/", obj);
        this.props.history.replace("/admin");
        window.location.reload(true);
    }

    handleChange = (e) => {
        //Clone State
        let state = {...this.state};
        //Edit State
        state[e.currentTarget.name] = e.currentTarget.value;
        //Set State
        this.setState(state);
    };



    render() {
        return (
            <React.Fragment>
                <div className="mt-5">
                    <form onSubmit={this.submitForm}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name: </label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                onChange={this.handleChange}
                                />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="price" className="form-label">Price: </label>
                            <input
                                type="text"
                                className="form-control"
                                id="price"
                                name="price"
                                onChange={this.handleChange}
                                />
                        </div>
                        <button type="submit" className="btn btn-primary">Add Product</button>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default CreateProduct;