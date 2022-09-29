import React from "react";
import "./SingleCart.css";

const SingleCart = ({ cart, handleCardBtn }) => {
  const { img, name, time, description } = cart;

  return (
    <div className="card ">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p style={{ marginBottom: "10px", padding: "4px" }}>
          {description.slice(0, 60)}
        </p>
        <p className="time">Time required: {time} year</p>
        <div>
          <button onClick={() => handleCardBtn(cart)} className=" my-btn">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleCart;
