import React, {Component} from "react";
import { Link } from 'react-router-dom';

class Product extends Component
{
    state = {
        // name : this.props.Product.name,
        // count : this.props.Product.count
    }

    componentWillUnmount()
    {
        console.log("componentWillUnmount");
    }

    render() {
        return (
            <React.Fragment>
                <div className="row mb-3 p-2">
                    <div className="col-2">
                        <Link to={`/product/${this.props.Product.id}`}>{this.props.Product.name}</Link>
                    </div>
                    <div className="col">
                        <span className="m-2">{this.props.Product.count}</span>
                        <button onClick={() => this.props.onIncreament(this.props.Product, 2)} className="btn btn-primary btn-sm">+</button>
                        <span onClick={() => this.props.onDelete(this.props.Product)}>
                            <i className="fas fa-trash m-2"></i>
                        </span>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}


export default Product;