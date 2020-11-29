import React, { Component } from 'react';
import Task from '../Task/Task';
import {Button} from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrash } from '@fortawesome/free-solid-svg-icons';
// import idGenerator from '../../helpers/idGenerator';

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

    handleKeyDown=(event)=> {
        if(event.key === 'Enter'){
            this.addTask();
        }
    }

    addTask = () => {
        const {inputVal} = this.state;
        if(!inputVal){
            return;
        }

        // const newTask = {
        //     text: inputVal,
        //     _id: idGenerator()
        // }

        const tasks = [...this.state.tasks];

        tasks.push(inputVal);

        this.setState({
            tasks: tasks,
            inputVal: ''
        })
    }

    render(){
        return (
            <div className='taskContainer'>
                <input 
                    type="text" 
                    placeholder='write smth..' 
                    onKeyDown={this.handleKeyDown}
                    onChange={this.handleChange}
                    value={this.state.inputVal}
                />
                <Button  
                    variant="danger"
                    onClick={this.addTask}
                    disabled={!this.state.inputVal}
                >Add task</Button>
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