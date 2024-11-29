import QuickActionCard from "./components/quick-action-card"
import { QuickSummaryCard, StatsSummary } from "./components/quick-summary-card"
import InvestmentsTable from "./components/investments-table"

const lastEntries = [
    { value: "R$500,00", description: "2/2 Salário" },
    { value: "R$700,00", description: "Retorno Impos..." },
    { value: "R$900,00", description: "1/2 Salário" },
    { value: "R$1200,00", description: "BCG Salário" },
]

const lastExpenses = [
    { value: "R$500,00", description: "Fatura Nubank" },
    { value: "R$1900,00", description: "Aluguel" },
    { value: "R$900,00", description: "1/2 Salário" },
    { value: "R$1200,00", description: "BCG Salário" },
]

const SummaryPage = () => {
    return (
        <div className="w-full">
            <div className="mb-2 mt-2 flex items-start justify-start">
                <h1 className="text-left text-3xl font-bold tracking-tight">
                    Visão Resumida
                </h1>

                <div className="ml-6 text-green-500">
                    <span className="text-2xl">R$</span>
                    <span className="text-3xl">2.000,00+</span>
                </div>
            </div>

            <div className="grid w-full grid-cols-3 gap-4 pt-4">
                <QuickSummaryCard
                    title="Ultimas entradas"
                    values={lastEntries}
                    color="green-500"
                />
                <QuickSummaryCard
                    title="Ultimos gastos"
                    values={lastExpenses}
                    color="red-500"
                />
                <StatsSummary />
            </div>

            <div className="grid grid-cols-3 flex-nowrap gap-2">
                <QuickActionCard
                    labelPlaceholder="Venda do carro"
                    action={{
                        title: "Adicionar entrada",
                        icon: "💰",
                        successMessage: "Entrada adicionada com sucesso!",
                    }}
                    onAdd={() => {}}
                />
                <QuickActionCard
                    labelPlaceholder="Cabelereiro"
                    action={{
                        title: "Adicionar Gasto",
                        icon: "💸",
                        successMessage: "Gasto adicionado com sucesso!",
                        footer: (
                            <p className="text-sm">
                                Ultima entrada{" "}
                                <span className="font-bold text-green-500">
                                    R$1200,00
                                </span>
                            </p>
                        ),
                    }}
                    onAdd={() => {}}
                />
                <QuickActionCard
                    labelPlaceholder="Salário"
                    action={{
                        title: "Adicionar item recorrente",
                        icon: "🔄",
                        successMessage:
                            "Item recorrente adicionado com sucesso!",
                        footer: (
                            <p className="text-sm">
                                Ultimo gasto{" "}
                                <span className="font-bold text-red-500">
                                    R$500,00
                                </span>
                            </p>
                        ),
                    }}
                    onAdd={() => null}
                />
            </div>
            {/*  */}
            <h1 className="mt-8 text-left text-3xl font-bold tracking-tight">
                Seus Investimentos
            </h1>
            <div className="grid grid-cols-2">
                <InvestmentsTable />
            </div>
        </div>
    )
}

export default SummaryPage
