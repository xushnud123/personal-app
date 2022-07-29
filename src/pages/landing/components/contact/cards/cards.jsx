import { VscGithub } from "react-icons/vsc";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTelephoneOutbound } from 'react-icons/bs'

import classes from '../contact.module.scss'

const Cards = () => {
    return (
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
        <a
          href="https://facebook.com/XushnudbekRaimov"
          className={classes.card}
        >
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
    );
}
 
export default Cards;