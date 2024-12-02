const InputBox = ({
  label,
  amount,
  currencyOptions,
  onCurrencyChange,
  selectCurrency,
  onAmountChange,
  amountDisabled = false,
}) => (
  <div className="mb-4">
    <label className="block mb-2 text-sm font-semibold text-gray-700">
      {label}
    </label>
    <div className="flex">
      <input
        type="number"
        value={amount}
        onChange={(e) => onAmountChange && onAmountChange(e.target.value)}
        disabled={amountDisabled}
        className="w-2/3 px-3 py-2 mr-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
      />
      <select
        value={selectCurrency}
        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        className="w-1/3 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
      >
        {currencyOptions.map((currency) => (
          <option key={currency} value={currency}>
            {currency.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  </div>
);

export default InputBox;
