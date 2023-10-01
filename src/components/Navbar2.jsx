import { useRef, useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { logoeditado1 } from "../assets";
import "../css/navbar2.css";

function Navbar2() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const [navbarStyle, setNavbarStyle] = useState({
    backgroundColor: "#171c3093",
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const navbarOpacity = Math.min(scrollY / 300, 1); // Ajusta 300 según tu diseño

      // Cambia el estilo del navbar según la opacidad
      setNavbarStyle({
        backgroundColor: `rgba(23, 28, 48, ${navbarOpacity})`,
        transition: "background-color 0.3s ease", // Opcional: agrega una transición suave
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="nav">
      <header style={navbarStyle}>
        <h3>
          <img src={logoeditado1} alt="EPCC" className="h-[20px] logocs" />
        </h3>
        <nav ref={navRef}>
          <a href="#" className="font-poppins" onClick={showNavbar}>
            Inicio
          </a>
          <a href="#about" className="font-poppins" onClick={showNavbar}>
            Sobre
          </a>
          <a href="#actividades" className="font-poppins" onClick={showNavbar}>
            Actividades
          </a>
          <a href="#cronograma" className="font-poppins" onClick={showNavbar}>
            Cronograma
          </a>
          <a href="#ubicacion" className="font-poppins" onClick={showNavbar}>
            Ubicación
          </a>
          <a href="" target="blank"  className="font-poppins" id="btn-inscripcion" onClick={showNavbar}>
            Inscríbete
          </a>
          <button
            className="nav-btn nav-close-btn third-element"
            onClick={showNavbar}
          >
            <FaTimes />
          </button>
        </nav>
        <button
          className="nav-btn third-element showToggle"
          onClick={showNavbar}
        >
          <FaBars />
        </button>
      </header>
    </div>
  );
}

export default Navbar2;
