import React from 'react';
import classes from './task.modules.css';
import styles from './task.modules.css';

function Task(props){
        return (
            <>
            <li className={`${classes.task} ${props.selected ? classes.selected : ''}`}>{props.data}</li>
            </>
        );
    }

export default Task;