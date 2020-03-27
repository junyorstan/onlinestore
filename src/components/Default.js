import React, { Component } from 'react';

class Default extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col=10 mx-auto text-center text-title text-uppercase pt-5">
                        <h1 className="display-3">404</h1>
                        <h4>page not found</h4>
                        <h6 className="my-5"><span className="text-danger">The requested URL: {this.props.location.pathname} was not found!</span></h6>
                    </div>
                </div>
            </div>
        );
    }
}

export default Default;