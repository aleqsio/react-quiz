import React from 'react';
import './QuizHeader.css';

const QuizHeader = (props) => {
    return(
        <div className="quiz-header">
              <button><i className="fas fa-times-circle exit"></i></button>
            </div>
    );
}

export default QuizHeader;