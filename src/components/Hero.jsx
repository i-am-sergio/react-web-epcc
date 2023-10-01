import { robot } from "../assets";
import Contador from "./Contador";
import { useEffect, useState } from "react";

import styles from "../styles/home.module.scss";

const Hero = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["6TA EDICION", "UNSA", "EPCC"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta)

    return () => {
      clearInterval(ticker)
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta /2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section id="home" className={styles.home}>
      <div className={styles.home_container_left}>
        <div className={styles.home_text}>
          <p> 09 AL 13 DE OCTUBRE<br />
              UNSA - PABELLÓN DE CIENCIA DE LA
              COMPUTACIÓN
          </p>
          <hr />
          <h1>SEMANA DE LA<br/><span>COMPUTACI&Oacute;N</span><br/>{text}</h1>
        </div>
        <Contador />
      </div>
      <div className={styles.home_container_right}>
        <img
          className={styles.home_img}
          src={robot}
          alt="robot arm"
        />

        {/* gradient start 
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        gradient end */}
      </div>
    </section>
  );
};

export default Hero;
