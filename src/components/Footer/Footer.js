import React from "react";
import styles from "./footerStyle.module.css";

export default function Footer() {
  return (
    <footer className={styles.footerPart}>
      <h6 className={styles.authorName}>
        Author <h5 className={styles.authorNameText}>Liana Baghiyan</h5>
      </h6>
      <p className={styles.aboutAuthor}>
        Front-end(Rect.js) developer, Art lover
      </p>
      <p className={styles.authorName}>You can find me:</p>
      <div className={styles.socialMediaBox}>
        <a
          href={"https://www.linkedin.com/in/liana-baghiyan-226447158/"}
          className={styles.socialMediaLink}
        >
          Linkedin
        </a>
        <a
          href={"https://github.com/lianbagiyan"}
          className={styles.socialMediaLink}
        >
          Github
        </a>
      </div>
      <h4 className={styles.copyrightText}>
        Copyright © 2021 React List. All rights reserved.
      </h4>
    </footer>
  );
}
