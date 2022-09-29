import React from 'react';

const SetStorage = (time) => {
   
    let LocalTime = {};

    //get the time cart from local storage
    const StoredTime = localStorage.getItem('setTime');
    if(StoredTime){
        LocalTime = JSON.parse(StoredTime);
    }

    // add time
    const TotalTime = LocalTime[time];
    if(TotalTime){
        const newQuantity = TotalTime + 1;
        LocalTime[time] = newQuantity;
    }
    else{
        LocalTime[time] = 1;
    }
    localStorage.setItem('setTime', JSON.stringify(LocalTime));


};

const getStoredTime =()=>{
    let LocalTime = {};

    // get the time cart from local storage
    const StoredTime = localStorage.getItem('setTime');
    if(StoredTime){
        LocalTime = JSON.parse(StoredTime);
    }

    return LocalTime;

}

export  {SetStorage, getStoredTime};