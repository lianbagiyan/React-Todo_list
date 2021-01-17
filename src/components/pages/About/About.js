import React from 'react';
import aboutPic from '../../../assets/aboutPage.png';
import styles from './about.module.css';

export default function About(){

    return(
        <section className={styles.aboutSection}>
            <h2 className={styles.aboutTitle}>About us</h2>
            <section className={styles.aboutHeadPart}>
                <img src={aboutPic} alt='sitePic' className={styles.sitePic} />
                <div>
                    <h5 className={styles.text}>Description</h5>
                    <p className={styles.aboutTextDesc}>On this site you can add tasks, change them. You have the opportunity to delete the task.</p>
                    <br />
                    <p className={styles.aboutTextDesc}>Everyone can use the site. It has quite understandable functionality and can serve as an example for all beginner programmers.</p>
                </div>
            </section>
            <section>
                
            </section>
        </section>
    );
}