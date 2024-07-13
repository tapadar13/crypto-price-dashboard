export const formatCurrency = (value) => {
  return value.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const formatPercentage = (value) => {
  return `${value.toFixed(2)}%`;
};
