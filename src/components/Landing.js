import React, { useEffect, useState } from 'react';

// Functions
import { getAPI } from '../services/api';

const Landing = () => {
    const [coins, setCoins] = useState({});

    useEffect(() => {
        const fetchAPI = async() => {
            const data = await getAPI();
            setCoins(data);
            console.log(data);
        }

        fetchAPI();
    }, [])

    return(
        <>
            
        </>
    );
}

export default Landing;