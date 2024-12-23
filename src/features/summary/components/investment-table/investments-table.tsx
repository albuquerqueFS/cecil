import { useInvestments } from "@api/investment"
import { Skeleton } from "@components/ui/skeleton"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@components/ui/table"
import { PlusIcon } from "@radix-ui/react-icons"
import NewInvestmentForm from "./new-investment-dialog"

const InvestmentsTable = () => {
    const { data, isLoading } = useInvestments()
    console.log("investimentos", data)
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Investimentos</TableHead>
                    <TableHead>Mercado</TableHead>
                    <TableHead>Balanço</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data &&
                    data.map((investment) => (
                        <TableRow key={investment.id}>
                            <TableCell className="text-left">
                                {investment.name}
                            </TableCell>
                            <TableCell className="text-left">
                                {investment.types}
                            </TableCell>
                            <TableCell className="text-left">
                                {investment.value}
                            </TableCell>
                        </TableRow>
                    ))}
                {data?.length === 0 && (
                    <TableRow>
                        <TableCell className="text-left" colSpan={3}>
                            Nenhum investimento encontrado
                        </TableCell>
                    </TableRow>
                )}
                {isLoading && (
                    <TableRow>
                        <TableCell className="text-left">
                            <Skeleton className="h-[20px] w-[100px] rounded-full" />
                        </TableCell>
                        <TableCell className="text-left">
                            <Skeleton className="h-[20px] w-[100px] rounded-full" />
                        </TableCell>
                        <TableCell className="text-left">
                            <Skeleton className="h-[20px] w-[100px] rounded-full" />
                        </TableCell>
                    </TableRow>
                )}
                <TableRow>
                    <TableCell
                        colSpan={3}
                        className="cursor-pointer bg-gray-100 transition-all hover:bg-gray-200"
                    >
                        <NewInvestmentForm
                            trigger={
                                <span className="flex items-center justify-center gap-2 py-1 text-xs">
                                    Nova Movimentação
                                    <PlusIcon height={".8rem"} />
                                </span>
                            }
                        />
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}

export default InvestmentsTable
