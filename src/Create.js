import React, { Component, useState } from 'react';
import './App.css';
import { Data } from './QuestionHistGeo';
import App from './App';
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom';


export default function Play() {
  const [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(Data[index]);
  const [loc, setLoc] = useState(true);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(true);
 

  const homeclick = () => {
    setIndex(0);
    setQuestion(Data[0]);
    setLoc(true);
    setScore(0);
    setResult(true);

    // Reset the class names
    document.querySelectorAll('.sol').forEach(el => {
      el.classList.remove('correct', 'wrong');
    });
  };

  const handleclick = () => {
    if (index < Data.length - 1) {
      setIndex(index + 1);
      setQuestion(Data[index + 1]);
      setLoc(true);

      // Reset the class names
      document.querySelectorAll('.sol').forEach(el => {
        el.classList.remove('correct', 'wrong');
      });
    } else {
      setResult(false);
    }
    
  };
  
    

  const checkAns = (e, ansIndex) => {
    if (loc) {
      if (question.correctAnswers === ansIndex) {
        e.target.classList.add("correct");
        setScore(score + 1);
      } else {
        e.target.classList.add("wrong");
      }
      setLoc(false);
    }
  };
  
  return (

    
    <>
      {result ? (
        
        <div className="question" >
          <h2>{question.Question}</h2>
          <hr />
          <ul className='options'>
            {question.option.map((opt, idx) => (
              <a 
                key={idx} 
                className='sol' 
                onClick={(e) => checkAns(e,opt)}>
                {opt}
              </a>
            ))}
          </ul>
          <button onClick={handleclick}>Next</button>
        </div>
      ) : (
        <div className="result">
          <h2>Quiz Completed!</h2>
          <p>Your score: {score}</p>
          
          <button className='back' onClick={homeclick}>Back</button>
        
        </div>
      )}
    </>
  );
}
