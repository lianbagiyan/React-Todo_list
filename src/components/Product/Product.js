import React, { Component } from 'react';
import Name from '../Name/Name';
import Price from '../Price/Price';
import Description from '../Description/Description';

class Product extends Component {

    render(){
        return (
            <>
            <ul>
                <li>Name is <Name name={this.props.name} /></li>
                <li>Price is <Price price={this.props.price} /></li>
                <li>Description is <Description description={this.props.description} /></li>
            </ul>

            <hr />
            
            </>
        )
    }
}

export default Product;