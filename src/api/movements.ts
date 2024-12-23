import axios from "./config/axios"
import { useQuery } from "@tanstack/react-query"
import { MovementBodyRequest, MovementResponse } from "./config/models"
import { createMutation } from "src/lib/factories/mutation"

export const useMovements = () => {
    return useQuery<Array<MovementResponse>>({
        queryKey: ["movements", "get"],
        queryFn: async () => {
            const { data } = await axios.get("/v1/movements/")
            return data
        },
    })
}

export const useCurrentBalance = () => {
    return useQuery<{ balance: string }>({
        queryKey: ["movements", "balance"],
        queryFn: async () => {
            const { data } = await axios.get("/v1/movements/balance")

            if (!data.balance) {
                return { balance: "0.00" }
            }

            let res = String(data.balance).split("")
            res[res.length - 3] = ","

            return { balance: res.join("") }
        },
    })
}

export const useCreateMovement = createMutation({
    mutationFn: async (data: MovementBodyRequest) => {
        const { data: res } = await axios.post("/v1/movements/", {
            ...data,
            types: data.types.toUpperCase(),
        })
        return res
    },
})
