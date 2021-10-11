import React from 'react';


class ProductDetails extends React.Component {

    saveProduct = () => {
        this.props.history.replace("/cart");
    };

    render() { 

        // const res = querystring.parse(this.props.location.search);
        // console.log(res.price);

        const product = this.props.products.filter(p => p.id === parseInt(this.props.match.params.id))[0];

        return (
            <React.Fragment>
                <h2>Details No.{this.props.match.params.id}</h2>
                <h3> Name : {product.name}</h3>
                <h3> Count : {product.count}</h3>
                <button onClick={this.saveProduct} className="btn btn-primary btn-sm">Back</button>
            </React.Fragment>
        );
    }
}

export default ProductDetails;