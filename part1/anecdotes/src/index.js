import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  const handleClickNext = (len) => {
    const i = Math.floor(Math.random() * len);
    console.log(i);
    setSelected(i);
  };

  const handleClickVote = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  };

  const maxVoteIndex = () => {
    let max = -1;
    let res = 0;
    for (let i = 0; i < votes.length; i++) {
      if (votes[i] > max) {
        max = votes[i];
        res = i;
      }
    }
    return res;
  };

  const mvi = maxVoteIndex();

  return (
    <div>
      <Anecdote text={anecdotes[selected]} votes={votes[selected]}></Anecdote>
      <button onClick={() => handleClickNext(anecdotes.length)}>
        New Quote
      </button>
      <button onClick={handleClickVote}>Vote</button>
      <Anecdote text={anecdotes[mvi]} votes={votes[mvi]}></Anecdote>
    </div>
  );
};

const Anecdote = (props) => {
  const {text, votes} = {...props}
  return (
    <>
      <p>{text}</p>
      <p>has {votes} votes</p>
    </>
  )
}

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
