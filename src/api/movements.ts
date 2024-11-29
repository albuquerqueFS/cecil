import { useQuery } from "@tanstack/react-query"
import axios from "./config/axios"
import { MovementBodyRequest, MovementResponse } from "./config/models"
import { createMutation } from "src/lib/factories/mutation"

export const useMovements = () => {
    return useQuery<Array<MovementResponse>>({
        queryKey: ["movements", "get"],
        queryFn: async () => {
            const { data } = await axios.get("/v1/movements")
            return data
        },
    })
}

export const useCreateMovement = createMutation({
    mutationFn: async (data: MovementBodyRequest) => {
        const { data: res } = await axios.post("/v1/movements", data)
        return res
    },
})
