import React from 'react';
import errorImg from '../../../assets/error-img.jpeg';
import styles from './errorStyle.module.css';

export default function NotFound(){

    return(
        <div className={styles.notFountContainer}>
            <img src={errorImg} alt="Error-Pic" className={styles.errorImg} />
            <div>
                <h1>AWWW... DON’T CRY.</h1>
                <h4>It's just a 404 Error!</h4>
            </div>
        </div>
    );
}