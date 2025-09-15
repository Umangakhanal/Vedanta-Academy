import React from "react";
import Styles from "./About.module.css";

const About = () => {
  return (
    <>
      <div className={Styles.heroContainer}>
        <div className={Styles.textSide}>
          <h1>About Vedanta Academy</h1>
          <p>
            Vedanta Academy began with a simple vision: to improve handwriting
            standards in Nepal. Over the years, it has grown into a pioneer in
            shaping the academic journey of students, teachers, and parents.With
            more than 9 years of experience, our programs have reached 300+
            schools, 100,000+ students, and 10,000+ teachers, leaving a lasting
            impact on learning.
            <br />
            But our journey does not stop at handwriting. As education evolves,
            so do we. We now focus on 21st Century Skills, ensuring that
            students are prepared not only for exams but also for the challenges
            of real life. At Vedanta Academy, students are encouraged to think
            creatively, communicate confidently, and solve problems effectively,
            helping them develop essential skills that go beyond textbooks. Our
            programs nurture public speaking, creative writing, leadership, and
            entrepreneurial abilities, empowering students to express themselves
            clearly, embrace innovation, and take initiative in their learning
            journey.
          </p>
        </div>
        <div className={Styles.imageSide}>
          <img
            src="https://static.wixstatic.com/media/ef1862_3ae5fb45057c4dbd804a94a9cb30d400~mv2.png/v1/fill/w_672,h_461,al_c,lg_1,q_85,enc_auto/ef1862_3ae5fb45057c4dbd804a94a9cb30d400~mv2.png"
            alt="Vedanta Academy"
          />
        </div>
      </div>
    </>
  );
};

export default About;
