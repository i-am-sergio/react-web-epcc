// import styles from "./style";
import _styles from "./styles/app.module.scss";
import {data_color_label_event, data_actividades} from "./data/cronograma";
import {
  About,
  CTA,
  Footer,
  Navbar2,
  Stats,
  Hero,
  Activities,
  Cronograma,
  Galeria,
  Ponentes,
  Sponsor,
} from "./components";

const App = () => (
  <div className={_styles.App}>
    <Navbar2 />
    <Hero />
    <Stats />
    <About />
    <Activities />
    <Cronograma _actividades={data_actividades} _color_label_event={data_color_label_event} />
    <Galeria />
    <CTA />
    <Sponsor />
    <Footer />
  </div>
);

export default App;
