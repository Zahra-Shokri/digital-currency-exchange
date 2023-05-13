import React from 'react';

// Styles
import styles from '../styles/Coin.module.css';


const Coin = ({ symbol, name, image, currentPrice, marketCap, priceChangePercentage}) => {
    return(
        <div className={styles.container}>
            <img src={image} alt='Currency Logo' />
            <p> {symbol.toUpperCase()} </p>
            <p> {name} </p>
            <p> {currentPrice.toLocalString()} </p>
            <p> {marketCap} </p>
            <p> {priceChangePercentage.toLocalString()} </p>
        </div>
    );
}

export default Coin;