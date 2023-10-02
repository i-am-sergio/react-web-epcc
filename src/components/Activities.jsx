import _styles from "../styles/activities.module.scss";
import TitleCard from "./cards/TitleCard";

const Activities = () => {
  const actividades = [
    {
      id: "actividad1",
      title: "Programación Competitiva Universitaria",
      link: "https://drive.google.com/file/d/1dUFqLkdCeLJx6vkN0BG6eaGgUV_ZKTiJ/view?usp=drive_link",
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
      link: "https://chat.whatsapp.com/GcMMPGQPPbP0dTMGy9qc43",
      color: "text-myRed",
    },
    {
      id: "actividad4",
      title: "TALLER\nComputación Afectiva",
      color: "text-myRed2",
    },
    {
      id: "actividad5",
      title: "TALLER\nPensamiento Computacional",
      color: "text-myBlue",
    },
    {
      id: "actividad6",
      title: "TALLER\nNVIDIA: Fundamentos de Deep Learning",
      color: "text-myMagenta",
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
