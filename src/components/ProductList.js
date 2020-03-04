import React, { Component } from 'react';
import Product from './Product';
import Title from "./Title";

class ProductList extends Component {
    state={
        products:[]
    }
    render() {
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products"/>
                        <div className="row">
                        https://youtu.be/wPQ1-33teR4?t=5105
                        </div> 
                    </div>  
                </div>
            </React.Fragment>   
            // <Product/>
        );
    }
}

export default ProductList;