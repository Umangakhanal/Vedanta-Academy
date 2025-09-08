import React, { useEffect, useState } from "react";
import Styles from "./Program.module.css";
import Card from "../Card/Card";
const Program = () => {
    const [programs, setPrograms]=useState([]);
    useEffect(()=>{
        fetch("https://raw.githubusercontent.com/Umangakhanal/Vedanta-Academy/refs/heads/master/Program.json")
        .then(res => res.json())
        .then(data => setPrograms(data))
        .catch(err=>console.log(err));
    },[]);
  return (
    <>
      <div className={Styles.main}>
        <div className={Styles.textcontainer}>
          <h2>Our Training Programs</h2>
          <p>
            Discover your hidden talents and grow with us! Our training programs
            give you the tools to write better, speak confidently, and express
            your ideas with ease, all in a supportive and encouraging
            environment.
          </p>
        </div>
      </div>
      <div className={Styles.programDescription}>
        <div className={Styles.textcontainer}>
          <h3>Our Training Programs</h3>
          <p>
            Choose from our comprehensive range of skill-building programs
            designed to help you excel in communication, writing, and personal
            development.
          </p>
        </div>
        <div className={Styles.cardsContainer}>
             {programs.map(program =>(
            <Card 
            key={program.id}
            title={program.title}
            shortDesc={program.shortDesc}
            fullDesc={program.fullDesc}
            duration={program.duration}
            image={program.image}
            showFull={true}
            buttonText={"Enroll Now"}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Program;
