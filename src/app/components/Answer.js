import React from 'react';

const Answer = (props) => {
    return(

    <li>
        <button><span>{props.letter}.</span>{props.answer}</button>
    </li>
    );
}

export default Answer;