import { useState, useEffect } from "react";
import { fetchBitcoinData } from "../services/coinGeckoService";
import { Loader2 } from "lucide-react";

const Spinner = () => (
  <div className="flex justify-center items-center h-24">
    <Loader2 className="animate-spin h-8 w-8 text-blue-500" />
  </div>
);

const ErrorMessage = ({ message, onRetry }) => (
  <div className="border border-red-300 rounded-md p-4 bg-red-50 text-red-800">
    <h4 className="text-lg font-semibold mb-2">Error</h4>
    <p className="mb-4">{message}</p>
    <button
      onClick={onRetry}
      className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
    >
      Retry
    </button>
  </div>
);

const useBitcoinData = (days = 7) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);
      const result = await fetchBitcoinData(days);
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [days]);

  return {
    data,
    loading,
    error,
    LoadingComponent: Spinner,
    ErrorComponent: error ? (
      <ErrorMessage message={error} onRetry={fetchData} />
    ) : null,
  };
};

export default useBitcoinData;
