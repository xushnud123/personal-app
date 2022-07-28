import { useState,useRef } from "react";
import emailjs from "@emailjs/browser";
import cx from 'classnames'

import classes from "./contact.module.scss";
import Cards from "./cards/cards";

const Contact = () => {
  const ref = useRef(null)
  const [name,setName] = useState('')
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading,setLoading] = useState(false)
  const [succes,setSucces] = useState(false)
  const isValid = name && email && message

  const sendEmail = (e) => {
    console.log('first')
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mnnpxkc",
        "template_k2w4vz8",
        ref.current,
        "Ubhu0hMFRhm8JQPIp"
      )
      .then(
        (result) => {
          setLoading(false)
          setSucces(true)
          setEmail('')
          setName('')
          setMessage('')
        },
        (error) => {
           setLoading(false);
          console.log(error.text);
        }
      );
  };


  return (
    <div className={classes.wrapper} id="contacts">
      <div className={classes.container}>
        <div className={classes.rows}>
          <h1 className={classes.title}>Contact Me</h1>
        </div>
        <div className={classes.row}>
          <Cards/>
        </div>
        <h1 className={classes.name}>Send Message Us</h1>
        <form ref={ref} className={classes.form_wrap} onSubmit={sendEmail}>
          <div className={classes.wrap}>
            <div className={classes.col}>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label className={classes.label_one}>Name</label>
            </div>
            <div className={classes.col}>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label className={classes.label_one}>Email</label>
            </div>
          </div>
          <div className={classes.message}>
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              id="message"
              required
            />
            <label className={classes.label_one}>Message</label>
          </div>
          <button type="submit" className={cx(classes.btn,succes && classes.btn_active)} >
            {loading ? (
              <div className={classes.loading}/>
            ) : succes ? (
              "Succes 🎉"
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
