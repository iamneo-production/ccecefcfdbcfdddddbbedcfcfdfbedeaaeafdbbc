import React, { useState } from "react";

const Card = (props) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const checkAnswer = () => {
        if (selectedOption === props.answer) {
            props.correctAnswerMarkUpdate();
        }
        props.attempt();
    }

    return (
        <div className="Card">
            <h4>{props.question}</h4>
            <div className="OptionsContainer">
                <button
                  disabled={selectedOption !== null}
                  onClick={() => setSelectedOption(props.options.option1)}
                  className="Option"
                >
                  {props.options.option1}
                </button>
                {/* Repeat for other options */}
            </div>
        </div>
    );
}

export default Card;
