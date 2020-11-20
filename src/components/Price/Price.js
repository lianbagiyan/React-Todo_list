import React, { Component } from 'react';
import '../Price/Price.css';

class Price extends Component {
    constructor(props){
        super(props);

        this.state = {
            count: props.price
        }
    }

    changeValue =()=>{
        let sign = this.state.count[this.state.count.length-1];
        if(sign === '$' ){
            this.setState({
                count: parseInt(this.state.count)*487 + "D"
            })
        } else {
            this.setState({
                count: parseInt(this.state.count)/487 + "$"
            })
        }
        
    }

    render(){
        return (
            <b>
                <span>
                    {this.state.count}
                </span>
                <button onClick={this.changeValue}>Change the currency</button>
            </b>
        )
    }
}

export default Price;