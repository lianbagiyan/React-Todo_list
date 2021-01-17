import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './footerStyle.module.css';

export default function Footer() {
    return (
        <footer className={styles.footerPart}>
            <FontAwesomeIcon icon="linkedin" />
            <FontAwesomeIcon icon={["fas", "coffee"]} />
            <h4>Copyright © 2021 React List. All rights reserved.</h4>
        </footer>
    );
}
