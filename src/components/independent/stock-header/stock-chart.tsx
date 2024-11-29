import { FC } from "react"
import { Line, LineChart, ResponsiveContainer } from "recharts"

interface ChartPoint {
    x: number
    y: number
    name?: string
}

interface Props {
    data: ChartPoint[]
}

const StockChart: FC<Props> = ({ data }) => {
    return (
        <ResponsiveContainer
            width="100%"
            height="100%"
            className="bg-gradient-to-t from-green-200"
        >
            <LineChart data={data}>
                <Line
                    type="monotone"
                    dataKey="x"
                    stroke="#82ca9d"
                    dot={false}
                />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default StockChart
