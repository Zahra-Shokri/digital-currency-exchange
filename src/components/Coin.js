import React from 'react';

// Styles
import styles from '../styles/Coin.module.css';


const Coin = ({ symbol, name, image, currentPrice, marketCap, priceChangePercentage}) => {
    return(
        <div className={styles.container}>
            <img src={image} alt='Currency Logo' />
            <p> {name} </p>
            <p> {symbol.toUpperCase()} </p>
            <p> $ {currentPrice.toLocaleString()} </p>
            <p> {priceChangePercentage} </p>
            <p> {marketCap.toLocaleString()} </p>
        </div>
    );
}

export default Coin;