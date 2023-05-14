import React from 'react';

// Gif
import spinner from '../gif/spinner.gif'


const Loader = () => {
    const loading = { color: 'rgb(85, 85, 85)' };
    const container = { display: 'flex', alignItems: 'center', flexDirection: 'column' };
    
    return (
        <div style={container}>
            <img src={spinner} alt='Loading' />
            <h2 style={loading}>Loading ...</h2>
        </div>
    );
};

export default Loader;