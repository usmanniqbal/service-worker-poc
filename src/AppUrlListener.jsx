import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Plugins } from '@capacitor/core';
const { App: CapApp } = Plugins;

const AppUrlListener = () => {
    console.log('Into AppUrlListener');
    let history = useHistory();
    useEffect(() => {
        CapApp.addListener('appUrlOpen', (data) => {
            console.log('Into appUrlOpen');
            // Example url: https://beerswift.app/tabs/tab2
            // slug = /tabs/tab2
            const slug = data.url.split('.io').pop();
            if (slug) {
                console.log(`Into appUrlOpen: pushing ${slug}`);
                history.push(slug);
            }
            // If no match, do nothing - let regular routing
            // logic take over
        });
    }, []);

    return null;
};

export default AppUrlListener;