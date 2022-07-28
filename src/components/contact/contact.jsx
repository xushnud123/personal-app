import { useState } from "react";
import { VscGithub } from "react-icons/vsc";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTelephoneOutbound } from 'react-icons/bs'
import classes from "./contact.module.scss";

const Contact = () => {
  const [name,setName] = useState()
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  return (
    <div className={classes.wrapper} id='contacts'>
      <div className={classes.container}>
        <div className={classes.rows}>
          <h1 className={classes.title}>Contact Me</h1>
        </div>
        <div className={classes.row}>
          <div className={classes.cards}>
            <a
              href="https://www.linkedin.com/feed/?trk=404_page"
              className={classes.card}
            >
              <span>
                <FaLinkedin />
              </span>
            </a>
            <a href="https://github.com/xushnud123" className={classes.card}>
              <span>
                <VscGithub />
              </span>
            </a>
            <a href="https://t.me/XushnudbekRaimov" className={classes.card}>
              <span>
                <FaTelegramPlane />
              </span>
            </a>
            <a href="https://wa.me/998998820641" className={classes.card}>
              <span>
                <FaWhatsapp />
              </span>
            </a>
            <a href="https://facebook.com/XushnudbekRaimov" className={classes.card}>
              <span>
                <FaFacebookF />
              </span>
            </a>
            <a href="tel:+998998820641" className={classes.card}>
              <span>
                <BsTelephoneOutbound />
              </span>
            </a>
          </div>
        </div>
        <h1 className={classes.name}>Send Message Us</h1>
        <form className={classes.form_wrap}>
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
          <button className={classes.btn}>Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
