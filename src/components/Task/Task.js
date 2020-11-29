import React from 'react';
import {Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'

function Task(props) {
    return(
        <li className="task-container"> 
            <h4>{props.data}</h4>
            <p>Lorem ipsum</p>
            <div>
            <Button variant="warning">
                <FontAwesomeIcon icon={faEdit} />
            </Button>
            <Button variant="danger">
                <FontAwesomeIcon icon={faTrash} />
            </Button>
            </div>
        </li>
    )
}

export default Task;