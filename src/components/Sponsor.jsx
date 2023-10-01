import { sponsr } from "../constants";
import styles2 from "../styles/sponsor.module.scss";

const Sponsor = () => (
  <section className={`${styles2.sponsors}`}>
    <h2>Sponsors</h2>
    <div className={styles2.container_stats}>
    {sponsr.map((spon) => (
      <div key={spon.id} className={`${styles2.stat_item} m-3`} >
        <img src={spon.logo}/>
      </div>
    ))}
    </div>
  </section>
);

export default Sponsor;