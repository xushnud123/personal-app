import { useState } from "react";
import cx from "classnames";
import { AiOutlineAlignRight } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

import classes from './navbar.module.scss'
import logo from "../../../assets/img/hero/text.svg";

const Navbar = () => {
      const [open, setOpen] = useState(false);
  return (
    <div className={cx(classes.wrapper, open && classes.fixed)}>
      <div className={classes.container}>
        <div className={classes.navbar}>
          <div className={classes.logo}>
            <img src={logo} alt="img not found" />
            <div className={classes.btn} onClick={() => setOpen(!open)}>
              {open ? <AiOutlineClose /> : <AiOutlineAlignRight />}
            </div>
          </div>
          <div className={cx(classes.nav, open && classes.active)}>
            <ul>
              <li>
                <a href="#">About me</a>
              </li>
              <li>
                <a href="#">My Experience</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Contacts</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
