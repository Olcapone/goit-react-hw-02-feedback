import s from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <ul className={s.list}>
    <h2 className={s.title}>Statistics</h2>
    <li className={s.items}>Good:{good}</li>
    <li className={s.items}>Neutral: {neutral} </li>
    <li className={s.items}>Bad: {bad} </li>
    <li className={s.items}>Total:{total}</li>
    <li className={s.items}>
      Positive feedback:{" "}
      <span className={positivePercentage > 50 ? s.goodStats : s.badStats}>
        {" "}
        {positivePercentage} %
      </span>
    </li>
  </ul>
);

export default Statistics;
