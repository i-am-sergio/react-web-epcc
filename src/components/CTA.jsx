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
    <h2>Ubicaci&oacute;n</h2>
        <p className={_styles.subtitle}>
          UNIVERSIDAD NACIONAL DE SAN AGUST&Iacute;N, AREQUIPA <br /> PABELL&Oacute;N DE
          CIENCIA DE LA COMPUTACI&Oacute;N
        </p>
      <div className={_styles.content_container}>
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
        <div className={_styles.mapa}>
          <Mapa />
        </div>
      </div> 
  </section>
);

export default CTA;