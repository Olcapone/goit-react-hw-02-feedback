import React, { Fragment } from "react";
import s from "./Statistics.module.css";
import Notification from "../Notification/Notification";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <Fragment>
    <h2 className={s.title}>Statistics</h2>

    {total >= 1 ? (
      <ul className={s.list}>
        <li className={s.items}>
          Good:
          <span className={s.goodStats}>{good}</span>
        </li>
        <li className={s.items}>
          Neutral:
          <span className={s.goodStats}>{neutral}</span>
        </li>
        <li className={s.items}>
          Bad:
          <span className={s.goodStats}>{bad}</span>
        </li>
        <li className={s.items}>
          Total:
          <span className={s.goodStats}>{total}</span>
        </li>
        <li className={s.items}>
          Positive feedback:{" "}
          <span className={positivePercentage > 50 ? s.goodStats : s.badStats}>
            {" "}
            {positivePercentage} %
          </span>
        </li>
      </ul>
    ) : (
      <Notification message="No feedback given"></Notification>
    )}
  </Fragment>
);

export default Statistics;
