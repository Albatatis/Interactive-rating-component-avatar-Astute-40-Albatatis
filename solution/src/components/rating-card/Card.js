import React, { useState } from "react";
import './card.css'
import svg from "../svg";
import Thanks from "../thankYou-card/Thanks";

export default function Card({handleSubmit}) {

    const [rating, setRating] = useState(null)
    const count = 4
    const handleClick = (index) => {
       setRating(index + 1)
    }


    return (
        <div className="card-container">
            <div className="svg-container">
                <span className="svg">{svg}</span>
            </div>
            <h3>
                How did we do?
            </h3>
            <p>
                Please let us know how did we do with your support request. All feedbacks are appreciated to help us impove our offering.
            </p>
            <div className="ratings">
                {Array(5).fill(true).map((item, index) => {
                    return (
                        <button onClick={() => handleClick(index)} key={index} className="rating-number">{index + 1}</button>
                    )
                })}
            </div>
           
            {/* <ul className="ratings">
                <li className="rating-number">1</li>
                <li className="rating-number">2</li>
                <li className="rating-number">3</li>
                <li className="rating-number">4</li>
                <li className="rating-number">5</li>
            </ul> */}
            <button onClick={() => handleSubmit(rating)} className="submit">
                Submit
            </button>
        </div>
    )
}