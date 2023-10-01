import _styles from "../styles/activities.module.scss";
import TitleCard from "./cards/TitleCard";

const Activities = () => {
  const actividades = [
    {
      id: "actividad1",
      title: "Programación Competitiva Universitaria",
      color: "text-myYellow",
    },
    {
      id: "actividad2",
      title: "Programación Competitiva Escolar",
      link: "https://drive.google.com/file/d/1YqrFjAP4x7kSZtcKHR4-l3bhK51R6oqk/view?usp=sharing",
      color: "text-myGreen2",
    },
    {
      id: "actividad3",
      title: "E-Sports",
      color: "text-myRed",
    },
    {
      id: "actividad4",
      title: "TALLER\nComputación Afectiva",
      color: "text-myBlue",
    },
    {
      id: "actividad5",
      title: "TALLER\nPensamiento Computacional",
      color: "text-myYellow",
    },
    {
      id: "actividad6",
      title: "TALLER\nNVIDIA: Fundamentos de Deep Learning",
      color: "text-myGreen2",
    },
  ];

  return (
    <section id="actividades" className={_styles.activities}>
      <h2>Actividades</h2>
      <div className={_styles.container}>
        {actividades.map((activ) => (
          <TitleCard
          key={activ.id}
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
