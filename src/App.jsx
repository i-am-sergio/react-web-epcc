import styles from "./style";
import "./css/App.css";
import {
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
  <div className="bg-primary w-full overflow-hidden ">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth} flex items-center justify-center text-center`}>
        <Navbar />
      </div>
    </div>

    <Hero />


    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Activities />
        <Cronograma />
        {/* <Billing /> */}
        {/* <CardDeal /> */}
        {/* <Testimonials /> */}
        {/* <Clients /> */}
        <Ponentes />
        <Galeria />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
