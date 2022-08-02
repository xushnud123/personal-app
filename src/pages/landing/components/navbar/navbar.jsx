import { Link, animateScroll as scroll } from "react-scroll";
import cx from "classnames";
import { AiOutlineAlignRight } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

import classes from "./navbar.module.scss";
import logo from "assets/img/hero/text.svg";

const Navbar = ({ open, onOpen,active }) => {
  return (
    <div
      className={cx(
        classes.wrapper,
        open && classes.fixed,
        active && classes.shadow
      )}
    >
      <div className={classes.container}>
        <div className={cx(classes.navbar, active && classes.pad)}>
          <div className={classes.logo}>
            <img src={logo} alt="img not found" />
            <div className={classes.btn} onClick={() => onOpen(!open)}>
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
                  activeClass="active"
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
                  activeClass="active"
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
                  activeClass="active"
                  offset={0}
                  duration={2000}
                  type="button"
                  onClick={() => scroll.scrollTo(100)}
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
                  activeClass="active"
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
