
"use client"
import React, { useEffect, useRef, useState } from 'react'
import CountUp, { useCountUp } from 'react-countup';
import FlipNumbers from 'react-flip-numbers';
import { compareAsc, format } from "date-fns";

const CountU = () => {
    const [count, setCount] = useState(new Date())
    useEffect(() => {
        setInterval(() => {
            setCount(new Date())
        }, 1000);
    }, [])
    const dates = [
        new Date(1995, 6, 2),
        new Date(1987, 1, 11),
        new Date(1989, 6, 10),
      ];
    return (
       <>
       <div>
        {format(new Date(2014, 1, 11), "yyyy-MM-dd")}
       </div>
        
        <div className='p-4 flex justify-center items-center  '>
            
            <div className='bg-green-100 p-2 rounded-full '>
                <FlipNumbers height={11} width={11}   nonNumberClassName='text-green-500 font-bold text-xs' numberClassName='text-green-600 font-light text-xs'   duration={1}   play={true} perspective={100} numbers={count.toLocaleTimeString().toString()} />
            </div>
            {/* <div>:</div>
            <div>
                <FlipNumbers height={12} width={12} color="red" background="white" play perspective={100} numbers={count.getMinutes().toString()} />
            </div>
            <div>:</div>
            <div>
                <FlipNumbers height={12} width={12} color="red" background="white" play perspective={100} numbers={count.getSeconds().toString()} />
            </div> */}

        </div>
       </>
    );
}

export default CountU