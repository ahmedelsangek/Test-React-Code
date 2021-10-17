import React, { Component } from 'react';
import Navbar from './navbar';
import { Route, Switch, Redirect } from 'react-router';
import Home from './home';
import About from './about';
import ShoppingCart from './shoppingCart';
import ProductDetails from './productDetails';
import PageNotFound from './notFound';
import Login from './login';
import axios from "axios";
import Admin from './admin';
import CreateProduct from './createProduct';
import EditProduct from './editProduct';



class App extends Component {

    state = {
        products : []
    }

    //Call Backend Server
    async componentDidMount () {

        const {data} = await axios.get("http://localhost:3000/products");
        this.setState({products:data});
    }

    handleDelete = async (product) => {

        //Call Backend
        await axios.delete(`http://localhost:3000/products/${product.id}`);

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
                        <Route path="/login" component={Login} />
                        <Route
                            path="/admin"
                            render={ (props) => <Admin products={this.state.products} {...props}
                            onDelete={this.handleDelete}
                            /> } />
                        <Route path="/create" component={CreateProduct} />
                        <Route path="/edit/:id" component={EditProduct} />
                        <Redirect from="/" to="/home" />
                        <Redirect to="/notFound" />
                    </Switch>
                </div>
            </React.Fragment>
        );
    }
}

export default App;