import { Button, Input } from "@/components/ui"
import { Label } from "@/components/ui/label"
import ResponsiveDialog from "@/components/ui/responsive-dialog"
import { cn } from "@/lib/utils"
import { ReactElement } from "react"

function NewInvestmentForm({ trigger }: { trigger: ReactElement }) {
    const fields = [
        { field: "email", label: "Email", type: "email", options: [] },
        {
            field: "name",
            label: "Nome da Movimentação",
            type: "text",
            options: [],
        },
        {
            field: "types",
            label: "Tipo de Movimentação",
            type: "text",
            options: [],
        },
        { field: "category", label: "Categoria", type: "text", options: [] },
    ]
    return (
        <ResponsiveDialog
            title="Novo Investimento"
            description=""
            trigger={trigger}
        >
            <form className={cn("grid items-start gap-4")}>
                {fields.map(({ field, label, type }) => (
                    <div key={field} className="grid gap-2">
                        <Label htmlFor={field}>{label}</Label>
                        <Input type={type} id={field} />
                    </div>
                ))}
                <Button type="submit">Save changes</Button>
            </form>
        </ResponsiveDialog>
    )
}

export default NewInvestmentForm
