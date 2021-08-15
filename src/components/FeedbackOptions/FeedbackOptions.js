import React from "react";
import s from "./FeedbackOptions.module.css";

const FeedbackOptions = ({ options }) => {
  const { clickGood, clickNeutral, clickBad } = options;

  return (
    <ul className={s.list}>
      <li className={s.item}>
        <button className={s.button} onClick={clickGood}>
          Good
        </button>
      </li>
      <li className={s.item}>
        <button className={s.button} onClick={clickNeutral}>
          Neutral
        </button>
      </li>
      <li className={s.item}>
        <button className={s.button} onClick={clickBad}>
          Bad
        </button>
      </li>
    </ul>
  );
};
export default FeedbackOptions;
