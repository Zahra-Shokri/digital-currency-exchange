import React, { useEffect, useState } from 'react';

// Components
import Coin from './Coin';

// API
import { getAPI } from '../services/api';

// Gifs
import snipperGif from '../gif/spinner.gif';

// Styles
import styles from '../styles/Landing.module.css';


const Landing = () => {
    const [coins, setCoins] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchAPI = async () => {
            const data = await getAPI();
            setCoins(data);
        }

        fetchAPI();
    }, []);

    const searchHandler = (event) => {
        setSearch(event.target.value);
    }

    const searchedCoins = coins.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()))

    return(
        <>
            <input type='text' onChange={searchHandler} value={search} placeholder='Search' />
            {
                (coins.length) ?
                    searchedCoins.map(coin => 
                        <Coin key={coin.id}
                        symbol={coin.symbol}
                        name={coin.name}
                        image={coin.image} 
                        currentPrice={coin.current_price} 
                        marketCap={coin.market_cap} 
                        priceChangePercentage={coin.price_change_percentage_24h} 
                    />) 
                    : 
                <div>
                    <img src={snipperGif} alt='Snipper Gif' />
                    <p> Loading... </p>
                </div>
            }
        </>
    );
}

export default Landing;