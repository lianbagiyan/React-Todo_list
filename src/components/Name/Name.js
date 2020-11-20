import React, { Component } from 'react';

class Name extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: props.name
        }
    }

    render(){
        return(
            <b>
                <span>
                    {this.state.name}
                </span>
            </b>
        )
    }
}

export default Name;