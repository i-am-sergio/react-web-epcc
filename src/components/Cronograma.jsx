import React, { useState, useEffect } from 'react';
import _styles from "../styles/cronograma.module.scss";

const Cronograma = ({_actividades, _color_label_event}) => {
  const [actividades, setActividades] = useState(_actividades);
  const [fechaSeleccionada, setFechaSeleccionada] = useState(_actividades[0].fecha);

  useEffect(() => {
    const cargarActividades = () => {

    };

    cargarActividades();
  }, [fechaSeleccionada]);

  const seleccionarFecha = (fecha) => {
    setFechaSeleccionada(fecha);
  };

  return (
    <section id="cronograma" className={_styles.cronograma}>
      <h2>
        Cronograma
      </h2>
      <div className= {_styles.container}>
        <div className={_styles.barra_botones}>
          {actividades.map((actividad) => (
            <button 
              key={actividad.fecha} 
              onClick={() => seleccionarFecha(actividad.fecha)}
              className={fechaSeleccionada === actividad.fecha ? _styles.button_focus : ''}
            >
              <h3>{actividad.fecha}</h3>
              <hr/>
            </button>
          ))}
        </div>
        <div className ={_styles.lista_actividades}>
        {fechaSeleccionada &&
          actividades
            .filter((actividad) => actividad.fecha === fechaSeleccionada)
            .map((actividad) => (
                <ul key={actividad.fecha}>
                  {actividad.eventos.map((evento, index) => (
                    <li key={index}>
                      <span className= {_styles.hora}>{evento.hora}</span>
                      <span 
                        className= {_styles.tipo}
                        style={{backgroundColor:_color_label_event[evento.tipo]}}
                      >{evento.tipo}</span>
                      { ( evento.titulo || evento.ponente ) ?
                        <div className= {_styles.info}>
                          <span className= {_styles.titulo}><h4>{evento.titulo}</h4></span>
                          <span className= {_styles.descripcion}>{evento.descripcion}</span>
                          {evento.ponente && (
                            <span className="_styles.ponente">
                              {evento.ponente.split('\n').map((line, i) => (
                                <div key={i}>{line}</div>
                              ))}
                            </span>
                          )}
                        </div>
                        : null
                      }
                    </li>
                  ))}
                </ul>
            ))}
      </div>
    </div>
    </section>
  );
};

export default Cronograma;
