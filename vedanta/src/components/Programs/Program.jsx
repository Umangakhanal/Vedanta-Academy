import React, { useEffect, useState } from "react";
import Styles from "./Program.module.css";
import Card from "../Card/Card";
import {
  FaUserFriends,
  FaBullseye,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";
const Program = () => {
  const iconMap = {
    FaUserFriends: <FaUserFriends size={30} />,
    FaBullseye: <FaBullseye size={30} />,
    FaCheckCircle: <FaCheckCircle size={30} />,
    FaClock: <FaClock size={30} />,
  };
  const [programs, setPrograms] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Umangakhanal/Vedanta-Academy/refs/heads/master/Program.json"
    )
      .then((res) => res.json())
      .then((data) => setPrograms(data))
      .catch((err) => console.log(err));
  }, []);
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
          {programs.map((program) => (
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
      <div className={Styles.choose}>
        <div className={Styles.textcontainer}>
          <h3>Why Choose Our Programs?</h3>
          <p>
            Our programs combine proven teaching methods with personalized
            guidance, ensuring measurable growth in every learner. With a focus
            on essential skills, we create a strong foundation that leads to
            lasting success.
          </p>
        </div>
        <div className={Styles.infoCardContainer}>
          {Object.keys(iconMap).map((key, index)=>(
            <div className={Styles.infoCard} key={index}>
              <div className={`${Styles.icon} ${Styles[`icon${index +1}`]}`} >
                {iconMap[key]}              
                </div>
                
                </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Program;
