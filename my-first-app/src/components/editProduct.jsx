import React from 'react';

class EditProduct extends React.Component {


    handleOnChange = () => {};


    render() {

        const product = this.props.products.filter(p => p.id === parseInt(this.props.match.params.id))[0];

        return (
            <React.Fragment>
                <div className="mt-5">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name: </label>
                            <input
                            type="text"
                            className="form-control"
                            id="name"
                            value={product.name}
                            onChange={this.handleOnChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="price" className="form-label">Price: </label>
                            <input
                            type="text"
                            className="form-control"
                            id="price"
                            value={product.price} 
                            onChange={this.handleOnChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}
 
export default EditProduct;