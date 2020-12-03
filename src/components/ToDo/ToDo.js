import React, { Component } from 'react';
// import Task from './task/Task';
import idGenerator from '../../helpers/idGenerator';
import { Container, Row, Col, FormControl, InputGroup, Button, Card } from 'react-bootstrap';
import styles from './todo.modules.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

class ToDo extends Component {
    state = {
        tasks: [],
        inputValue: ''
    };

    handleInputChange = (event) => {
        this.setState({
            inputValue: event.target.value
        });
    };

    handleKeyDown = (event)=>{
        if(event.key === 'Enter'){
            this.addTask();
        }
    };

    addTask = ()=>{
        const {inputValue} = this.state;
        if(!inputValue){
            return;
        }

        const newTask = {
            text: inputValue,
            _id: idGenerator()
        };

        const tasks = [newTask, ...this.state.tasks];
        this.setState({
            tasks: tasks,
            inputValue: ''
        });
    };

    removeTask = (taskId)=>{
        const newTasks = this.state.tasks.filter(task => task._id !== taskId);
        this.setState({
            tasks: newTasks
        });
    };

    render() {
        const {tasks, inputValue} = this.state;
        const tasksArray = tasks.map((task) => {
            return (
                <Col key={task._id}>
                    <Card className={styles.task}>
                        <Card.Body>
                            <Card.Title>{task.text}</Card.Title>
                            <Card.Text>
                                {task.text}
                            </Card.Text>
                            <div className='btnWrapper'>
                            <Button variant="warning" className={styles.actionButton}>
                            <FontAwesomeIcon icon={faEdit} />
                            </Button>

                            <Button 
                            variant="danger"  
                            className={styles.actionButton}
                            onClick = {()=>this.removeTask(task._id)}
                            >
                            <FontAwesomeIcon icon={faTrash} />
                            </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            )
        });


        return (
            <div className={styles.toDo}>
                <Container>
                    <Row>
                        <Col>
                            <InputGroup className={styles.input}>
                                <FormControl
                                    placeholder="Add new task"
                                    aria-label="Add new task"
                                    aria-describedby="basic-addon2"
                                    onChange={this.handleInputChange}
                                    onKeyDown = {this.handleKeyDown}
                                    value = {inputValue}
                                />
                                <InputGroup.Append>
                                    <Button 
                                    variant="outline-primary"
                                    onClick={this.addTask}
                                    disabled = {!inputValue}
                                    >
                                    Add
                                    </Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Col>

                    </Row>

                    <Row className={styles.cardBox}>
                        {tasksArray}
                    </Row>
                </Container>

            </div>
        );
    };

}

export default ToDo;