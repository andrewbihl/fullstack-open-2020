import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header courseName={course}/>
      <Content parts={[part1, part2, part3]} />
      <Total exerciseCount={part1.exercises + part2.exercises + part3.exercises} />
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
        <Part name={pt.name} exerciseCount={pt.exercises} />
      ))
    }
    </div>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exerciseCount}
    </p>
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
