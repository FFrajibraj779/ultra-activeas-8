import React, { useEffect, useState } from 'react';
import Profile from '../Profile/Profile';
import SingleCart from '../SingleCart/SingleCart';
import './Home.css'
import img from '../image/work.jfif'

const Home = () => {
    const [carts, setCarts] = useState([]);
    useEffect(() => {
        fetch(`fakedata.json`)
            .then(res => res.json())
            .then(data => setCarts(data))

    }, [])
    return (
        <div>
           
            <div className='home-container '>

                <div>
                <div className="home-info">
                <img src={img} alt="" />

                <h1>Work With Home</h1>
            </div>
            <div className='career-title'>
                <h2>Selected your Career</h2>
            </div>

                     <div className='cart-container'>
                        
                    {
                        carts.map(cart => <SingleCart cart={cart} key={cart.id}></SingleCart>)
                    }
                     </div>
                </div>

                <div className="descriptio-container">

                    <Profile></Profile>
                </div>

            </div>
        </div>

    );
};

export default Home;