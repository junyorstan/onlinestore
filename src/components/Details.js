import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                    const {id,company,img,info,price,title,inCart} = value.detailProduct;
                    return(
                        <div className="container py-5">
                            {/* title */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/* end title */}
                            
                            {/* product info */}
                            <div className="row">
                                <div className="col-10 col-md-6 mx-auto my-3">
                                    <img src={img} className="img-fluid" alt="product"/>
                                </div>
                                {/* product text */}
                                <div className="col-10 col-md-6 mx-auto my-3">
                                    <h5>Model: {title}</h5>
                                    <h5 className="text-muted mt-3">Brand: <span className="text-uppercase">{company}</span></h5>
                                    <h5 className="text-blue"><strong>Price: {price} <span>lei</span></strong></h5>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">Details about product: </p>
                                    <p className="text-muted lead">{info}</p>

                                    {/* buttons */}
                                    <div>
                                        <Link to="/"> 
                                            <ButtonContainer>
                                                Back to store
                                            </ButtonContainer>
                                        </Link>
                                        <ButtonContainer disabled={inCart?true:false}>
                                            {inCart ? "inCart" : "add to cart"}
                                        </ButtonContainer>


                                        https://youtu.be/wPQ1-33teR4?t=11188

                                    </div>
                                    {/* buttons */}
                                </div>
                                {/* product text */}
                            </div>
                            {/* product info */}

                        </div>
                    )
                }}
            </ProductConsumer>
        );
    }
}

export default Details;