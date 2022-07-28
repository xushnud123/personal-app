import { useState } from "react";
import { Link } from "react-scroll";
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
                <Link
                  to="about"
                  spy
                  smooth
                  offset={0}
                  duration={2000}
                  type="button"
                  className={classes.btn}
                >
                  About me
                </Link>
              </li>
              <li>
                <Link
                  to="experience"
                  spy
                  smooth
                  offset={0}
                  duration={2000}
                  type="button"
                  className={classes.btn}
                >
                  My Experience
                </Link>
              </li>
              <li>
                <Link
                  to="projects"
                  spy
                  smooth
                  offset={0}
                  duration={2000}
                  type="button"
                  className={classes.btn}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="contacts"
                  spy
                  smooth
                  offset={0}
                  duration={2000}
                  type="button"
                  className={classes.btn}
                >
                  Contacts
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
