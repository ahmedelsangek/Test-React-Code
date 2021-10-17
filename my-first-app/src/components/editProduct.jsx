import axios from 'axios';
import React from 'react';

class EditProduct extends React.Component {

    state = {
        name: "",
        price: ""
    };

    //That Run When Component Runing
    async componentDidMount() {
        //Get Data That Match With Id
        const id = this.props.match.params.id;
        const {data} = await axios.get(`http://localhost:3000/products/${id}`);

        //Clone state
        let state = {...this.state};

        //Edit state
        state.name = data.name;
        state.price = data.price;

        //ste state
        this.setState(state);
    };


    handleSubmit = async (e) => {
        e.preventDefault();
        const obj = {...this.state, count:2};
        await axios.put(`http://localhost:3000/products/${this.props.match.params.id}`, obj);
        this.props.history.replace("/admin");
        window.location.reload(true);
    };


    handleOnChange = (e) => {
        let state = {...this.state};
        state[e.currentTarget.name] = e.currentTarget.value;
        this.setState(state);
    };


    render() {
        return (
            <React.Fragment>
                <div className="mt-5">
                    <form onSubmit={this.handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name: </label>
                            <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleOnChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="price" className="form-label">Price: </label>
                            <input
                            type="text"
                            className="form-control"
                            id="price"
                            name="price"
                            value={this.state.price} 
                            onChange={this.handleOnChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Edit</button>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}
 
export default EditProduct;