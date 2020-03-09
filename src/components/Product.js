import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ProductConsumer} from '../context';

class Product extends Component {
    render() {
        const {id,title,img,price,inCart} = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <div className="img-container p-5" onClick={() => console.log('ive been clicked')}>
                        <Link to="/details">
                            <img src={img} alt="product" className="card-img-top"/>
                        </Link>
                        <button className="cart-btn" disabled={inCart?true:false} onClick={() => {console.log('added to cart');}}>

                        {inCart?(<p className="text-capitalize  mb-0" disabled>in Cart</p>):(<i className="fa fa-cart-plus"/>)}

                        </button>
                    </div>

                    {/*card footer*/}
                    https://youtu.be/wPQ1-33teR4?t=7880
                </div>
            </ProductWrapper>
        );
    }
}

const ProductWrapper = styled.div`

`;

export default Product;