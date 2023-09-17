import styles, { layout } from "../style";
import Button from "./Button";
import Mapa from "./Mapa";
import { direcciones  } from "../constants";
import { AiOutlineMail } from 'react-icons/ai';
 import { HiOutlineLocationMarker } from 'react-icons/hi'

const DireccionesCard = ({ title, content, index, id , contentComponent: MyIcon }) => (
  
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== direcciones.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <div>
        <MyIcon />
      </div>
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

function ComponentA() {
  return <HiOutlineLocationMarker className="featuredCard-icon"/>;
}
function ComponentB() {
  return <AiOutlineMail className="featuredCard-icon"/>;
}
const componentArray = [ComponentA, ComponentB];


const CTA = () => (
  <div className={`${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-3`}>
    <h2 className={`${styles.heading2} text-center pt-8 `}>Ubicacion</h2>
    <section className={`${styles.flexCenter}  sm:flex-row flex-col rounded-[20px]`}>
      <div className="flex-1 flex flex-col">
        <p className={`${styles.paragraph} max-w-[470px] my-10 text-center`}>
        UNIVERSIDAD NACIONAL DE SAN AGUSTIN, AREQUIPA <br/> PABELLON DE CIENCIA DE LA COMPUTACION
        </p>
        <div className={`flex-col`}>
        {direcciones.map((feature, index) => (
          <DireccionesCard key={feature.id} {...feature} index={index} contentComponent={componentArray[index]} />
        ))}
      </div>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10 rounded-[10px]`}>
        <Mapa />
      </div>
    </section>
  </div>
);

export default CTA;
