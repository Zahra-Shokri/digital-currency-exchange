import React from 'react';

// Styles
import styles from '../styles/Coin.module.css';


const Coin = ({ symbol, name, image, currentPrice, marketCap, priceChangePercentage}) => {
    return(
        <div className={styles.container}>
            <div className={styles.logo_Name}>
                <img className={styles.image} src={image} alt='Currency Logo' />
                <p className={styles.name}> {name} </p>
            </div>

            <p className={styles.symbol}> {symbol.toUpperCase()} </p>
            <p> $ {currentPrice.toLocaleString()} </p>
            <p className={(priceChangePercentage > 0)? styles.incPrice : styles.decPrice}> {priceChangePercentage} % </p>
            <p> $ {marketCap.toLocaleString()} </p>
        </div>
    );
}

export default Coin;