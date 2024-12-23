import InvestmentsTable from "./components/investment-table/investments-table"
import QuickActions from "./components/quick-actions/quick-actions"
import { SummaryHeader } from "./components/summary-header"

const SummaryPage = () => {
    return (
        <div className="w-full">
            <SummaryHeader />

            <QuickActions />

            <h1 className="mb-4 mt-8 text-left text-3xl font-bold tracking-tight">
                Seus Investimentos
            </h1>
            <div className="grid grid-cols-2">
                <InvestmentsTable />
            </div>
        </div>
    )
}

export default SummaryPage
