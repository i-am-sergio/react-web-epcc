import _styles from "../styles/activities.module.scss";
import TitleCard from "./cards/TitleCard";

const Activities = () => {
  const actividades = [
    {
      id: "actividad1",
      title: "Programacion Competitiva Universitaria",
      link: "https://www.youtube.com",
      color: "text-myYellow",
    },
    {
      id: "actividad2",
      title: "Programacion Competitiva Escolar",
      link: "https://www.youtube.com",
      color: "text-myGreen2",
    },
    {
      id: "actividad3",
      title: "Robotica Educativa",
      link: "https://www.youtube.com",
      color: "text-myRed",
    },
    {
      id: "actividad4",
      title: "Desarrollo de videojuegos",
      link: "https://www.youtube.com",
      color: "text-myBlue",
    },
  ];

  return (
    <section id="actividades" className={_styles.activities}>
      <h2>Actividades</h2>
      <div className={_styles.container}>
        {actividades.map((activ) => (
          <TitleCard
            id={activ.id}
            color={activ.color}
            title={activ.title}
            link={activ.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Activities;
