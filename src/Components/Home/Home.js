import React, { useEffect, useState } from 'react';
import Profile from '../Profile/Profile';
import SingleCart from '../SingleCart/SingleCart';
import './Home.css'

const Home = () => {
    const[carts, setCarts]=useState([]);
    useEffect(()=>{
        fetch(`fakedata.json`)
        .then(res=>res.json())
        .then(data =>setCarts(data))
      
    },[])
    return (
        <div>
             <div className="hom-img">
                    
                    <h1 className='text-5xl font-bold'>Work With Home</h1>
                </div>
                <div className='home-container '>

            <div className="cart-container">
               
            
            {
            carts.map(cart =><SingleCart cart={cart} key={cart.id}></SingleCart>)
            }
            </div>

            <div className="descriptio-container">

                 <Profile></Profile>
            </div>
           
        </div>
        </div>
        
    );
};

export default Home;