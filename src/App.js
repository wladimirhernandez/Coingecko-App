import axios from "axios";
import { useEffect, useState } from "react";
import TableCoins from "./components/TableCoins";

function App() {
  const getData = async () => {
    const res = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&__cf_chl_captcha_tk__=pmd_EdQoctD0LW5cyppszfH6MqktpiQ0S8395FTctLnv8sA-1631258725-0-gqNtZGzNAyWjcnBszQjl"
    );
    setCoins(res.data);
  };

  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <input
          type="text"
          placeholder="Search a Coin"
          className="form-control bg-dark text-light border-0 mt-4"
          onChange={(e) => setSearch(e.target.value)}
        />
        <TableCoins coins={coins} search={search} />
      </div>
    </div>
  );
}

export default App;
