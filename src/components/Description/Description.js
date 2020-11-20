import React, { Component } from 'react';

class Description extends Component {
    constructor(props){
        super(props);

        this.state = {
            description: props.description
        }
    }

    render(){
        return(
            <b>
                <span>
                    {this.state.description}
                </span>
            </b>
        )
    }
}

export default Description;