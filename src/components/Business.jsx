import { features,socialMedia  } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import "../css/features.css"

import { BsCode, BsTwitch, BsYoutube, BsFacebook, BsTwitter } from 'react-icons/bs';

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <BsCode className="featuredCard-icon"/>
      {/* <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" /> */}
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Sobre el Evento <br className="sm:block hidden" />
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Tendremos conferencistas nacionales e internacionales con más de 20 
      ponencias en Computación. Las charlas se transmitirán por las plataformas de 
      Youtube y Facebook de la Escuela Profesional de Ciencia de la Computación de 
      la Universidad Nacional de San Agustín de Arequipa. También tendremos actividades 
      dirigidas a estudiantes y egresados de computación, como son:
      </p>
      <div className="flex flex-row md:mt-0 mt-6 social-icons-container">
        <a href="https://www.facebook.com/epcc.unsa" target="blank">
          <BsFacebook className="social-icons text-white"/>
        </a>
        <a href="https://www.youtube.com/@escuelaprofesionaldecienci7865" target="blank">
          <BsYoutube className="social-icons text-white"/>
        </a>
        <a href="https://twitter.com/EPCC_10" target="blank">
          <BsTwitter className="social-icons text-white"/>
        </a>
        <a href="#" target="blank">
          <BsTwitch className="social-icons text-white"/>
        </a>
      </div>
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
