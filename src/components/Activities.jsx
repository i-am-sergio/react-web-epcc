import React from "react";
import styles from "../style";
import "../css/activities.css";
import { VscSourceControl } from "react-icons/vsc";

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
    <section
      id="activities"
      className={`my-10`}
      // className={`flex md:flex-row flex-col ${styles.paddingY} mt-20`}
    >
      <div className="">
        <h1 className="text-5xl text-center py-10 font-bold text-white">
          Actividades
        </h1>
      </div>
      <div className="max-w-[1320px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-6 px-[20px] bg-transparent">
        {actividades.map((activ) => (
          <div
            key={activ.id}
            className="shadow-lg overflow-hidden text-center justify-center border-solid bg-transparent border-l-2 border-b-8 rounded-[30px] border-t-2 border-r-8 border-myGreen"
            // overflow-hidden
          >
            <div className="overflow-hidden flex justify-center items-center hover:scale-125 duration-1000 rounded-md">
              <VscSourceControl className={`${activ.color} text-8xl my-20`} />
            </div>
            <h3 className="py-2 text-2xl text-center text-myGreen px-6 min-h-[120px] flex items-center justify-center">
              {activ.title}
            </h3>
            <p className="py-4 pb-6 text-white hover:scale-125 duration-1000">
              <a
                href={activ.link}
                target="blank"
                className="text-white underline hover:text-myGreen"
              >
                Bases Del concurso
              </a>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Activities;
