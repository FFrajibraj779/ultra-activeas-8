import React from 'react';
import './Profile.css'
import image from '../image/my-bg.png'
const Profile = () => {
    return (
        <div className='profile-section'>

            <div className="profile-img">
                <img src={image} alt="" />
                <div className='name'>
                    <h3>Md Rajikul Islam</h3>
                    <p><i class="fa-solid fa-graduation-cap"></i>Student</p>

                </div>

            </div>

            <div className="profile-desc">
                <div>
                    <p style={{ fontWeight: 'bold', fontSize: '25px' }}>60 <small className='weight'>kg</small></p>
                    <p className='weight'>Weight</p>
                </div>
                <div>
                    <p style={{ fontWeight: 'bold', fontSize: '25px' }}>6.4 <small className='weight'>fet</small></p>
                    <p className='weight'>Height </p>
                </div>
                <div>
                    <p style={{ fontWeight: 'bold', fontSize: '25px' }}>18 <small className='weight'>yrs</small></p>
                    <p className='weight'>Age</p>
                </div>


            </div>

            <div >
                <h3 className='break-title'>Add A Break</h3>
                <div className='break-time'>
                    <button className='day-btn'>8 day </button>
                    <button className='day-btn'>18 day </button>
                    <button className='day-btn'>21 day </button>
                    <button className='day-btn'>28 day </button>

                </div>

            </div>

            <div>
                <h3 className='break-title'>Working Details</h3>

                <div className='working-details'>
                    <p style={{fontWeight:'600'}}>Working time</p>
                    <p style={{color:'#444', fontWeight:'800'}}>19 days</p>
                </div>
            </div>


            <div>
                <h3 className='break-title'>Break Time </h3>

                <div className='working-details'>
                    <p style={{fontWeight:'600'}}>Break time</p>
                    <p style={{color:'#444', fontWeight:'800'}}>19 days</p>
                </div>
                <div className='btn-done'>

                    <button className='complete-btn'>completed</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;