import React, { useState, useEffect } from 'react';

const Cronograma = () => {
  const [fechaSeleccionada, setFechaSeleccionada] = useState(null);
  const [actividades, setActividades] = useState([
    {
      fecha: '2023-09-26',
      eventos: [
        {
          hora: '09:00',
          titulo: 'Reunión',
          descripcion: 'Reunión de equipo',
          ponente: 'Juan Pérez',
        },
        {
          hora: '10:30',
          titulo: 'Presentación',
          descripcion: 'Presentación de proyecto',
          ponente: 'María González',
        },
      ],
    },
    {
      fecha: '2023-09-27',
      eventos: [
        {
          hora: '14:00',
          titulo: 'Entrevista',
          descripcion: 'Entrevista con candidato',
          ponente: 'Luis Rodríguez',
        },
        {
          hora: '16:30',
          titulo: 'Capacitación',
          descripcion: 'Capacitación de empleados',
          ponente: 'Ana Martínez',
        },
      ],
    },
    {
      fecha: '2023-09-28',
      eventos: [
        {
          hora: '11:30',
          titulo: 'Conferencia',
          descripcion: 'Conferencia sobre tecnología',
          ponente: 'Carlos Sánchez',
        },
        {
          hora: '15:00',
          titulo: 'Taller',
          descripcion: 'Taller de diseño gráfico',
          ponente: 'Elena López',
        },
      ],
    },
  ]);

  useEffect(() => {
    const cargarActividades = () => {

    };

    cargarActividades();
  }, [fechaSeleccionada]);

  const seleccionarFecha = (fecha) => {
    setFechaSeleccionada(fecha);
  };

  return (
    <section id="cronograma" className={`my-10 bg-gray-400 h-400`}>
      <h2>
        Cronograma
      </h2>
      <div className="container">
        <div className="barra-botones">
          {actividades.map((actividad) => (
            <button key={actividad.fecha} onClick={() => seleccionarFecha(actividad.fecha)}>
              {actividad.fecha} |
            </button>
          ))}
        </div>
        <div className="lista-actividades">
        {fechaSeleccionada &&
          actividades
            .filter((actividad) => actividad.fecha === fechaSeleccionada)
            .map((actividad) => (
              <div key={actividad.fecha}>
                <h3>{actividad.fecha}</h3>
                <ul>
                  {actividad.eventos.map((evento, index) => (
                    <li key={index}>
                      <span className="hora">{evento.hora}</span>
                      <span className="titulo">{evento.titulo}</span>
                      <span className="descripcion">{evento.descripcion}</span>
                      <span className="ponente">Ponente: {evento.ponente}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
      </div>
    </div>
    </section>
  );
};

export default Cronograma;
