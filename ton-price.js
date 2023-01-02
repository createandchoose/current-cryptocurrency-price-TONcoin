async function getTonPrice() {
    const response = await fetch('https://api.coingecko.com/api/v3/coins/the-open-network');
    const data = await response.json();
    return data.market_data.current_price.usd;
  }

  getTonPrice().then(tonPrice => {
    document.getElementById('ton-price').textContent = tonPrice;
  });