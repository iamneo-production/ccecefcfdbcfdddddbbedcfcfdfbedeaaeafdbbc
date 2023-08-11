import React, { useState } from "react";


const Card = (props) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [correct, setCorrect] = useState(false);

    const checkAnswer = () => {
        if (selectedOption === props.answer) {
            setCorrect(true);
            props.correctAnswerMarkUpdate();
        }
        props.attempt();
    }

    return (
        <div className={classes.Card}>
            <h4>{props.question}</h4>
            <div className={classes.OptionsContainer}>
                <button disabled={correct} onClick={() => setSelectedOption(props.options.option1)} className={classes.Option}>{props.options.option1}</button>
                <button disabled={correct} onClick={() => setSelectedOption(props.options.option2)} className={classes.Option}>{props.options.option2}</button>
                <button disabled={correct} onClick={() => setSelectedOption(props.options.option3)} className={classes.Option}>{props.options.option3}</button>
                <button disabled={correct} onClick={() => setSelectedOption(props.options.option4)} className={classes.Option}>{props.options.option4}</button>
            </div>
            {/* <button disabled={selectedOption === null} onClick={checkAnswer} className={classes.CheckButton}>Check</button> */}
        </div>
    );
}

export default Card;