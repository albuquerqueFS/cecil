import { useCreateMovement } from "@/api/movements"
import { Toggle } from "@/components/ui/toggle"
import { MovementTypes } from "@/lib/enums"
import { Button } from "@components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card"
import { Input } from "@components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@components/ui/popover"
import { PlusIcon } from "@radix-ui/react-icons"
import { FC, PropsWithChildren, useState } from "react"
import { Action } from "src/@types/summary"
import { QuickSummaryCard } from "../quick-summary-card"
import { motion } from "framer-motion"

interface Props extends Action {
    labelPlaceholder: string
    isLoading: boolean
}

const InputPopover = ({
    title,
    type,
}: PropsWithChildren<{
    title: string
    type: MovementTypes
}>) => {
    const { mutateAsync, isPending } = useCreateMovement()
    const [value, setValue] = useState<number>(100)
    const [name, setName] = useState<string>("")
    const [isRecurrent, setIsRecurrent] = useState<boolean>(false)

    const onAdd = async () => {
        if (value) {
            await mutateAsync({
                category: type,
                name: name,
                is_recurrent: isRecurrent,
                value,
                types: MovementTypes[
                    type.toUpperCase() as keyof typeof MovementTypes
                ],
            })
        }
    }

    return (
        <Popover modal>
            <PopoverTrigger>
                <PlusIcon />
            </PopoverTrigger>
            <PopoverContent className="p-0">
                <div className="flex flex-col items-stretch gap-2 p-4">
                    <div className="flex justify-between">
                        <h1>{title}</h1>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="name">Nome</label>
                        <Input
                            id="name"
                            type="text"
                            placeholder="Compra de ações"
                            className="w-full"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            disabled={isPending}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="value">Valor</label>
                        <Input
                            id="value"
                            type="number"
                            placeholder="0.00"
                            className="w-full"
                            value={value}
                            onChange={(e) => setValue(Number(e.target.value))}
                            disabled={isPending}
                        />
                    </div>
                    <Toggle
                        pressed={isRecurrent}
                        onPressedChange={(v) => setIsRecurrent(v)}
                        className="w-fit p-0 px-2 text-gray-400"
                        variant={"outline"}
                        size={"sm"}
                        aria-label="É recorrente?"
                    >
                        É recorrente?
                    </Toggle>
                    <Button onClick={() => onAdd()} className="mt-4 w-full">
                        {isPending ? "Adicionando..." : "Adicionar"}
                    </Button>
                </div>
            </PopoverContent>
        </Popover>
    )
}

const lastEntries = [
    { value: "R$500,00", description: "2/2 Salário", isRecurrent: true },
    { value: "R$700,00", description: "Retorno Impos...", isRecurrent: false },
    { value: "R$900,00", description: "1/2 Salário", isRecurrent: true },
    { value: "R$1200,00", description: "BCG Salário", isRecurrent: false },
]

const QuickActionCard: FC<Props> = ({ title, icon, type, isLoading, data }) => {
    const colors = {
        [MovementTypes.INCOME]: "green-500",
        [MovementTypes.OUTCOME]: "red-500",
    }
    return (
        <div>
            <Card>
                <CardHeader className="py-2">
                    <CardTitle className="flex items-center justify-between font-medium tracking-tight">
                        {title}{" "}
                        {!isLoading && (
                            <div className="flex items-center gap-2 text-2xl">
                                <InputPopover title={title} type={type} />
                                {icon}
                            </div>
                        )}
                        {isLoading && (
                            <div className="flex items-center gap-2 text-2xl">
                                <div className="h-[1rem] w-[.8rem] rounded-full bg-gray-200"></div>
                                {icon}
                            </div>
                        )}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    {!isLoading && (
                        <QuickSummaryCard
                            title=""
                            values={lastEntries}
                            color={colors[type]}
                            data={data}
                        ></QuickSummaryCard>
                    )}
                    {isLoading && (
                        <div className="flex flex-col items-start justify-start gap-2">
                            <div className="h-[1rem] w-full rounded-full bg-gray-200"></div>
                            <div className="h-[1rem] w-full rounded-full bg-gray-200"></div>
                            <div className="h-[1rem] w-full rounded-full bg-gray-200"></div>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}

export default QuickActionCard
