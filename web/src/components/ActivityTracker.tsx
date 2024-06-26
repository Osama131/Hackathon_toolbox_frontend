"use client"

import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

/**
 * 
 * @note Only wokrs with pages router. change the router import location if app router is required.
 */
const ActivityTracker: React.FC = () => {
    const startTimeRef = useRef<number>(Date.now());
    const endTimeRef = useRef<number>(0);
    const startDate = useRef<Date>(new Date());
    const router = useRouter();


    const handleVisibilityChange = (trigger: 'visibility' | 'routing') => {
        const url = window.location.href;

        if (document.visibilityState === 'visible' && trigger === 'visibility') {
            startTimeRef.current = Date.now();
            startDate.current = new Date();
        } else {
            endTimeRef.current = Date.now();
            const visibilityTime = (endTimeRef.current - startTimeRef.current) / 1000; // in seconds

            const activity = {
                timeStamp: startDate.current,
                timeZoneOffset: startDate.current.getTimezoneOffset(),
                url: url,
                activeDuration: visibilityTime,
                trigger: trigger
            };

            // TODO: question: Do I need to add hack-participant-kit or process.env.BASE_PATH to the trackerAPI??
            const trackerAPI = `/hack-participant-kit/api/logbook/`; // Assign the value using the assignment operator
            const body = JSON.stringify(activity);

            if (navigator.sendBeacon) {
                navigator.sendBeacon(trackerAPI, body);
            } else {
                fetch(trackerAPI, {
                    body: body,
                    method: 'POST',
                    keepalive: true
                });

            }
        }
    };

    const visibilityChangeHandler = () => {
        handleVisibilityChange('visibility');
    }

    const routingChangeHandler = () => {
        handleVisibilityChange('routing');
    }

    useEffect(() => {
        document.addEventListener('visibilitychange', visibilityChangeHandler);
        // document.addEventListener('beforeunload', handleVisibilityChange);
        router.events.on('routeChangeStart', routingChangeHandler);
        // router.events.on('routeChangeComplete', routingChangeHandler);

        return () => {
            document.removeEventListener('visibilitychange', visibilityChangeHandler);
            // document.removeEventListener('beforeunload',  handleVisibilityChange);
            router.events.off('routeChangeStart', routingChangeHandler);
            // router.events.off('routeChangeComplete', routingChangeHandler);
        };
    }, []);


    return <div />;
};

export default ActivityTracker;
