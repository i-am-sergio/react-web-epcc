import styles from "../style";
import Mapa from "./Mapa";
import { direcciones } from "../constants";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import _styles from "../styles/ubicacion.module.scss";
import InfoCard from "./cards/InfoCard";

function ComponentA() {
  return <HiOutlineLocationMarker className="featuredCard-icon" />;
}
function ComponentB() {
  return <AiOutlineMail className="featuredCard-icon" />;
}
const componentArray = [ComponentA, ComponentB];

const CTA = () => (
  <section
    id="ubicacion"
    className={_styles.ubicacion}
  >
<<<<<<< HEAD
    <h2 className={`${styles.heading2} text-center pt-8 `}>Ubicación</h2>
    <section
      className={`${styles.flexCenter}  sm:flex-row flex-col rounded-[20px]`}
    >
      <div className="flex-1 flex flex-col">
        <p className={`${styles.paragraph} max-w-[470px] my-10 text-center`}>
          UNIVERSIDAD NACIONAL DE SAN AGUSTÍN, AREQUIPA <br /> PABELLÓN DE
          CIENCIA DE LA COMPUTACIÓN
=======
    <h2>Ubicaci&oacute;n</h2>
      <div>
        <p className={_styles.subtitle}>
          UNIVERSIDAD NACIONAL DE SAN AGUSTIN, AREQUIPA <br /> PABELLON DE
          CIENCIA DE LA COMPUTACION
>>>>>>> d3a220b6d36967d60b7b6a5eb3c444106c9be11b
        </p>
        <div className={_styles.container}>
          {direcciones.map((feature, index) => (
              <InfoCard 
                key={feature.id} 
                {...feature} 
                index={index} 
                contentComponent={componentArray[index]}
              />
            ))}
            </div>
      </div>
      <div className={_styles.mapa}>
        <Mapa />
      </div>
  </section>
);

export default CTA;
