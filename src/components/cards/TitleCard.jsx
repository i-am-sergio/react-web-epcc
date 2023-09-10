import { VscSourceControl } from "react-icons/vsc";
import _styles from "../../styles/titleCard.module.scss";

const TitleCard = ({ id, color, title, link }) => (
    <div 
        key={id}
        className={_styles.titleCard}
    >
        <VscSourceControl className={`${color} text-9xl my-12`} />
        <h3> {title} </h3>
        <a
            href={link}
            target="blank"
        >
            Bases Del concurso
        </a>
    </div>
);

export default TitleCard;