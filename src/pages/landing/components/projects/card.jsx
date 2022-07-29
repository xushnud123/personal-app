import classes from './projects.module.scss'

const Card = ({img,link,name,description}) => {
    return (
      <div className={classes.card}>
        <div className={classes.wrap}>
          <div className={classes.header}>
            <img src={img} alt="img not found" />
            <div className={classes.links}>
              <a href={link}>Link</a>
            </div>
          </div>
          <div className={classes.body}>
            <div className={classes.name_wrap}>
              <h1 className={classes.title}>{name}</h1>
            </div>
            <p className={classes.description}>
              <span>Target:</span> {description}
            </p>
          </div>
        </div>
      </div>
    );
}
 
export default Card;