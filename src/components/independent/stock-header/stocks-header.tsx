import { CurrencySelectors } from "@api/config/models"
import StockChart from "./stock-chart"
import { useCurrencyPrices, useCurrencyPricesHistory } from "@api/currencies"
import { formatCurrency } from "src/lib/utils"

const StockWithChart = ({ value }: { value: string }) => {
    const { data: history } = useCurrencyPricesHistory()
    return (
        <div className="flex justify-start gap-2">
            <div className="flex flex-col items-center">
                <span className="flex font-bold text-green-600">USD</span>
                <span className="flex font-bold text-green-600">{value}</span>
            </div>
            <span className="flex h-7 w-32 font-bold text-green-600">
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
    )
}

const stocks: {
    key: keyof typeof CurrencySelectors
    render: (value: string) => JSX.Element
}[] = [
    {
        key: CurrencySelectors.USDBRL,
        render: (value) => {
            return <StockWithChart value={value} />
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
]

const StocksHeader = () => {
    const { data: currencies, isLoading: currenciesLoading } =
        useCurrencyPrices()

    return (
        <div className="flex gap-2 rounded-lg p-2 pb-4 text-xs text-white">
            {!currenciesLoading &&
                currencies &&
                stocks.map((stock, index) => (
                    <div
                        key={index}
                        className="flex flex-nowrap items-center justify-center gap-[5px] font-bold"
                    >
                        {stock.render(
                            formatCurrency(currencies[stock.key].high),
                        )}
                        <span className="text-2xl text-black">|</span>
                    </div>
                ))}
            {currenciesLoading && (
                <div className="h-7 w-32 animate-pulse bg-gray-300"></div>
            )}
        </div>
    )
}

export default StocksHeader
