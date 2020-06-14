import React from "react";
import ReactDOM from "react-dom";
import Course from "./components/course"

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
        },
        {
          name: "State of a component",
          exercises: 14,
        },
      ],
    },
    {
      name: "CPR Training",
      parts: [
        {
          name: "Handling the situation",
          exercises: 6,
        },
        {
          name: "Compressions and breaths",
          exercises: 4,
        },
        {
          name: "Children and infants",
          exercises: 3,
        },
      ],
    },
  ];

  return (
    <div>
      {courses.map(c => <Course course={c} key={c.name} />)} 
    </div>
  );
};


ReactDOM.render(<App />, document.getElementById("root"));
