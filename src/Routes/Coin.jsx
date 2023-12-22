import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Coin = () => {
  const params = useParams();
  const [coin, setCoin] = useState({});

  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

  useEffect(() => {
    axios.get(url)
      .then((res) => {
        setCoin(res.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [url]); // Include 'url' in the dependency array

  return (
    <div>
      <div className="coin-container">
        {/* Displaying coin information */}
        <h1>{coin.name}</h1>
        <p>Symbol: {coin.symbol}</p>
        {/* Add more details as needed */}
      </div>
    </div>
  )
}

export default Coin;