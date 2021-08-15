import React, { Fragment } from "react";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    {total >= 1 && (
      <ul>
        <h2>Statistics</h2>
        <li>Good:{good}</li>
        <li>Neutral: {neutral} </li>
        <li>Bad: {bad} </li>
        <li>Total:{total}</li>
        <li>Positive feedback:{positivePercentage} %</li>
      </ul>
    )}
  </>
);

export default Statistics;
