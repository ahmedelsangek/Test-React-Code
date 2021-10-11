import React, {Component} from 'react';
import Product from './product';


class ShoppingCart extends Component {

    // constructor(props){
    //     super(props);
    //     //
    // }

    componentDidMount(){
        //
    }

    componentDidUpdate()
    {
        console.log("componentDidUpdate");
    }

    render() {

        const {onSet, onDelete, onIncreament} = this.props

        return (
            <React.Fragment>
                <h2>Shopping Cart</h2>
                <button className="btn btn-secondary m-2 btn-sm" onClick={onSet}>Reset</button>
                {this.props.products.map( product => (
                    <Product key={product.id} Product={product} onDelete={onDelete} onIncreament={onIncreament}/>
                ))}
            </React.Fragment>
        );
    }


}

export default ShoppingCart;