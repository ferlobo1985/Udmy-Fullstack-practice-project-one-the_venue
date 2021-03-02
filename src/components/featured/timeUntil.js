import React,{ useState,useEffect,useCallback } from 'react';
import { Slide } from 'react-awesome-reveal';

const TimeUntil = () => {


    const renderItem = (time,value) => (
        <div className="countdown_item">
            <div className="countdown_time">
                {time}
            </div>
            <div className="countdown_tag">
                {value}
            </div>
        </div>
    )

    const getTimeUntil = (deadline) => {
        const time = Date.parse(deadline) - Date.parse(new Date());
        if(time < 0){
            console.log('Date passed')
        } else{
            
        }   


    }


    useEffect(()=>{
        setInterval(()=> getTimeUntil('Jan, 20, 2021, 01:20:00'),1000)
    },[getTimeUntil])


    return(
        <Slide left delay={1000}>
            <div className="countdown_wrapper">
                <div className="countdown_top">
                    Event starts in
                </div>
                <div className="countdown_bottom">
                    {renderItem(27,'Days')}
                    {renderItem(4,'HS')}
                    {renderItem(10,'Min')}
                    {renderItem(50,'Sec')}



                </div>
            </div>
        </Slide>
    )

}

export default TimeUntil;