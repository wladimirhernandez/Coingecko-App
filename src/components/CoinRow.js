import React from "react";

const CoinRow = ({ coin, key, index }) => {
  function currencyFormat(num) {
    return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  return (
    <tr key={key}>
      <td>{index}</td>
      <td>
        <img
          src={coin.image}
          alt={coin.name}
          style={{ width: "21px" }}
          className="me-4 img-fluid"
        />
        <span>{coin.name}</span>
        <span className="ms-3 text-muted text-uppercase">{coin.symbol}</span>
      </td>

      <td>{currencyFormat(coin.current_price)}</td>
      <td
        className={
          coin.price_change_percentage_24h > 0 ? "text-success" : "text-danger"
        }
      >
        {coin.price_change_percentage_24h}
      </td>
      <td>{coin.total_volume}</td>
    </tr>
  );
};

export default CoinRow;
