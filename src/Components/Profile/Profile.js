import React from 'react';
import './Profile.css'
import image from '../image/my-bg.png'
const Profile = () => {
    return (
        <div className='profile-section'>

            <div className="profile-img">
                <img src={image} alt="" />
                <div>
                 <p>Md Rajikul Islam</p>
                 <p>Student</p>

                </div>

            </div>

            <div className="profile-desc">
                <div>
                    <p style={{fontWeight:'bold', fontSize:'30px'}}>60 <small style={{color:'light', fontWeight:'400',fontSize:'18px'}}>kg</small></p>
                    <p>Weight</p>
                </div>
                <div>
                    <p style={{fontWeight:'bold', fontSize:'30px'}}>6.4 <small style={{color:'light', fontWeight:'400',fontSize:'18px'}}>fet</small></p>
                    <p>Height </p>
                </div>
                <div>
                    <p style={{fontWeight:'bold', fontSize:'30px'}}>18 <small style={{color:'light', fontWeight:'400',fontSize:'18px'}}>yrs</small></p>
                    <p>Age</p>
                </div>
              
                
            </div>

            <div>
                <h2>Add A Break</h2>
                <div className='break-time'>
                 <p>8 day </p>
                 <p>18 day </p>
                 <p>21 day </p>
                 <p>28 day </p>

                </div>
                
            </div>

            <div>
                <h2>Working Details</h2>

                <div className='working-details'>
                    <p>Break time</p>
                    <p>19 days</p>
                </div>
            </div>
          

            <div>
                <h2>Break Time </h2>

                <div className='working-details'>
                    <p>Break time</p>
                    <p>19 days</p>
                </div>
                <div className='btn-done'>

            <button className='complete-btn'>completed</button>
                </div>
            </div>
        </div>
    );
};

export default Profile;