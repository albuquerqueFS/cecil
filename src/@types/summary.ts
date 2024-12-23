import { MovementResponse } from "@/api/config/models"
import { MovementTypes } from "@/lib/enums"

export interface Action {
    title: string
    icon: React.ReactNode
    data: MovementResponse[]
    successMessage: string
    type: MovementTypes
    footer?: React.ReactNode
}
