import React from "react";
import { Link } from "react-router-dom";
import x from '../app/assets/images';

class Products extends React.Component {
    render() {
        return (
        <div className="container mt-5">
          <div className="row">
                <div className="col-sm-12 col-lg-6 offset-lg-3">
                    <h1 className="font-weight-light mb-5">View our products</h1>
                </div>
                <img src={x} height={100} width={100}/>
            </div>
        </div>

        );
    }

}

export default Products;