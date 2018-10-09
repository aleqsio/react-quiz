import React from 'react';
import './QuizStart.css';

function QuizStart(props) {
    return (
    <div className="quizstart">
        <h2>{props.subject} quiz</h2>
        <h3>{props.description}</h3>
    </div>
    );
}

export default QuizStart;