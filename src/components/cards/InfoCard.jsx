import { features,socialMedia  } from "../../constants";
import styles from "../../style";
import {BsCode} from 'react-icons/bs';

const InfoCard = ({ icon, title, content, index }) => (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <BsCode className="featuredCard-icon"/>
      </div>
      <div className="flex-1 flex flex-col ml-8">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
          {content}
        </p>
      </div>
    </div>
);

export default InfoCard;