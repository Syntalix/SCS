"use client"

import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const CounterComp = ({ end }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div ref={ref}>
            {inView ? <CountUp start={10} end={end} duration={10} /> : 0}
        </div>
    );
};

export default CounterComp;