
import './Profile.css'
import image from '../image/my-bg.png'
import { useEffect, useState } from 'react';
import { SetStorage, getStoredTime } from '../SetStorage/SetStorage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Profile = ({ timeBtn }) => {
    const notify = () => toast("Wow so easy!");
    const [dayBtn, setDayBtn] = useState([])

    // console.log(timeBtn);
    let prevTime = 0;
    for (const times of timeBtn) {
        prevTime = prevTime + times.time
        //  time=time+ time.time
    }
    console.log(dayBtn);

    useEffect(() => {
        let storedTime = getStoredTime()
        console.log(storedTime);

        const saveTime = [];

        for (const time in storedTime) {


            const addedPoduct = dayBtn.find(product => product.time === time)
            console.log(addedPoduct);
            if (addedPoduct) {
                const quantity = storedTime[time];
                addedPoduct.quantity = quantity;
                //    console.log(addedPoduct);
                saveTime.push(addedPoduct);
                //    console.log(addedPoduct);
            }
            setDayBtn(saveTime);
        }

    }, [])

    const handleBreakTime = (day) => {
        const newday = day;
        setDayBtn(newday)

        SetStorage(newday)

    }

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
                    <button onClick={() => handleBreakTime(8)} className='day-btn'> 8 <span>day</span>  </button>
                    <button onClick={() => handleBreakTime(18)} className='day-btn'>18  <span>day</span> </button>
                    <button onClick={() => handleBreakTime(21)} className='day-btn'>21  <span>day</span> </button>
                    <button onClick={() => handleBreakTime(28)} className='day-btn'>28  <span>day</span> </button>

                </div>

            </div>

            <div>
                <h3 className='break-title'>Working Details</h3>

                <div className='working-details'>
                    <p style={{ fontWeight: '600' }}>Working time</p>
                    <p style={{ color: '#444', fontWeight: '800' }}> <span>{prevTime}</span> days</p>
                </div>
            </div>


            <div>
                <h3 className='break-title'>Break Time </h3>

                <div className='working-details'>
                    <p style={{ fontWeight: '600' }}>Break time</p>
                    <p style={{ color: '#444', fontWeight: '800' }}> <span>{dayBtn}</span> days</p>
                </div>
                <div className='btn-done'>
                <div>
        <button onClick={notify} className='complete-btn'>completed!</button>
        <ToastContainer />
      </div>

                </div>
            </div>
        </div>
    );
};

export default Profile;