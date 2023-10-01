import { VscSourceControl } from "react-icons/vsc";
import _styles from "../../styles/titleCard.module.scss";

const TitleCard = ({ id, color, title, link }) => (
    <div 
        key={id}
        className={_styles.titleCard}
    >
        <VscSourceControl className={`${color} text-9xl my-12`} />
        <h3>                              
            {title.split('\n').map((line, i) => (
                <div key={i}>{line}</div>
            ))}
        </h3>
        {
            link &&
            <a
            href={link}
            target="blank"
            >
                Bases de actividad
            </a>
        }
    </div>
);

export default TitleCard;