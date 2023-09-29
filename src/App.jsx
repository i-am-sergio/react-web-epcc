// import styles from "./style";
import _styles from "./styles/app.module.scss";
import {
  About,
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Navbar,
  Navbar2,
  Stats,
  Testimonials,
  Hero,
  Activities,
  Cronograma,
  Galeria,
  Ponentes,
} from "./components";

const App = () => (
  <div className={_styles.App}>
    <Navbar2 />
    {/* <Navbar /> */}
    <Hero />
    <Stats />
    <About />
    <Activities />
    <Cronograma />
    <Galeria />
    <CTA />
    <Footer />
  </div>
);

export default App;
