import React from "react";



const ScoreCard = props => (
    <div className="score-card container">
        <span>
            <h4 className="font-italic">{props.message}</h4>
            <h5>
                Total Score : {props.score} |
                Top Score : {props.topScore}
            </h5>
        </span>
    </div>
);

export default ScoreCard;