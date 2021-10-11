import React, { Component } from 'react';
import Navbar from './navbar';
import { Route, Switch, Redirect } from 'react-router';
import Home from './home';
import About from './about';
import ShoppingCart from './shoppingCart';
import ProductDetails from './productDetails';
import PageNotFound from './notFound';



class App extends Component {

    state = {
        products : [
            {id: 1, name: "Burger", count: 2},
            {id: 2, name: "Frais", count: 0},
            {id: 3, name: "Cola", count: 3}
        ]
    }

    handleDelete = (product) => {
        const newProducts = this.state.products.filter(p => p.id !== product.id);
        this.setState({products : newProducts});
    };

    handelSet = () => {
        let newProducts = [...this.state.products];
        newProducts = newProducts.map( p => {
            p.count = 0;
            return p;
        });
        this.setState({products:newProducts});
    };


    increamentCount = (product, num) => {
        //Clone Products
        let products = [...this.state.products];
        //define product that will be update his count
        let index = products.indexOf(product);
        //clone object in array
        products[index] = {...products[index]};
        //increase product's count
        products[index].count = products[index].count + num;
        this.setState({products})
    };

    render() { 
        return (
            <React.Fragment>
                <Navbar productsCount={this.state.products.filter(p => p.count > 0).length}/>
                <div className="container">
                    <Switch>
                        <Route path="/product/:id" render={ (props) => <ProductDetails products={this.state.products} {...props} /> } />
                        <Route path="/cart"
                            render={(props) =>  (
                                <ShoppingCart 
                                products={this.state.products}
                                onDelete={this.handleDelete}
                                onSet={this.handelSet}
                                onIncreament={this.increamentCount}
                                {...props}
                        />
                        )} />
                        <Route path="/notFound" component={PageNotFound} />
                        <Route path="/about" component={About} />
                        <Route path="/home" component={Home} />
                        <Redirect from="/" to="/home" />
                        <Redirect to="/notFound" />
                    </Switch>
                </div>
            </React.Fragment>
        );
    }
}

export default App;