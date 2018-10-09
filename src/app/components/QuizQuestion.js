import React from 'react';

import './QuizQuestion.css';

import Answer from './Answer.js';

const QuizQuestion = (props) => {
        return(
            <div className="quiz-container">
                <h2 className="quiz-problemTitle"><span>#{props.problemID}</span> {props.problemtitle}</h2>
                <h3 className="quiz-problemDescription">{props.problemdescription}</h3>
                <ul className="quiz-answers" onClick={props.handleClick}>
                    <Answer letter="A" answer={props.answers.a}/>
                    <Answer letter="B" answer={props.answers.b}/>
                    <Answer letter="C" answer={props.answers.c}/>
                    <Answer letter="D" answer={props.answers.d}/>
                </ul>
            </div>
        );
}

export default QuizQuestion;