import React, { Component } from 'react';
import { FormControl, Button, Modal } from 'react-bootstrap';
import styles from './addTaskStyle.module.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addTask} from '../../store/actions';

class AddTask extends Component {
constructor(props){
    super(props);

    this.state = {
        title: '',
        description: '',
        date: new Date()
    };

    this.titleRef = React.createRef(null);
}

componentDidMount(){
    this.titleRef.current.focus();
}


    handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            this.addTask();
        }
    };

    handleChange = (event) => {
        const {name, value} = event.target;
  
        this.setState({
            [name]: value
        });
    };

    handleDateChange = (date)=>{
        this.setState({
            date
        });
    };

    addTask = () => {
        const { title, description, date } = this.state;
        if (!title) {
            return;
        }

        const task = {
            title,
            description,
            date: date.toISOString().slice(0, 10)
        };

        this.props.addTask(task);
    };


    render() {
        const { onClose } = this.props;

        return (
                <Modal
                    show={true}
                    onHide={onClose}
                    centered
                >
                    <Modal.Header closeButton className={styles.taskContainer}>
                        <Modal.Title>Add new task</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className={styles.taskContainer}>
                        <FormControl
                            placeholder="Title"
                            name = "title"
                            ref = {this.titleRef}
                            onChange={this.handleChange}
                            onKeyDown={this.handleKeyDown}
                        />

                        <textarea 
                        rows="4"
                        className={styles.description}
                        name = "description"
                        placeholder = "Description"
                        onChange={this.handleChange}
                        > 
                        </textarea>

                        <DatePicker 
                        selected={this.state.date} 
                        onChange={this.handleDateChange} 
                        minDate = {new Date()}
                        />

                    </Modal.Body>
                    <Modal.Footer className={styles.taskContainer}>
                        <Button variant="dark" onClick={this.addTask}>
                            Add
                        </Button>
                        <Button variant="light" onClick={onClose}>
                            Cancel
                        </Button>
                    </Modal.Footer>
                </Modal>

        );
    }
}

AddTask.propTypes = {
    onClose: PropTypes.func.isRequired
};

const mapDispatchToProps = {
    addTask
};
export default connect(null, mapDispatchToProps)(AddTask);