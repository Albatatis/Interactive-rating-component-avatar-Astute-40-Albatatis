import React from "react";
import thank from '../../utils/images/illustration-thank-you.svg'
import './thanks.css'

export default function Thanks({finalRating}) {
    return (
        <div className="thank-container">
            <img src={thank} />
            <p className="rating-count">You selected {finalRating} out of 5</p>
            <h2>Thank You!</h2>
            <p className="summary">
                We appreciate you taking the time to give a rating. If you need more support, don't hesitate to get in touch
            </p>
        </div>
    )
}