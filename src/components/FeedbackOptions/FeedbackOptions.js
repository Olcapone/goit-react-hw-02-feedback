import React from "react";

const FeedbackOptions = ({ options }) => {
  const { clickGood, clickNeutral, clickBad } = options;

  return (
    <ul>
      <li>
        <button onClick={clickGood}>Good</button>
      </li>
      <li>
        <button onClick={clickNeutral}>Neutral</button>
      </li>
      <li>
        <button onClick={clickBad}>Bad</button>
      </li>
    </ul>
  );
};

export default FeedbackOptions;
