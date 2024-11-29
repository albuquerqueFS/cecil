import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import {
    AwesomeApiHistoryResponse,
    AwesomeApiItemResponse,
} from "./config/models"

export const useCurrencyPrices = () => {
    return useQuery<AwesomeApiItemResponse>({
        queryKey: ["currency-prices", "list"],
        queryFn: async () => {
            const { data } = await axios.get(
                "https://economia.awesomeapi.com.br/json/last/USD-BRL,BTC-BRL",
            )
            return data
        },
    })
}

export const useCurrencyPricesHistory = () => {
    return useQuery<Array<AwesomeApiHistoryResponse>>({
        queryKey: ["currency-prices", "history"],
        queryFn: async () => {
            const { data } = await axios.get(
                "https://economia.awesomeapi.com.br/json/daily/USD-BRL/15",
            )
            return data
        },
    })
}
