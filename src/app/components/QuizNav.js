import React from 'react';
import './QuizNav.css';

const QuizNav = (props) => {
    return(
    <div className="quiz-navigation" onClick={props.onClick}>
        {props.backButton}
        {props.nextButton}
    </div>
    );
}

export default QuizNav;