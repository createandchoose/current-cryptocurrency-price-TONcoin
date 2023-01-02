# Вывод текущего курса TONcoin c испольованием CoinGecko API
 
[![Screenshot-Toncoin.png](https://i.postimg.cc/ZRjFjBGv/Screenshot-2023-01-03-at-05-07-11-Toncoin.png)](https://postimg.cc/5YYC20Nf)

Этот код создает функцию <kbd>getTonPrice</kbd>, которая отправляет запрос к [CoinGecko API](https://www.coingecko.com/ru/api/documentation) для получения текущего курса TON coin. Затем код вызывает функцию <kbd>getTonPrice</kbd> и отображает результат в элементе с идентификатором <kbd>ton-price</kbd>.

> Вы должны увидеть текущий курс TON coin в USD на странице.

## Для быстрого копирования

```js
async function getTonPrice() {
    const response = await fetch('https://api.coingecko.com/api/v3/coins/the-open-network');
    const data = await response.json();
    return data.market_data.current_price.usd;
  }

  getTonPrice().then(tonPrice => {
    document.getElementById('ton-price').textContent = tonPrice;
  });
```