import React from "react";
import star from "../assets/images/star.png";

export default function Card(props) {
  return (
    <div className="card-container">
      <div className="availability">
        {(props.data.openSpots > 0 && <p>Available</p>) ||
          (props.data.openSpots === 0 && <p>Sold Out</p>)}
      </div>
      <img src={props.data.coverImg} alt="card photo" className="cardPhoto" />
      <div className="rating">
        <img src={star} alt="star" />
        <p>
          {props.data.stats.rating}
          <span className="review-count">
            ({props.data.stats.reviewCount}) &#8226; {props.data.location}
          </span>
        </p>
      </div>
      <h2 className="card-headline">{props.data.title}</h2>
      <p className="price">
        <b>From ${props.data.price}</b> / person
      </p>
    </div>
  );
}
