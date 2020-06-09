import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header courseName={course}/>
      <Content parts={[[part1, exercises1], [part2, exercises2], [part3, exercises3]]} />
      <Total exerciseCount={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

const Header = (props) => {
  return (
    <h1>{props.courseName}</h1>
  )
}

const Content = (props) => {
  return (
    <div>
    {
      props.parts.map(pt => (
        <p>
          {pt[0]} {pt[1]}
        </p>
      ))
    }
    </div>
  )
}

function Total(props) {
  return (
  <p>Number of exercises {props.exerciseCount}</p>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
