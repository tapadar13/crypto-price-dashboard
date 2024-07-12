import axios from "axios";

const BASE_URL = "https://api.coingecko.com/api/v3";

export const fetchBitcoinData = async (days = 7) => {
  try {
    const response = await axios.get(`${BASE_URL}/coins/bitcoin/market_chart`, {
      params: {
        vs_currency: "usd",
        days: days,
      },
    });
    return response.data.prices.map((item) => ({
      date: new Date(item[0]).toLocaleDateString(),
      price: item[1],
    }));
  } catch (error) {
    console.error("Error fetching Bitcoin data:", error);
    throw error;
  }
};
