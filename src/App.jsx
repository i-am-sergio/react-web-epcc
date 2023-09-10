import styles from "./style";
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
    <Hero />

    <Stats />
    <About />
    <Activities />
    
    <Ponentes />
    <Galeria />
    <CTA />
    <Footer />

  </div>
);

export default App;
