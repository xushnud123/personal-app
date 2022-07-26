import Navbar from './navbar/navbar'
import HeroBlock from "./hero-block/hero-block";


import classes from "./hero.module.scss";

const Hero = () => {

  return (
    <div className={classes.wrapper}>
     <Navbar/>
     
     <HeroBlock/>
    </div>
  );
};

export default Hero;
