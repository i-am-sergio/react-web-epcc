import { features, socialMedia } from "../constants";
import styles, { layout } from "../style";
import {
  BsCode,
  BsTwitch,
  BsYoutube,
  BsFacebook,
  BsTwitter,
} from "react-icons/bs";

import _styles from "../styles/about.module.scss";
import InfoCard from "./cards/InfoCard";

export const About = () => {
  return (
    <section id="about" className={_styles.about}>
      <h2>Sobre el evento</h2>
      <div className={_styles.container}>
        <div className={_styles.container_left}>
          <p className="font-poppins font-normal text-dimWhite leading-[24px]">
            Tendremos conferencistas nacionales e internacionales con más de 20
            ponencias en Computación. Las charlas se transmitirán por las
            plataformas de Youtube y Facebook de la Escuela Profesional de
            Ciencia de la Computación de la Universidad Nacional de San Agustín
            de Arequipa.
          </p>
          <div className={_styles.container_icons}>
            <a href="https://www.facebook.com/epcc.unsa" target="blank">
              <BsFacebook className="social-icons text-white" />
            </a>
            <a
              href="https://www.youtube.com/@escuelaprofesionaldecienci7865"
              target="blank"
            >
              <BsYoutube className="social-icons text-white" />
            </a>
            <a href="https://twitter.com/EPCC_10" target="blank">
              <BsTwitter className="social-icons text-white" />
            </a>
            <a href="#" target="blank">
              <BsTwitch className="social-icons text-white" />
            </a>
          </div>
        </div>
        <div className={_styles.container_right}>
          {features.map((feature, index) => (
            <InfoCard key={feature.id} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
