import React from 'react';
import classes from './taskStyle.module.css';
import styles from './taskStyle.module.css';

function Task(props){
        return (
            <>
            <li className={`${classes.task} ${props.selected ? classes.selected : ''}`}>{props.data}</li>
            </>
        );
    }

export default Task;