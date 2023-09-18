import { stats } from "../constants";
import styles2 from "../styles/stats.module.scss";

const Stats = () => (
  <section className={`${styles2.container_stats}`}>
    {stats.map((stat) => (
      <div key={stat.id} className={`${styles2.stat_item} m-3`} >
        <h4>{stat.value}</h4>
        <p className={window.innerWidth < 768 ? "break-word" : ""}>{stat.title}</p>
      </div>
    ))}
  </section>
);

export default Stats;
