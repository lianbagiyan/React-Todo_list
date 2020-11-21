import React from 'react';

function Task(props) {
    return(
        <li className="task-container"> 
            <h4>{props.data}</h4>
            <p>Lorem ipsum</p>
        </li>
    )
}

export default Task;