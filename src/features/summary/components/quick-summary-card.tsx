import { MovementResponse } from "@/api/config/models"
import { motion } from "framer-motion"

interface Props {
    title: string
    values: { value: string; description: string }[]
    color: string
    data: MovementResponse[]
}

export const QuickSummaryCard = ({ title, color, data }: Props) => {
    console.log(data)
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative flex h-fit flex-col items-start justify-start gap-2 px-5"
        >
            {/* <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-t from-white from-[3%] to-transparent"></div> */}
            <p className="ml-1 whitespace-nowrap text-xs font-light">{title}</p>
            <ul className="flex flex-col flex-nowrap items-start justify-start">
                {data.map((entry) => (
                    <li className="whitespace-nowrap text-sm" key={entry.value}>
                        <span className={`mr-2 text-${color}`}>
                            {entry.value}
                        </span>{" "}
                        {entry.name}
                    </li>
                ))}
                {data.length === 0 && (
                    <li className="whitespace-nowrap text-sm">
                        Nenhuma movimentação encontrada
                    </li>
                )}
            </ul>
        </motion.div>
    )
}

export const StatsSummary = () => (
    <div className="relative flex flex-col items-start justify-start gap-2 px-5 pr-4">
        <p className="ml-1 whitespace-nowrap text-xs font-light">Este mês</p>
        <ul className="flex flex-col items-start justify-start">
            <li className="whitespace-nowrap text-sm">
                <span className="text-green-600">R$9800,42</span> em entradas
            </li>
            <li className="whitespace-nowrap text-sm">
                <span className="text-red-600">R$5120,10</span> em gastos
            </li>
        </ul>
    </div>
)
