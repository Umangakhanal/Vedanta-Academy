import Styles from "./Home.module.css";
import CountUp from 'react-countup';
import { useEffect, useState } from "react";
import {FaUsers,FaBookOpen, FaAward, FaStar} from 'react-icons/fa'
const Home = () => {
  const iconMap ={
    FaUsers: <FaUsers size={30} color="var(--color-custom)"  />,
    FaBookOpen: <FaBookOpen size={30}  color="var(--color-custom)" />,
    FaAward: <FaAward size={30} color="var(--color-custom)"  />,
    FaStar: <FaStar size={30}  color="var(--color-custom)" />
  };
  const[stats, setStats]=useState([]);
  useEffect(()=>{
    fetch("https://raw.githubusercontent.com/Umangakhanal/Vedanta-Academy/9a7553d470ba1929b45e2f79b67abbee6763bea1/Stats.json")
    .then((res)=> res.json())
    .then((data)=> setStats(data));
  }, []);

  return (
    <>
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
    <div className={Styles.cardContainer}>
      {stats.map((stat)=>(
        <div className={Styles.statCard} key={stat.id} >
          <div className={Styles.icon}>
          {iconMap[stat.icon]}
          </div>
          <div className={Styles.data}>
        <h2>
          <CountUp end={stat.number} duration={2}
          enableScrollSpy
          scrollSpyOnce
          />
          {stat.suffix}</h2>
          <p>{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Home;
