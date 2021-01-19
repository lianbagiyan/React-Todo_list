import React, { useState } from "react";
import styles from "./contact.module.css";
import { send } from "../../../store/actions";

const defaultValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

function Contact() {
  const [values, setValues] = useState(defaultValues);

  const handleChange = ({ target: { name, value } }) => {
    setValues({
      ...values,
      [name]: value,
    });
  };

  const send = () => {
    console.log("values", values);
    setValues(defaultValues);

    const { name, email, phone, message } = this.state;

    const date = {
      name,
      email,
      phone,
      message,
    };

    this.props.send(date);
  };

  return (
    <section className={styles.contactForm}>
      <div className={styles.formSection}>
        <label className={styles.labelText}>Name</label>
        <input
          type="text"
          placeholder="Your name"
          value={values.name}
          name="name"
          onChange={handleChange}
          className={styles.inputLine}
        />
        <label className={styles.labelText}>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={values.email}
          onChange={handleChange}
          className={styles.inputLine}
        />
        <label className={styles.labelText}>Phone Number</label>
        <input
          type="phone"
          name="phone"
          placeholder="Your phone"
          value={values.phone}
          onChange={handleChange}
          className={styles.inputLine}
        />
        <label className={styles.labelText}>Your text</label>
        <textarea
          placeholder="Your message"
          name="message"
          onChange={handleChange}
          value={values.message}
          className={styles.textAreaLine}
        ></textarea>

        <button
          //onClick={this.send}
          className={styles.formBtn}
        >
          Send
        </button>
      </div>
    </section>
  );
}

export default Contact;