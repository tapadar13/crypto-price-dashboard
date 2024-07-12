import { useState, useEffect } from "react";
import { fetchBitcoinData } from "../services/coinGeckoService";

const useBitcoinData = (days = 7) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await fetchBitcoinData(days);
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [days]);

  return { data, loading, error };
};

export default useBitcoinData;
