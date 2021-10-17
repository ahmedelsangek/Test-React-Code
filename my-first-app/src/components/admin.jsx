import React from 'react';
import {Link} from "react-router-dom";


class Admin extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="container mt-5">
                    <h2>Admin</h2>
                    <Link to="/create" className="btn btn-primary mb-4">Add</Link>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.products.map(product => (
                                <tr key={product.id}>
                                    <td>
                                        {product.name}
                                    </td>
                                    <td>{product.price}</td>
                                    <td>
                                        <Link to={`/edit/${product.id}`} style={{cursor:'pointer'}}>
                                            <i className="fas fa-edit"></i>
                                        </Link>
                                    </td>
                                    <td>
                                        <span onClick={ () => this.props.onDelete(product) } style={{cursor:'pointer'}}>
                                            <i className="fas fa-trash m-2"></i>
                                        </span>
                                    </td>
                                    
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        );
    }
}

export default Admin;