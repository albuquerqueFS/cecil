import { AwesomeApiHistoryResponse, CurrencySelectors } from "@api/models";
import StockChart from "./stock-chart";
import { useCurrencyPrices, useCurrencyPricesHistory } from "@api/currencies";
import { formatCurrency } from "src/lib/utils";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
] as const;

const StockWithChart = ({ value }: { value: string }) => {
  const { data: history } = useCurrencyPricesHistory();
  return (
    <div className="flex justify-start gap-2">
      <div className="flex flex-col items-center">
        <span className="flex font-bold text-green-600">USD</span>
        <span className="flex font-bold text-green-600">{value}</span>
      </div>
      <span className="flex w-32 font-bold text-green-600 h-7">
        {history && (
          <StockChart
            data={history.map((point) => ({
              x: parseInt(point.timestamp),
              y: parseInt(point.high),
              name: point.high,
            }))}
          />
        )}
      </span>
    </div>
  );
};

const stocks: {
  key: keyof typeof CurrencySelectors;
  render: (value: string) => JSX.Element;
}[] = [
  {
    key: CurrencySelectors.USDBRL,
    render: (value) => {
      return <StockWithChart value={value} />;
    },
  },
  {
    key: CurrencySelectors.BTCBRL,
    render: (value) => (
      <div className="flex flex-col">
        <span className="px-1 text-yellow-600">BTC</span>
        <span className="px-1 text-yellow-600">{value}</span>
      </div>
    ),
  },
];

const StocksHeader = () => {
  const { data: currencies, isLoading: currenciesLoading } =
    useCurrencyPrices();

  return (
    <div className="flex gap-2 p-2 pb-4 text-xs text-white rounded-lg ">
      {!currenciesLoading &&
        currencies &&
        stocks.map((stock, index) => (
          <div
            key={index}
            className="flex items-center flex-nowrap justify-center gap-[5px] font-bold"
          >
            {stock.render(formatCurrency(currencies[stock.key].high))}
            <span className="text-2xl text-black">|</span>
          </div>
        ))}
      {currenciesLoading && (
        <div className="w-32 bg-gray-300 animate-pulse h-7"></div>
      )}
    </div>
  );
};

export default StocksHeader;
