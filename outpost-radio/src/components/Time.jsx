import React, { useState,useEffect } from 'react';
import styled from 'styled-components';





const Time = () => {
    
    const [time, updatetime] = useState({
        year: '',
        month:'',
        day: '',
        hour: '',
        minute: '',
        second: '',
        greeting: ''
    });
    
    useEffect(() => {
        const showTime = () => {
            let today = new Date();
            let year = today.getFullYear() + 930;
            let month = today.getMonth();
            let day = today.getUTCDate();
            let hour = today.getHours();
            let minutes = today.getMinutes();
            let seconds = today.getSeconds();
            let greeting = '';
            
            if(hour < 12) {
                greeting = "Good Morning, Citizen."
            }else if(hour < 18) {
                greeting = "Good Afternoon, Citizen."
            }else {
                greeting = "Good Evening, Citizen."
            }
    
            updatetime({
                year: year,
                month: month,
                day: day,
                hour: hour,
                minutes: minutes,
                seconds: seconds,
                greeting:greeting
            })
            
            setTimeout(showTime,1000);
            
        }

        const showGreeting = () => {
            
        }
        showGreeting();
        showTime();

    },[])

    const TimeWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: rgba(255,255,255, .9);
    font-family: 'Odibee Sans', cursive;
    `
    const DateWrap = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 20%;
    `
    const CurrentTime = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 20%;
    `
    const Greeting = styled.h5`
    font-family: 'Roboto Slab', serif;
    font-size: 1.1em;
    letter-spacing: .1em;
    `

    const addZero = (num) => {
        return(parseInt(num, 10) < 10 ? '0': '') + num;
        
    }
    return (
        <TimeWrap>
            <DateWrap>
                <p>{addZero(time.month)}</p>
                <p>-</p>
                <p>{addZero(time.day)}</p>
                <p>-</p>
                <p>{time.year}</p>
            </DateWrap>
            <Greeting>{time.greeting}</Greeting>
            
            <CurrentTime>
            
                <p>{addZero(time.hour)} </p>
                <p>:</p>
                <p>{addZero(time.minutes)}</p>
                <p>:</p>
                <p>{addZero(time.seconds)}</p>
            </CurrentTime>

            
        </TimeWrap>
    );
}

export default Time;