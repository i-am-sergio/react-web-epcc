import img1 from "../assets/galeria_img1.png";
import img2 from "../assets/galeria_img2.png";
import img3 from "../assets/galeria_img3.png";
import img4 from "../assets/galeria_img4.png";
import img5 from "../assets/galeria_img5.png";
import img6 from "../assets/galeria_img6.png";
import img7 from "../assets/galeria_img7.png";
import img8 from "../assets/galeria_img8.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles, { layout } from "../style";
import arrow1 from "../assets/arrow1.svg";
import arrow2 from "../assets/arrow2.svg";

const Galeria = () => {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
  
    return (
      <section className="skill flex items-center justify-center" id="skills">
          <div className="container">
              <div className="row">
                  <div className="col-12">
                      <div className="skill-bx wow zoomIn">
                          <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item relative h-[260px] group overflow-hidden">
                                <img src={img1} className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-20"/>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <h5 className="text-white">Concepto 3D de nuestro pabellón Alan Turing</h5>
                                </div>
                            </div>
                            <div className="item relative h-[260px] group overflow-hidden">
                                <img src={img2} className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-20"/>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <h5 className="text-white">Pabellón Alan Turing</h5>
                                </div>
                            </div>
                            <div className="item relative h-[260px] group overflow-hidden">
                                <img src={img3} className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-20"/>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <h5 className="text-white">Pabellón Alan Turing</h5>
                                </div>
                            </div>
                            <div className="item relative h-[260px] group overflow-hidden">
                                <img src={img4} className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-20"/>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <h5 className="text-white">Docentes</h5>
                                </div>
                            </div>
                            <div className="item relative h-[260px] group overflow-hidden">
                                <img src={img5} className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-20"/>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <h5 className="text-white">Explorando Realidad Virtual</h5>
                                </div>
                            </div>
                            <div className="item relative h-[260px] group overflow-hidden">
                                <img src={img6} className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-20"/>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <h5 className="text-white">Familia Computer Science</h5>
                                </div>
                            </div>
                            <div className="item relative h-[260px] group overflow-hidden">
                                <img src={img7} className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-20"/>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <h5 className="text-white">Nuestros laboratorios</h5>
                                </div>
                            </div>
                            <div className="item relative h-[260px] group overflow-hidden">
                                <img src={img8} className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-20"/>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <h5 className="text-white">Familia Computer Science</h5>
                                </div>
                            </div>
                            </Carousel>
                      </div>
                  </div>
              </div>
          </div>
          {/* <img className="background-image-left"  alt="Image" /> */}
      </section>
    )
  }
export default Galeria