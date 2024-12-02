import { useState, useEffect } from "react";

function useCurrency(baseCurrency) {
  const [rates, setRates] = useState(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(
          `https://api.exchangerate-api.com/v4/latest/${baseCurrency}`
        );
        const data = await response.json();
        setRates(data.rates);
      } catch (error) {
        console.error("Error fetching currency data:", error);
      }
    };

    fetchRates();
  }, [baseCurrency]);

  return rates;
}

export default useCurrency;