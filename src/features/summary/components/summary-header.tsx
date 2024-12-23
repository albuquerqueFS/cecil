import { useCurrentBalance } from "@/api/movements"
import { Skeleton } from "@/components/ui/skeleton"

export const SummaryHeader = () => {
    const { data, isLoading } = useCurrentBalance()
    return (
        <div className="my-6 flex items-start justify-start">
            <h1 className="text-left text-3xl font-bold tracking-tight">
                Visão Resumida
            </h1>

            <div className="ml-6 text-green-500">
                {!isLoading && (
                    <>
                        <span className="mr-1 text-2xl">R$</span>
                        <span className="text-3xl">
                            {data ? data.balance : "00,00"}
                        </span>
                    </>
                )}
                {isLoading && (
                    <>
                        <div className="h-8">
                            <Skeleton className="h-full w-24" />
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}
