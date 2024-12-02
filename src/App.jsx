import { useState } from "react";
import { useCurrency } from "./Components";
import { InputBox } from "./Components";
function App() {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");
  const [convertedAmount, setConvertedAmount] = useState("");
  const [amount, setAmount] = useState("");
  const currencyInfo = useCurrency(from);
  const options = currencyInfo ? Object.keys(currencyInfo) : [];

  const Swap = () => {
    setFrom(to);
    setTo(from);
    if (currencyInfo && currencyInfo[from] && currencyInfo[to]) {
      setConvertedAmount((amount * currencyInfo[to]).toFixed(2));
    }
  };

  const onHandle = (e) => {
    e.preventDefault();
    if (currencyInfo && currencyInfo[to]) {
      setConvertedAmount((amount * currencyInfo[to]).toFixed(2));
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-300 to-gray-500">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h1 className="mb-6 text-2xl font-bold text-center text-gray-800">
          Currency Converter
        </h1>
        <form onSubmit={onHandle}>
          {/* From Input */}
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            selectCurrency={from}
            onAmountChange={(value) => setAmount(value)}
          />
          {/* Swap Button */}
          <div className="relative w-full mt-4 ">
            <button
              type="button"
              onClick={Swap}
              className="relative px-3 py-2 text-white transition-all duration-300 transform -translate-x-1/2 bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 left-1/2"
            >
              Swap
            </button>
          </div>
          {/* To Input */}
          <InputBox
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectCurrency={to}
            amountDisabled
          />
          {/* Convert Button */}
          <button
            type="submit"
            className="w-full px-4 py-3 mt-6 font-semibold text-white transition-all duration-300 bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg"
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
