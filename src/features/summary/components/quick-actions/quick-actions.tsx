import { MovementTypes } from "@/lib/enums"
import QuickActionCard from "./quick-action-card"
import { useMovements } from "@/api/movements"

const QuickActions = () => {
    const { data, isLoading } = useMovements()

    return (
        <div className="grid grid-cols-2 flex-nowrap gap-2">
            <QuickActionCard
                labelPlaceholder="Venda do carro"
                isLoading={isLoading}
                {...{
                    data:
                        data?.filter(
                            (movement) =>
                                movement.types === MovementTypes.INCOME,
                        ) || [],
                    title: "Adicionar Entrada",
                    icon: "💰",
                    successMessage: "Entrada adicionada com sucesso!",
                    type: MovementTypes.INCOME,
                }}
            />
            <QuickActionCard
                labelPlaceholder="Cabelereiro"
                isLoading={isLoading}
                {...{
                    data:
                        data?.filter(
                            (movement) =>
                                movement.types === MovementTypes.OUTCOME,
                        ) || [],
                    title: "Adicionar Gasto",
                    icon: "💸",
                    successMessage: "Gasto adicionado com sucesso!",
                    type: MovementTypes.OUTCOME,
                    footer: (
                        <p className="text-sm">
                            Ultima entrada{" "}
                            <span className="font-bold text-green-500">
                                R$1200,00
                            </span>
                        </p>
                    ),
                }}
            />
        </div>
    )
}

export default QuickActions
