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
                    <p style={{fontWeight:'bold', fontSize:'30px'}}>6 <small style={{color:'light', fontWeight:'400',fontSize:'18px'}}>fet</small></p>
                    <p>Height </p>
                </div>
                <div>
                    <p style={{fontWeight:'bold', fontSize:'30px'}}>18 <small style={{color:'light', fontWeight:'400',fontSize:'18px'}}>yrs</small></p>
                    <p>Age</p>
                </div>
              
                
            </div>
          
        </div>
    );
};

export default Profile;