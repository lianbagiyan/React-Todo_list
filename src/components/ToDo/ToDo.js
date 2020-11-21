import React, { Component } from 'react';
import Task from '../Task/Task';

class ToDo extends Component {
    constructor(props){
        super(props);

        this.state = {
            tasks: [],
            inputVal: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            inputVal: event.target.value
        });
    }

    addTask = () => {
        const {inputVal} = this.state;
        const tasks = [...this.state.tasks];

        tasks.push(inputVal);

        this.setState({
            tasks: tasks,
            inputVal: ''
        })
    }

    render(){
        return (
            <div>
                <input 
                    type="text" 
                    placeholder='write smth..' 
                    onChange={this.handleChange}
                    value={this.state.inputVal}
                />
                <input 
                    type="button" 
                    value="Add" 
                    onClick={this.addTask}
                />
                <ol>
                {this.state.tasks.map((item, index)=>{
                    return <Task data={item} key={index} />
                })}
                </ol>
            </div>
        );
    }
}

export default ToDo;