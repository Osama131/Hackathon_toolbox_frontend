"use client"

import React, { useEffect, useRef } from 'react';

interface TrackingData {
    [uuid: string]: {
        [url: string]: number[][];
    };
}

const ActivityTracker: React.FC = () => {
    const startTimeRef = useRef<number>(Date.now());
    const endTimeRef = useRef<number>(0);
    const trackingDataRef = useRef<TrackingData>({});

    useEffect(() => {
        const handleVisibilityChange = () => {
            const url = window.location.href;
            console.log(`[`);
            console.log(`Visibility State: ${document.visibilityState}, URL: ${url}`);
            if (document.visibilityState === 'visible') {
                startTimeRef.current = Date.now();
                // console.log(`Visibility Start: ${startTimeRef.current}, URL: ${url}`);
            } else {
                endTimeRef.current = Date.now();
                // console.log(`Visibility End: ${startTimeRef.current}, URL: ${url}`);
                const visibilityTime = (endTimeRef.current - startTimeRef.current)/1000;
                console.log(`Visibility Duration: ${visibilityTime}s, URL: ${url}`);
                // trackingDataRef.current.durations.push([visibilityTime]); 
                // store the data in local storage
            fetch('/api/logbook', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    duration: visibilityTime,
                    date : startTimeRef,
                    url: window.location.href,
                }),
            });
            }
            console.log(']')

        };
        document.addEventListener('visibilitychange', handleVisibilityChange);
        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);

        };
    }, []);

    return <div />;
};

export default ActivityTracker;
