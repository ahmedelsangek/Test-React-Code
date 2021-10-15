import React from 'react';


class CreateProduct extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="mt-5">
                    <form>
                        <div className="mb-3">
                            <label for="name" className="form-label">Name: </label>
                            <input type="text" className="form-control" id="name" />
                        </div>
                        <div className="mb-3">
                            <label for="price" className="form-label">Price: </label>
                            <input type="text" className="form-control" id="price" />
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default CreateProduct;