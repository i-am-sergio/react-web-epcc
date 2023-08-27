import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";
import "../css/home.css";
import Contador from "./Contador";
import { useEffect, useState } from "react";

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
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY} mt-20`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 home-container`}
      >
        <div className="flex flex-row items-center py-[6px] mb-2 upper-container">
          {/* <img src={discount} alt="discount" className="w-[32px] h-[32px]" /> */}
          <p className="upper-content text-white">
            <span className="text-white">09 AL 13 DE OCTUBRE </span> <br />
            <span className="text-white">UNSA</span> - PABELLON DE CIENCIA DE LA
            COMPUTACION
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full sem-com">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[42px] text-white ss:leading-[100.8px] leading-[75px]">
            SEMANA DE LA
            <br className="sm:block hidden" />{" "}
            <span className="green-text">COMPUTACION</span>{" "}
          </h1>
          {/* <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div> */}
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full animation1">
          {text}
        </h1>

        {/* Aqui estara el contador regresivo */}

        <div className={`${styles.paragraph} max-w-[470px] mt-5 contador-styles`}>
          <Contador />
        </div>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={robot}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      {/* <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div> */}
    </section>
  );
};

export default Hero;
