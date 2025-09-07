import React from "react";
import Styles from "./Card.module.css";
const Card = ({
  title,
  shortDesc,
  fullDesc,
  duration,
  image,
  showFull,
  buttonText,
}) => {
  return (
    <div>
      <div className={Styles.card}>
        <img src={image} alt={title} className={Styles.image} />
        <div className={Styles.content}>
          <h3>{title}</h3>
          <p>{showFull ? fullDesc : shortDesc}</p>
          <p className={Styles.duration}>
            <strong>Duration:</strong> {duration}
          </p>
          <button className={Styles.btn}>{buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
