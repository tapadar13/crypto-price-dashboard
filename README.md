# Crypto Price Dashboard 🚀💰

Crypto Price Dashboard is a web application that provides real-time Bitcoin price data visualization. It features a sleek and responsive interface with customizable time frames, interactive charts, and detailed price information.

## Features ✨

- **Real-time Bitcoin Price Data:** Fetches and displays the latest Bitcoin price data.
- **Customizable Time Frames:** Allows users to select different time frames (1 day, 3 days, 1 week, 1 month, 6 months, 1 year, max).
- **Interactive Charts:** Visualizes price data using interactive charts.
- **Price Display:** Shows current price, price change, and percentage change.

## Live Demo 🌐

Check out the live demo: [Crypto Price Dashboard](https://crypto-price-dashboard-beige.vercel.app/)

## Installation 🛠️

1. Clone the repository:

   ```bash
   https://github.com/tapadar13/crypto-price-dashboard.git
   cd crypto-price-dashboard
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## Project Structure 📂

- `App.jsx`: Main application component that renders the `CryptoChart` component.
- `components/`:
  - `CryptoChart.jsx`: Main component that manages state and renders price display, tab menu, time frame selector, and chart components.
  - `PriceDisplay.jsx`: Component that displays the current price, price change, and percentage change.
  - `TabMenu.jsx`: Component that renders the tab menu for navigating between different views.
  - `TimeFrameSelector.jsx`: Component that allows users to select different time frames for the chart.
  - `Chart.jsx`: Component that visualizes the Bitcoin price data using `recharts` library.
- `hooks/`:
  - `useBitcoinData.jsx`: Custom hook that fetches Bitcoin price data from the CoinGecko API.
- `services/`:
  - `coinGeckoService.js`: Service that fetches Bitcoin price data from the CoinGecko API.
- `utils/`:
  - `formatting.js`: Utility functions for formatting currency and percentage values.

## Dependencies 📦

- `react`: JavaScript library for building user interfaces.
- `axios`: Promise-based HTTP client for making API requests.
- `recharts`: Library for building charts in React.
- `lucide-react`: Icon library for React.

## Deployment 🚀

This project is deployed using Vercel.

## License 📜

This project is licensed under the MIT License.

## Acknowledgments 🙏

- CoinGecko API for providing the Bitcoin price data.
- Recharts library for the charting components.
- Lucide React for the icons.

## Contributing 🤝

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## Contact 📧

For any inquiries, please contact [monsurismyname@gmail.com].
