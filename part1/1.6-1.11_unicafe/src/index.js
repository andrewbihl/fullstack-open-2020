import React, { useState } from "react";
import ReactDOM from "react-dom";



const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incrementCount = (value, setValue) => {
    setValue(value + 1);
  };

  return (
    <>
      <h1>give feedback</h1>
      <Button
        label="Good"
        handleClick={() => incrementCount(good, setGood)}
      ></Button>
      <Button
        label="Neutral"
        handleClick={() => incrementCount(neutral, setNeutral)}
      ></Button>
      <Button
        label="Bad"
        handleClick={() => incrementCount(bad, setBad)}
      ></Button>
      <h1>statistics</h1>
      <Statistics good={good} bad={bad} neutral={neutral}></Statistics>
    </>
  );
};

const Statistics = (props) => {
  const { good, bad, neutral } = { ...props };

  const total = good + bad + neutral;
  if (total === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <>
      <Statistic text="good" value={good}></Statistic>
      <Statistic text="bad" value={bad}></Statistic>
      <Statistic text="neutral" value={neutral}></Statistic>
      <Statistic text="average" value={(good - bad) / (good + bad + neutral)}></Statistic>
      <Statistic text="positive" value={good / (good + bad + neutral)}></Statistic>
    </>
  );
};

const Statistic = (props) => {
  const { text, value } = {...props}
  return <p>{text} {value}</p>
}

const Button = (props) => {
  const { label, handleClick } = { ...props };
  return <button onClick={handleClick}>{label}</button>;
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
