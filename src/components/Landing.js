import React, { useEffect, useState } from 'react';

// Components
import Coin from './Coin';
import Loader from './Loader';

// API
import { getAPI } from '../services/api';

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
                        <div className={styles.coinContainer}>
                        {
                            searchedCoins.map(coin => 
                                <Coin key={coin.id}
                                name={coin.name}
                                image={coin.image} 
                                symbol={coin.symbol}
                                marketCap={coin.market_cap} 
                                currentPrice={coin.current_price} 
                                priceChangePercentage={coin.price_change_percentage_24h} 
                            />)
                        }
                    </div> : 
                    
                    <Loader />
                }
        </>
    );
}

export default Landing;