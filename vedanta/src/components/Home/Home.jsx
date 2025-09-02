import Styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={Styles.main}>
    <div className={Styles.container}>
      <div className={Styles.textcontainer}>
        <h1>
          Unlock Your
          <br /> <span>Potential</span> <br /> with Expert Training
        </h1>
        <p>
          Transform your skills with our comprehensive training programs in
          handwriting, public speaking, creative writing, and innovative
          learning methodologies.
        </p>
      </div>
      <div className={Styles.card}>
        <h3>Why Choose Vedanta Academy?</h3>
        <ul>
          <li>&#10140; Expert instructors with proven track records</li>
          <li>&#10140; Personalized learning approach</li>
          <li>&#10140; Comprehensive skill development</li>
          <li>&#10140; Flexible scheduling options</li>
        </ul>
      </div>
    </div>
      <div className={Styles.buttons}>
        <button className={Styles.btn1}>Explore Programs &#10140; </button>
        <button className={Styles.btn2}>Contact us </button>
      </div>
    </div>
  );
};

export default Home;
