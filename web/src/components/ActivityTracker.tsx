"use client"

import React, { useEffect, useRef } from 'react';

const ActivityTracker: React.FC = () => {
    const startTimeRef = useRef<number>(Date.now());
    const endTimeRef = useRef<number>(0);
    const startDate = useRef<Date>(new Date());
    useEffect(() => {
        const handleVisibilityChange = () => {
            const url = window.location.href;
            if (document.visibilityState === 'visible') {
                startTimeRef.current = Date.now();
                startDate.current = new Date();
            } else {
                endTimeRef.current = Date.now();
                const visibilityTime = (endTimeRef.current - startTimeRef.current) / 1000; // in seconds
                fetch('/api/logbook', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        startTime: startDate.current,
                        timeZoneOffset: startDate.current.getTimezoneOffset(), // in minutes
                        url: window.location.href,
                        activeDuration: visibilityTime,
                    }),
                });
            }
        };
        document.addEventListener('visibilitychange', handleVisibilityChange);
        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);

        };
    }, []);

    return <div />;
};

export default ActivityTracker;
