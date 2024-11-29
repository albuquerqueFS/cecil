import { Button } from "@components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@components/ui/card"
import { Input } from "@components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@components/ui/popover"
import { PlusIcon } from "@radix-ui/react-icons"
import { FC, PropsWithChildren, useState } from "react"
import { Action } from "src/@types/summary"

interface Props {
    action: Action
    labelPlaceholder: string
    onAdd: (values: { name: string }) => void
}

const InputPopover = ({
    type,
}: PropsWithChildren<{
    type: "outcome" | "income" | "recurrent"
}>) => {
    return (
        <Popover modal>
            <PopoverTrigger>
                <PlusIcon />
            </PopoverTrigger>
            <PopoverContent>
                <div className="p-4">
                    <h1>HI {type}</h1>
                    <Input type="text" />
                </div>
            </PopoverContent>
        </Popover>
    )
}

const QuickActionCard: FC<Props> = ({
    onAdd,
    labelPlaceholder,
    action: { title, icon },
}) => {
    const [name, setName] = useState<string>("")

    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center justify-between font-medium tracking-tight">
                        {title}{" "}
                        <div className="flex items-center gap-2 text-2xl">
                            <InputPopover type="outcome" />
                            {icon}
                        </div>
                    </CardTitle>
                </CardHeader>
                <CardContent className="relative flex flex-nowrap gap-1">
                    <Input
                        placeholder={labelPlaceholder}
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <Button
                        className="absolute right-0 top-0 mr-[20px] mt-[2px] h-8"
                        onClick={() =>
                            onAdd({
                                name,
                            })
                        }
                    >
                        {">"}
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default QuickActionCard
