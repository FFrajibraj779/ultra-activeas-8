import React, { useEffect, useState } from "react";
import Profile from "../Profile/Profile";
import SingleCart from "../SingleCart/SingleCart";
import "./Home.css";

const Home = () => {
  const [carts, setCarts] = useState([]);

  const [timeBtn, setTimeBtn] = useState([]);

  useEffect(() => {
    fetch(`fakedata.json`)
      .then((res) => res.json())
      .then((data) => setCarts(data));
  }, []);

  const handleCardBtn = (cart) => {
    const newTime = [...timeBtn, cart];
    setTimeBtn(newTime);
 
  };

  return (
    <div>
      <div className="home-container ">
        <div className="container">
          <div className="home-info">
            <p> </p>
            <h1>Work With Home</h1>
          </div>
          <div className="career-title">
            <h2>Choice your Career</h2>
          </div>

          <div className="cart-container">
            {carts.map((cart) => (
              <SingleCart
                cart={cart}
                key={cart.id}
                handleCardBtn={handleCardBtn}
              ></SingleCart>
            ))}
          </div>
        </div>

        <div className="description-container">
          <Profile timeBtn={timeBtn} setTimeBtn={setTimeBtn} cart={carts}></Profile>
        </div>
      </div>
    </div>
  );
};

export default Home;
